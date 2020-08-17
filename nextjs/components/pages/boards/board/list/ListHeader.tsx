import {
  Badge,
  Button,
  Clickable,
  DropdownMenu,
  Flex,
  Icon,
  Input,
  Text,
} from 'bumbag'
import gql from 'graphql-tag'
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { useClickAway } from 'react-use'

import { useDeleteListMutation } from '../../../../../generated/graphql'

gql`
  mutation DeleteList($id: Int!) {
    delete_lists_by_pk(id: $id) {
      ...List
    }
  }
`

interface ListHeaderProps {
  id?: number
  name: string
  length?: number
  onSubmit: (name: string) => void
  onCancel: () => void
}

const ListHeader: React.FC<ListHeaderProps> = ({
  id,
  name,
  length = 0,
  onSubmit,
  onCancel,
}) => {
  const [isEditting, setIsEditting] = useState(!name)
  const [value, setValue] = useState(name)
  const [{ fetching }, deleteList] = useDeleteListMutation()

  const ref = useRef(null)

  useClickAway(ref, () => {
    if (isEditting) {
      if (!name) {
        if (value) {
          onSubmit(value)
          setValue('')
        } else {
          onCancel()
          setValue('')
        }
      } else {
        // Old list
        if (value && value !== name) {
          // onChange name
          onSubmit(value)
        } else {
          onCancel()
          setValue(name)
        }
      }
      setIsEditting(false)
    }
  })

  const removeAction = async () => {
    if (id) {
      try {
        await deleteList({ id })
      } catch (err) {
        console.log(`🇻🇳 [LOG]: removeAction -> err`, err)
      }
    }
  }

  return (
    <Flex justifyContent="space-between">
      <Flex>
        <Flex
          ref={ref}
          height="40px"
          maxWidth="200px"
          alignItems="center"
          onClick={() => {
            console.log(`🇻🇳 [LOG]: onClick`)
            setIsEditting(true)
          }}
        >
          {isEditting && (
            <Input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              size="small"
              inputProps={{ height: `100%` }}
              value={value}
              onChange={(e) => {
                setValue(e.currentTarget.value)
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSubmit(value)
                  setIsEditting(false)
                }
              }}
            />
          )}
          {!isEditting && (
            <Text
              color="text"
              textTransform="uppercase"
              fontSize="150"
              marginRight="major-1"
            >
              {value}
            </Text>
          )}
        </Flex>

        {!!length && (
          <Button variant="ghost" size="small" padding="major-1">
            <Badge>{length}</Badge>
          </Button>
        )}
      </Flex>
      {!!id && (
        <DropdownMenu
          menu={
            <Fragment>
              {/* <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">
              Share
            </DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">
              Rename
            </DropdownMenu.Item> */}
              <DropdownMenu.Item
                iconBefore="solid-trash-alt"
                color="danger"
                onClick={() => removeAction()}
              >
                Delete
              </DropdownMenu.Item>
            </Fragment>
          }
        >
          <Button variant="ghost" size="small">
            <Icon color="text" icon="solid-ellipsis-v" />
          </Button>
        </DropdownMenu>
      )}
    </Flex>
  )
}

export default ListHeader
