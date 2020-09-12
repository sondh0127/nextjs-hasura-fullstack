import {
  Button,
  ButtonIcon,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
  StarSolid,
} from '@retail-ui/core'
import NextLink from 'next/link'
import React from 'react'

import {
  BoardFragmentDoc,
  useBoardsQuery,
  useInsertBoardMutation,
} from '@/generated/graphql'
import { timeFromNow } from '@/utils'

const BoardsPage: React.FC = () => {
  const { data, loading } = useBoardsQuery()
  const [name, setName] = React.useState('')

  const [insert, { loading: insertLoading }] = useInsertBoardMutation({
    update: (cache, { data }) => {
      cache.modify({
        fields: {
          boards: (existingBoards = []) => {
            const newTodoRef = cache.writeFragment({
              data: data?.insert_boards_one,
              fragment: BoardFragmentDoc,
            })
            return [...existingBoards, newTodoRef]
          },
        },
      })
    },
  })

  const handleInsert = async () => {
    try {
      if (name) {
        await insert({
          variables: { name },
        })
      }
    } catch (error) {
      // console.log('Error: ', Object.entries(error))
    }
  }

  return (
    <div className={`container flex flex-col items-center py-6 mx-auto`}>
      <div className={`flex items-center mb-4 space-x-2 `}>
        <div>
          <Input
            className={``}
            placeholder="Enter board name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <Button
          className={`flex-grow`}
          onClick={() => handleInsert()}
          isLoading={insertLoading}
        >
          New board
        </Button>
      </div>

      <div
        className={`grid w-full gap-8 px-4 mt-10 sm:grid-cols-2 lg:grid-cols-4 sm:gap-16`}
      >
        {(data?.boards || []).map((board) => {
          return (
            <Card key={board.id} color="default">
              <CardHeader
                action={
                  <NextLink
                    key={board.id}
                    href={`/boards/[boardId]`}
                    as={`/boards/${board.id}`}
                  >
                    <ButtonIcon
                      variant="light"
                      color="primary"
                      icon={<StarSolid />}
                    />
                  </NextLink>
                }
              >
                <div className={`flex items-center space-x-2`}>
                  <div>{board.icon}</div>
                  <div
                    className={`font-semibold text-gray-600 dark:text-gray-100 text-md`}
                  >
                    {board.name}
                  </div>
                </div>
              </CardHeader>
              {/* <CardBody>{board.name}</CardBody> */}
              <CardFooter className={`italic`}>
                {timeFromNow(board.created_at)}
              </CardFooter>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

export default BoardsPage
