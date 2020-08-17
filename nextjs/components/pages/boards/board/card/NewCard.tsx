import { Card, Flex, Icon, Input, useColorMode } from 'bumbag'
import React, { useState } from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

interface NewCardProps {
  text: string
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}
const NewCard: React.FC<NewCardProps> = ({ text, provided, snapshot }) => {
  const { colorMode } = useColorMode()
  const bgColor = { default: 'white', dark: 'gray600' }
  const color = { default: 'gray800', dark: 'gray100' }
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState('')

  return (
    <Card
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      backgroundColor={snapshot.isDragging ? 'primary' : 'background'}
      padding="major-1"
      cursor="pointer"
      _hover={{}}
    >
      {!editing && (
        <Flex alignY="center" onClick={() => setEditing(true)}>
          <Icon icon="solid-plus" marginRight="major-1" /> {text}
        </Flex>
      )}
      {editing && (
        <Input
          placeholder="Enter list name ..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // onSubmit();
            }
          }}
          size="small"
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        />
      )}
    </Card>
  )
}

export default NewCard
