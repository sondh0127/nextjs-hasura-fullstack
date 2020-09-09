import {
  ButtonIcon,
  DotsVerticalSolid,
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownList,
} from '@retail-ui/core'
import * as React from 'react'

import { useDeleteListMutation } from '@/generated/graphql'
import { List } from '@/types/model'

interface ActionDropdownProps {
  list: List
}

export const ActionDropdown: React.FC<ActionDropdownProps> = (props) => {
  const {
    list: { position, board_id, id },
  } = props

  const [deleteList, { loading }] = useDeleteListMutation()

  const removeAction = async () => {
    try {
      await deleteList({
        variables: { board_id, deletedPosition: position },
        update: (cache) => {
          cache.evict({ id: `lists:${id}` })
        },
      })
    } catch (err) {
      console.log(`🇻🇳 [LOG]: removeAction -> err`, err)
    }
  }
  return (
    <React.Fragment>
      {!!id && (
        <Dropdown>
          <DropdownButton>
            <ButtonIcon
              variant="light"
              size="sm"
              icon={<DotsVerticalSolid />}
            />
          </DropdownButton>
          <DropdownList align="right">
            <DropdownItem onClick={() => removeAction()}>
              <span>Delete</span>
            </DropdownItem>
          </DropdownList>
        </Dropdown>
      )}
    </React.Fragment>
  )
}

export default ActionDropdown
