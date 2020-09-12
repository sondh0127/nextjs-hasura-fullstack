import {
  ButtonIcon,
  DotsVerticalSolid,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownList,
} from '@retail-ui/core'
import * as React from 'react'

import { ListFragment, useDeleteListMutation } from '@/generated/graphql'

interface ActionDropdownProps {
  list: ListFragment
}

export const ActionDropdown: React.FC<ActionDropdownProps> = (props) => {
  const { list } = props

  const [deleteList, { loading }] = useDeleteListMutation()

  const removeAction = async () => {
    try {
      await deleteList({
        variables: { id: list.id },
        update: (cache, { data }) => {
          if (data?.delete_lists_by_pk) {
            const cacheId = cache.identify(data?.delete_lists_by_pk)
            if (cacheId) {
              cache.modify({
                id: cache.identify({ __typename: 'boards', id: list.board_id }),
                fields: {
                  lists(existingListRefs = [], { readField, toReference }) {
                    return existingListRefs.filter(
                      (listRef: { __ref: string }) => listRef.__ref !== cacheId,
                    )
                  },
                },
              })
              cache.evict({ id: cacheId })
            }
          }
        },
        optimisticResponse: {
          __typename: 'mutation_root',
          delete_lists_by_pk: {
            ...list,
          },
        },
      })
    } catch (err) {
      console.log(`🇻🇳 [LOG]: removeAction -> err`, err)
    }
  }
  return (
    <Dropdown>
      <DropdownButton>
        {({ toggleOpen }) => (
          <ButtonIcon
            variant="light"
            size="base"
            icon={<DotsVerticalSolid />}
            onClick={() => toggleOpen()}
          />
        )}
      </DropdownButton>
      <DropdownList>
        <DropdownItem onClick={() => removeAction()}>
          <span>Delete</span>
        </DropdownItem>
      </DropdownList>
    </Dropdown>
  )
}

export default ActionDropdown
