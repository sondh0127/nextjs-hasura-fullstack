import faker from 'faker'
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

import { useBoardSubscription, useMoveListMutation } from '@/generated/graphql'
import { List } from '@/types/model'
import { useLastPositionNumber } from '@/zustands/boards'

import { move, reorder } from './boardUtils'
import BoardList from './list/BoardList'
import NewList from './list/NewList'

const BoardPage: React.FC = () => {
  const router = useRouter()
  const { setLastPosition, lastPosition } = useLastPositionNumber()
  const [boardCols, setBoardCols] = React.useState<List[]>([])

  const { data, loading } = useBoardSubscription({
    variables: {
      id: Number(router.query.boardId),
    },
    skip: !router.query.boardId,
  })

  const renderLists = React.useMemo(() => {
    return data?.boards_by_pk?.lists || []
  }, [data])
  console.log(`🇻🇳 [LOG]: renderLists`, JSON.stringify(renderLists, null, 0))

  React.useEffect(() => {
    setLastPosition(renderLists.length - 1)
    console.log(`🇻🇳 [LOG]: useEffect`)
    setBoardCols(renderLists)
  }, [renderLists])

  const [moveList, { loading: moveLoading }] = useMoveListMutation()

  const onDragStart = (initial: DragStart, provided: ResponderProvided) => {
    document.body.style.color = 'white'
  }

  const onDragUpdate = (initial: DragUpdate, provided: ResponderProvided) => {
    document.body.style.backgroundColor = '0023cf7a'
  }

  const onDragEnd = async (result: DropResult, provided: ResponderProvided) => {
    console.log(`🇻🇳 [LOG]: onDragEnd -> result`, { result })
    console.log(`🇻🇳 [LOG]: onDragEnd -> provided`, { provided })
    document.body.style.color = 'inherit'
    document.body.style.backgroundColor = 'inherit'

    const { source, destination } = result

    // dropped outside the list
    if (!destination) {
      return
    }
    const sInd = +source.droppableId
    const dInd = +destination.droppableId

    // DragDrop a "List"
    if (source.droppableId === 'board' && destination.droppableId === 'board') {
      const sourcePos = Math.min(source.index, destination.index)
      const destPos = Math.max(source.index, destination.index)
      const nextList = reorder(boardCols, source.index, destination.index)
      console.log(`🇻🇳 [LOG]: onDragEnd -> nextList`, nextList)
      // setBoardCols(nextList)

      // await moveList({
      //   variables: {
      //     board_id: Number(router.query.boardId),
      //     sourcePos,
      //     destPos,
      //     startPos: sourcePos,
      //     endPos: destPos,
      //     inc: -1,
      //   },
      // })
    } else {
      // Dragdrop a "Card"
    }

    // if (sInd === dInd) {
    //   const tasks = boardCols[sInd].cards
    //   const nextTask = reorder(tasks, source.index, destination.index)

    //   const next = produce(boardCols, (draftState) => {
    //     draftState[sInd].cards = nextTask
    //   })
    //   setBoardCols(next)
    // } else {
    //   const result = move(
    //     boardCols[sInd].cards,
    //     boardCols[dInd].cards,
    //     source,
    //     destination,
    //   )
    //   const next = produce(boardCols, (draftState) => {
    //     draftState[sInd].cards = result[sInd]
    //     draftState[dInd].cards = result[dInd]
    //   })

    //   setBoardCols(next)
    // }
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
          <DragDropContext
            onDragStart={onDragStart}
            onDragUpdate={onDragUpdate}
            onDragEnd={onDragEnd}
          >
            {/* List */}
            <Droppable
              droppableId="board"
              // type="COLUMN"
              direction="vertical"
              // ignoreContainerClipping={Boolean(containerHeight)}
              // isCombineEnabled={isCombineEnabled}
            >
              {({ innerRef, droppableProps, placeholder }) => {
                return (
                  <div
                    ref={innerRef}
                    // {...droppableProps}
                    className={`flex flex-col max-w-sm mx-auto space-y-4 xs:space-x-4`}
                  >
                    {boardCols.map((list, index) => (
                      <BoardList list={list} index={index} key={index} />
                    ))}
                    {placeholder}
                  </div>
                )
              }}
            </Droppable>
          </DragDropContext>

          {/* <NewList /> */}
        </div>
      </Scrollbar>
    </div>
  )
}

export default BoardPage
