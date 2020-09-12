import {
  ButtonIcon,
  Drawer,
  DrawerHeader,
  Input,
  XSolid,
} from '@retail-ui/core'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { Fragment } from 'react'
import { useClickAway, useKey } from 'react-use'

import AddInput from '@/components/AddInput'
import Logo from '@/components/icons/Logo'
import {
  BoardFragmentDoc,
  BoardsQuery,
  InsertBoardMutation,
  useBoardsQuery,
  useDeleteBoardMutation,
  useInsertBoardMutation,
} from '@/generated/graphql'

interface SidebarMobileProps {
  isSideMenuOpen: boolean
  onClose: () => void
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({
  isSideMenuOpen,
  onClose,
}) => {
  const { data, loading } = useBoardsQuery()
  const [isOnNewBoard, setIsOnNewBoard] = React.useState(false)
  const router = useRouter()

  /* Insert new board */
  const [insertBoard, { loading: insertLoading }] = useInsertBoardMutation()

  /* Delete a board */
  const [deleteBoard, { loading: deleteLoading }] = useDeleteBoardMutation()

  const handleInsertBoard = React.useCallback(async (boardName: string) => {
    try {
      const { data } = await insertBoard({
        variables: {
          name: boardName,
        },
        update: (cache, { data }) => {
          if (data?.insert_boards_one) {
            const cacheId = cache.identify(data.insert_boards_one)
            if (cacheId) {
              cache.modify({
                fields: {
                  boards: (existingBoards = [], { toReference }) => {
                    // const newBoardRef = cache.writeFragment({
                    //   data: data?.insert_boards_one,
                    //   fragment: BoardFragmentDoc,
                    // })
                    // return [...existingBoards, newBoardRef]
                    return [...existingBoards, toReference(cacheId)]
                  },
                },
              })
            }
          }
        },
      })
      router.push(`/boards/${data?.insert_boards_one?.id}`)
    } catch (error) {
      console.log('Error: ', Object.entries(error))
    }
  }, [])

  const handleDeleteBoard = async (id: number) => {
    // add popup confirm
    await deleteBoard({
      variables: { id },
      update: (cache) => {
        cache.evict({ id: `boards:${id}` })
        cache.gc()
      },
    })
    console.log({ id })
  }
  const handleClickAway = (value: string) => {
    if (!value) {
      setIsOnNewBoard(false)
    }
  }

  return (
    <Fragment>
      <Drawer isOpen={isSideMenuOpen} onClose={onClose} size="sm">
        <DrawerHeader className={`text-purple-600`}>
          <Logo />
        </DrawerHeader>
        <div className="">
          <div className={`text-gray-800 cursor-pointer dark:text-gray-400`}>
            {(data?.boards ?? []).map((item) => (
              <Link
                key={item.id}
                href={`/boards/[boardId]`}
                as={`/boards/${item.id}`}
              >
                <a
                  href={`/boards/${item.id}`}
                  className={`flex justify-between w-full px-5 py-3 group hover:bg-purple-300`}
                >
                  <div className={`flex items-center`}>
                    <ButtonIcon
                      color="primary"
                      variant="light"
                      size="sm"
                      icon={item.icon}
                      onClick={(e) => {
                        e.preventDefault()
                      }}
                    />
                    <div className={`ml-3`}>{item.name}</div>
                  </div>
                  <div className={`hidden group-hover:block`}>
                    <ButtonIcon
                      size="sm"
                      color="danger"
                      variant="light"
                      icon={<XSolid />}
                      onClick={(e) => {
                        e.preventDefault()
                        handleDeleteBoard(item.id)
                      }}
                    />
                  </div>
                </a>
              </Link>
            ))}
          </div>

          <div className={`flex items-center px-5 py-3`}>
            <AddInput
              label="New board"
              placeholder="Enter board name"
              isCreating={isOnNewBoard}
              setIsCreating={setIsOnNewBoard}
              loading={insertLoading}
              onSubmit={handleInsertBoard}
              onClickAway={handleClickAway}
            />
          </div>
        </div>
      </Drawer>
    </Fragment>
  )
}

export default SidebarMobile
