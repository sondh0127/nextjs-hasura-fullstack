import React, { useState } from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

interface NewCardProps {
  text: string
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}
const NewCard: React.FC<NewCardProps> = ({ text, provided, snapshot }) => {
  const [editing, setEditing] = useState(false)
  const [value, setValue] = useState('')

  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {!editing && (
        <button onClick={() => setEditing(true)}>
          <svg name="solid-plus" /> {text}
        </button>
      )}
      {editing && (
        <input
          placeholder="Enter list name ..."
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // onSubmit();
            }
          }}
          className={`form-input`}
          onChange={(e) => setValue(e.currentTarget.value)}
          value={value}
        />
      )}
    </div>
  )
}

export default NewCard
