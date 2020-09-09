import {
  ButtonIcon,
  Drawer,
  DrawerHeader,
  Input,
  useClickAwayOrEsc,
  XSolid,
} from '@retail-ui/core'
import Link from 'next/link'
import React, { Fragment } from 'react'

import Logo from '@/components/icons/Logo'
import {
  BoardFragmentDoc,
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
  const [boardName, setBoardName] = React.useState('')

  const handleClickAway = () => {
    if (!boardName) {
      setIsOnNewBoard(false)
    }
  }

  const ref = useClickAwayOrEsc(handleClickAway)

  /* Insert new board */
  const [insertBoard, { loading: insertLoading }] = useInsertBoardMutation({
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

  /* Delete a board */
  const [deleteBoard, { loading: deleteLoading }] = useDeleteBoardMutation()

  const handleInsertBoard = async () => {
    try {
      console.log(`🇻🇳 [LOG]: handleInsertBoard -> boardName`, boardName)
      await insertBoard({
        variables: {
          name: boardName,
        },
      })
      setBoardName('')
      setIsOnNewBoard(false)
    } catch (error) {
      console.log('Error: ', Object.entries(error))
    }
  }

  const handleDeleteBoard = async (id: number) => {
    // add popup confirm
    await deleteBoard({
      variables: { id },
      update: (cache) => {
        cache.evict({ id: `boards:${id}` })
      },
    })
    console.log({ id })
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
                        console.log('onClick')
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

          <div
            tabIndex={0}
            role="menuitem"
            onClick={(e) => {
              setIsOnNewBoard(true)
            }}
            onKeyDown={() => {
              return
            }}
            className={`flex items-center px-5 py-3 cursor-pointer hover:bg-purple-300 focus:outline-none`}
          >
            {!isOnNewBoard && (
              <React.Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className={`w-6 h-6 text-purple-600 `}
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className={`ml-3`}>New board</span>
              </React.Fragment>
            )}
            {isOnNewBoard && (
              <Input
                ref={ref}
                placeholder="Enter board name"
                value={boardName}
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                onChange={(e) => setBoardName(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleInsertBoard()
                  }
                }}
              />
            )}
          </div>
        </div>
      </Drawer>
    </Fragment>
  )
}

export default SidebarMobile
