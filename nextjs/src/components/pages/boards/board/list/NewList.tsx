import {
  Button,
  ButtonIcon,
  Card,
  CardHeader,
  Input,
  useClickAway,
} from '@retail-ui/core'
import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

import { useInsertListMutation } from '@/generated/graphql'
import { useLastListPosition } from '@/zustands/boards'

const NewList: React.FC = (props) => {
  const router = useRouter()
  const [isCreating, setIsCreating] = React.useState(false)
  const [value, setValue] = React.useState('')

  const { lastPosition } = useLastListPosition()
  console.log(`🇻🇳 [LOG]: lastPosition`, lastPosition)

  const [insertList, { loading }] = useInsertListMutation()

  const handleNewList = useCallback(async () => {
    try {
      await insertList({
        variables: {
          name: value,
          position: lastPosition + 1,
          board_id: Number(router.query.boardId),
        },
      })
      resetNewList()
    } catch (err) {
      console.log(`🇻🇳 [LOG]: onSubmit -> err`, Object.values(err))
    }
  }, [lastPosition, router.query.boardId, value])

  const resetNewList = () => {
    setIsCreating(false)
    setValue('')
  }

  const ref = React.useRef(null)

  useClickAway(() => {
    if (isCreating) {
      if (value) {
        handleNewList()
      } else {
        resetNewList()
      }
    }
  }, ref)

  return (
    <Card ref={ref}>
      <CardHeader
        action={
          <React.Fragment>
            {isCreating && (
              <ButtonIcon
                variant="light"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
              />
            )}
          </React.Fragment>
        }
      >
        <div className={`flex w-full h-10`}>
          {!isCreating && (
            <Button
              isBlock
              className={``}
              onClick={() => {
                setIsCreating(true)
              }}
              variant="light"
              iconLeft={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              }
            >
              Add new list
            </Button>
          )}

          {isCreating && (
            <Input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              placeholder="New list"
              value={value}
              onChange={(e) => {
                setValue(e.target.value.toUpperCase())
              }}
              className={`w-12 mr-4`}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleNewList()
                  setIsCreating(false)
                }
              }}
            />
          )}
        </div>
      </CardHeader>
    </Card>
  )
}

export default NewList
