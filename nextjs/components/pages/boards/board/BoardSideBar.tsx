import { Flex, Icon, Input, SideNav } from 'bumbag'
import gql from 'graphql-tag'
import { useRouter } from 'next/router'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import {
  useBoardsQuery,
  useInsertBoardMutation,
} from '../../../../generated/graphql'

gql`
  mutation insertBoard($name: String) {
    insert_boards_one(object: { name: $name }) {
      id
      name
    }
  }
`

const BoardSideBar: React.FC = () => {
  const router = useRouter()

  const [{ data }] = useBoardsQuery({})
  const [{ fetching: insertFetching }, insertBoard] = useInsertBoardMutation()

  const [editing, setEditing] = useState(false)
  const [boardName, setBoardName] = useState('')

  const ref = useRef(null)
  useClickAway(ref, () => {
    setEditing(false)
  })

  const handleInsert = useCallback(async () => {
    console.log(`🇻🇳 [LOG]: BoardSideBar:React.FC -> boardName`, boardName)
    try {
      await insertBoard({ name: boardName })
      setEditing(false)
    } catch (err) {
      console.log(`🇻🇳 [ERROR]: BoardSideBar:React.FC -> err`, err)
    }
  }, [boardName])

  const handleOnChangeItem = useCallback(
    (id: string) => {
      router.replace(`/boards/[boardId]`, `/boards/${id}`)
    },
    [data],
  )

  return (
    <SideNav
      selectedId={`${router.query.boardId}`}
      onChange={(id: string) => handleOnChangeItem(id)}
      paddingY="major-1"
    >
      <SideNav.Level title="Boards">
        {(data?.boards || []).map((item) => (
          <SideNav.Item key={item.id} navId={`${item.id}`}>
            {item.name}
          </SideNav.Item>
        ))}
        <SideNav.Item navId="new" onClick={() => setEditing(true)}>
          <Flex>
            {editing ? (
              <Input
                inputRef={ref}
                size="small"
                // eslint-disable-next-line jsx-a11y/no-autofocus
                autoFocus
                placeholder="New board"
                value={boardName}
                isLoading={insertFetching}
                onChange={(e) => setBoardName(e.currentTarget.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleInsert()
                  }
                }}
              />
            ) : (
              <Flex alignItems="center">
                <Icon icon="solid-plus" marginRight="major-1" /> New
              </Flex>
            )}
          </Flex>
        </SideNav.Item>
      </SideNav.Level>
    </SideNav>
  )
}

export default BoardSideBar
