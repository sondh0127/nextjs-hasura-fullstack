import { Badge, Button, Input } from '@retail-ui/core'
import React from 'react'
import { useClickAway } from 'react-use'

import { ListFragment, useUpdateListMutation } from '@/generated/graphql'

interface ListHeaderProps {
  list: ListFragment
}

const ListHeader: React.FC<ListHeaderProps> = (props) => {
  const {
    list: { id, name, position },
  } = props

  const [updateList] = useUpdateListMutation()

  const onSubmit = async (newName: string) => {
    try {
      await updateList({
        variables: { id, name: newName, position },
      })
    } catch (err) {
      console.log(`🇻🇳 [Error]: onSubmit`, Object.values(err))
    }
  }

  const [isEditting, setIsEditting] = React.useState(!name)
  const [value, setValue] = React.useState(name.toUpperCase())

  const ref = React.useRef(null)

  useClickAway(ref, () => {
    if (isEditting) {
      if (value && value !== name) {
        onSubmit(value)
      } else {
        setValue(name)
      }
      setIsEditting(false)
    }
  })

  return (
    <div className={`flex w-32 h-8`}>
      {!isEditting && (
        <Button
          isBlock
          variant="light"
          size="sm"
          className={``}
          onClick={() => {
            setIsEditting(true)
          }}
        >
          {value}
        </Button>
      )}

      {isEditting && (
        <Input
          ref={ref}
          // eslint-disable-next-line jsx-a11y/no-autofocus
          autoFocus={true}
          value={value}
          onChange={(e) => {
            setValue(e.target.value.toUpperCase())
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit(value)
              setIsEditting(false)
            }
          }}
        />
      )}

      {/* {!!cards.length && <Badge variant="light">{cards.length}</Badge>} */}
    </div>
  )
}

export default ListHeader
