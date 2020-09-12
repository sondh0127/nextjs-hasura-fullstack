import { Card, CardHeader } from '@retail-ui/core'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import AddInput from '@/components/AddInput'
import { useInsertListMutation } from '@/generated/graphql'
import { useLastPositionNumber } from '@/zustands/boards'

interface NewListProps {
  lastId: number
}

const NewList: React.FC<NewListProps> = (props) => {
  const { lastId } = props
  const router = useRouter()
  const [isCreating, setIsCreating] = React.useState(false)

  const { lastPosition } = useLastPositionNumber()

  const [insertList, { loading }] = useInsertListMutation()

  const handleNewList = useCallback(
    async (value: string) => {
      try {
        const getPositionOfNewList = (): number => {
          const bufferPosition = 1024
          return lastPosition + bufferPosition
        }

        await insertList({
          variables: {
            name: value,
            position: getPositionOfNewList(),
            board_id: Number(router.query.boardId),
          },
          update: (cache, { data }) => {
            if (data?.insert_lists_one) {
              const cacheId = cache.identify(data?.insert_lists_one)
              if (cacheId) {
                cache.modify({
                  id: cache.identify({
                    __typename: 'boards',
                    id: Number(router.query.boardId),
                  }),
                  fields: {
                    lists: (existingLists = [], { toReference }) => {
                      return [...existingLists, toReference(cacheId)]
                    },
                  },
                  optimistic: true,
                })
              }
            }
          },
          optimisticResponse: (variables) => {
            return {
              __typename: 'mutation_root',
              insert_lists_one: {
                __typename: 'lists',
                ...variables,
                id: lastId + 1,
                cards: [],
              },
            }
          },
        })
      } catch (err) {
        console.log(`🇻🇳 [LOG]: onSubmit -> err`, Object.values(err))
      }
    },
    [lastPosition, router.query.boardId],
  )

  const handleClickAway = (value: string) => {
    if (value) {
      handleNewList(value)
    } else {
      setIsCreating(false)
    }
  }

  return (
    <Card className={`mx-4 w-52`}>
      <CardHeader>
        <AddInput
          label="New list"
          placeholder="Enter list name"
          isCreating={isCreating}
          setIsCreating={setIsCreating}
          loading={loading}
          onSubmit={handleNewList}
          onClickAway={handleClickAway}
        />
      </CardHeader>
    </Card>
  )
}

export default NewList
