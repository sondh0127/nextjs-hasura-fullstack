import { Card, Flex, Text } from 'bumbag'
import React from 'react'
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd'

import { Card as CardType } from '../../../../../types/model'

interface TaskCardProps {
  card: CardType
  provided: DraggableProvided
  snapshot: DraggableStateSnapshot
}

const TaskCard: React.FC<TaskCardProps> = ({ card, provided, snapshot }) => {
  return (
    <Card
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      backgroundColor={snapshot.isDragging ? 'primary' : 'default'}
      cursor="pointer"
      padding="major-2"
      variant="shadowed"
    >
      {card.title}
      <Flex alignX="right">
        <Text use="em" fontSize="100" color="text100">
          {card.description}
        </Text>
      </Flex>
    </Card>
  )
}

export default TaskCard
