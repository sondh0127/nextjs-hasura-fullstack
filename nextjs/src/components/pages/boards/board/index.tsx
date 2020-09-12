import produce from 'immer'
import { useRouter } from 'next/router'
import React from 'react'
import {
  DragDropContext,
  DragStart,
  DragUpdate,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd'
import Scrollbar from 'react-scrollbars-custom'

import {
  useBoardQuery,
  useMoveCardMutation,
  useUpdateCardMutation,
  useUpdateListMutation,
} from '@/generated/graphql'
import { useLastPositionNumber } from '@/zustands/boards'

import ListBoard from '../list'
import NewList from '../list/NewList'
import {
  getUpdatePositionMove,
  getUpdatePositionReorder,
  reorder,
} from './boardUtils'

const BoardPage: React.FC = () => {
  const router = useRouter()
  const { setLastPosition } = useLastPositionNumber()

  const { data, loading } = useBoardQuery({
    variables: {
      id: Number(router.query.boardId),
    },
    skip: !router.query.boardId,
  })

  const [updateList] = useUpdateListMutation()
  const [updateCard] = useUpdateCardMutation()
  const [moveCard] = useMoveCardMutation()

  const renderLists = React.useMemo(() => {
    return data?.boards_by_pk?.lists || []
  }, [data])

  React.useEffect(() => {
    setLastPosition(renderLists[renderLists.length - 1]?.position || 1)
  }, [renderLists])

  const onDragEnd = async (result: DropResult, provided: ResponderProvided) => {
    const { source, destination, type } = result

    // dropped outside the list
    if (!destination) {
      return
    }

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    ) {
      return
    }

    // DragDrop a "List"
    if (type === 'LIST') {
      const updatedPosition = getUpdatePositionReorder(
        renderLists,
        source.index,
        destination.index,
      )
      const sourceList = renderLists[source.index]

      updateList({
        variables: {
          id: sourceList.id,
          name: sourceList.name,
          position: updatedPosition,
        },
        update: (cache, { data }) => {
          if (data?.update_lists_by_pk) {
            const cacheId = cache.identify({
              __typename: 'boards',
              id: sourceList.board_id,
            })
            if (cacheId) {
              cache.modify({
                id: cacheId,
                fields: {
                  lists(existingListRefs = []) {
                    return reorder(
                      existingListRefs,
                      source.index,
                      destination.index,
                    )
                  },
                },
              })
            }
          }
        },
        optimisticResponse: (variables) => {
          return {
            __typename: 'mutation_root',
            update_lists_by_pk: {
              ...sourceList,
              position: updatedPosition,
            },
          }
        },
      })
    }

    if (type === 'CARD') {
      /* same list: reorder card */
      if (source.droppableId === destination.droppableId) {
        const listCards = renderLists.find(
          (item) => item.id === Number(source.droppableId),
        )?.cards

        if (!listCards) {
          return
        }

        const updatedPosition = getUpdatePositionReorder(
          listCards,
          source.index,
          destination.index,
        )

        const sourceCard = listCards[source.index]

        await updateCard({
          variables: {
            id: sourceCard.id,
            title: sourceCard.title,
            position: updatedPosition,
          },
          update: (cache, { data }) => {
            if (data?.update_cards_by_pk) {
              const cacheId = cache.identify({
                __typename: 'lists',
                id: sourceCard.list_id,
              })
              if (cacheId) {
                cache.modify({
                  id: cacheId,
                  fields: {
                    cards(existingCardRefs = []) {
                      return reorder(
                        existingCardRefs,
                        source.index,
                        destination.index,
                      )
                    },
                  },
                })
              }
            }
          },
          optimisticResponse: (variables) => {
            return {
              __typename: 'mutation_root',
              update_cards_by_pk: {
                ...sourceCard,
                position: updatedPosition,
              },
            }
          },
        })
      } else {
        /**
         * Diferent list: move card
         */

        const sourceListCards = renderLists.find(
          (item) => item.id === Number(source.droppableId),
        )?.cards

        const destinationListCards = renderLists.find(
          (item) => item.id === Number(destination.droppableId),
        )?.cards

        if (!sourceListCards || !destinationListCards) {
          return
        }

        const updatedPosition = getUpdatePositionMove(
          sourceListCards,
          destinationListCards,
          source.index,
          destination.index,
        )

        const sourceCard = sourceListCards[source.index]

        await moveCard({
          variables: {
            id: sourceCard.id,
            list_id: Number(destination.droppableId),
            title: sourceCard.title,
            position: updatedPosition,
          },
          update: (cache, { data }) => {
            if (data?.update_cards_by_pk) {
              const cardCacheId = cache.identify(data.update_cards_by_pk)

              if (!cardCacheId) {
                return
              }

              const cacheId = cache.identify({
                __typename: 'lists',
                id: source.droppableId,
              })

              if (cacheId) {
                cache.modify({
                  id: cacheId,
                  fields: {
                    cards(existingRefs = []) {
                      const next = existingRefs.filter(
                        (listRef: { __ref: string }) =>
                          listRef.__ref !== cardCacheId,
                      )
                      console.log(`🇻🇳 [LOG]: cards -> next`, next)
                      return next
                    },
                  },
                })
              }

              const cacheIdDestination = cache.identify({
                __typename: 'lists',
                id: destination.droppableId,
              })

              if (cacheIdDestination) {
                cache.modify({
                  id: cacheIdDestination,
                  fields: {
                    cards(existingCardRefs = [], { toReference }) {
                      const moveRef = toReference(cardCacheId)
                      if (moveRef) {
                        const next = produce(
                          existingCardRefs as any[],
                          (draftState) => {
                            draftState.splice(destination.index, 0, moveRef)
                          },
                        )
                        return next
                      }
                    },
                  },
                })
              }
            }
          },
          optimisticResponse: () => ({
            __typename: 'mutation_root',
            update_cards_by_pk: {
              ...sourceCard,
              position: updatedPosition,
            },
          }),
        })
      }
    }
  }

  let listRender
  if (loading) {
    listRender = (
      <div className={`flex flex-no-wrap min-w-max-content`}>
        {[...Array(3)].map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col max-w-sm p-4 mx-4 space-y-3 border border-gray-300 rounded-md shadow w-72"
          >
            <div className="flex space-x-4 animate-pulse">
              <div className="flex-1 py-1 space-y-4">
                <div className="w-3/4 h-4 bg-gray-400 rounded"></div>
                {/* <div className="space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                  <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
                </div> */}
              </div>
            </div>
            {[...Array(4)].map((item, index) => (
              <div
                key={index}
                className="flex flex-col max-w-sm p-4 border border-gray-300 rounded-md shadow"
              >
                <div className="flex space-x-4 animate-pulse">
                  <div className="flex-1 py-1 space-y-2">
                    <div className="h-4 bg-gray-400 rounded"></div>
                    <div className="w-5/6 h-4 bg-gray-400 rounded"></div>
                  </div>
                </div>
              </div>
            ))}
            <div className="flex flex-col max-w-sm border-t border-gray-300 rounded-md shadow">
              <div className="flex space-x-4 animate-pulse">
                <div className="flex-1 py-1 space-y-2">
                  <div className="h-4 bg-gray-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    )
  } else {
    listRender = (
      <div className={`flex flex-no-wrap h-screen w-max-content`}>
        <DragDropContext
          // onDragStart={onDragStart}
          // onDragUpdate={onDragUpdate}
          onDragEnd={onDragEnd}
        >
          {/* List */}
          <Droppable
            droppableId="board"
            type="LIST"
            direction="horizontal"
            // ignoreContainerClipping={true}
          >
            {(
              { innerRef, droppableProps, placeholder },
              { isDraggingOver },
            ) => {
              return (
                <div
                  ref={innerRef}
                  {...droppableProps}
                  className={`inline-flex ${isDraggingOver && ``}`}
                  style={{
                    overflowAnchor: 'none',
                  }}
                >
                  {renderLists.map((list, index) => (
                    <ListBoard list={list} index={index} key={index} />
                  ))}
                  {placeholder}
                </div>
              )
            }}
          </Droppable>
        </DragDropContext>
        <div className={``}>
          <NewList lastId={renderLists[renderLists.length - 1]?.id || 0} />
        </div>
      </div>
    )
  }

  return (
    <div className={`h-screen space-x-2 -mt-14`}>
      <Scrollbar noScrollY className={``}>
        <div className={`pt-14`}>
          <div className={`mt-4 mb-8`}>
            <h2
              className={`text-3xl font-semibold text-center text-cool-gray-100`}
            >
              {data?.boards_by_pk?.icon} {data?.boards_by_pk?.name}
            </h2>
          </div>
          {listRender}
        </div>
      </Scrollbar>
    </div>
  )
}

export default BoardPage
