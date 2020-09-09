import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

import { Card as CardType } from '@/types/model'

interface TaskCardProps {
  card: CardType
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}

const TaskCard: React.FC<TaskCardProps> = ({ card, provided, snapshot }) => {
  return (
    <div
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
    >
      {card.title}
      <div alignX="right">
        <p>{card.description}</p>
      </div>
    </div>
  )
}

export default TaskCard
