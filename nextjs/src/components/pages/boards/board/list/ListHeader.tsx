import { Badge, Input, useClickAway } from '@retail-ui/core'
import React from 'react'

import { useUpdateListMutation } from '@/generated/graphql'
import { List } from '@/types/model'

interface ListHeaderProps {
  list: List
}

const ListHeader: React.FC<ListHeaderProps> = (props) => {
  const {
    list: { id, name },
  } = props

  const [updateList, loading] = useUpdateListMutation()

  const onSubmit = async (name: string) => {
    try {
      await updateList({
        variables: { id, name },
      })
    } catch (err) {
      console.log(`🇻🇳 [Error]: onSubmit`, Object.values(err))
    }
  }

  const [isEditting, setIsEditting] = React.useState(!name)
  const [value, setValue] = React.useState(name.toUpperCase())

  const ref = React.useRef(null)

  useClickAway(() => {
    if (isEditting) {
      if (value && value !== name) {
        onSubmit(value)
      } else {
        setValue(name)
      }
      setIsEditting(false)
    }
  }, ref)

  return (
    <div className={`flex w-48 h-10`}>
      {!isEditting && (
        <button
          className={``}
          onClick={() => {
            setIsEditting(true)
          }}
        >
          <p
            className={`px-2 py-1 text-sm text-gray-800 uppercase rounded-md hover:bg-gray-200`}
          >
            {value}
          </p>
        </button>
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
          className={`w-12`}
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              onSubmit(value)
              setIsEditting(false)
            }
          }}
        />
      )}

      {!!length && <Badge variant="light">{length}</Badge>}
    </div>
  )
}

export default ListHeader
