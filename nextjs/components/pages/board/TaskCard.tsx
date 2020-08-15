import { Box, Card, Flex, Text } from 'bumbag';
import React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface TaskCardProps {
  author: string;
  content: string;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}

const TaskCard: React.FC<TaskCardProps> = ({
  author,
  content,
  provided,
  snapshot,
}) => {
  return (
    <Card
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      backgroundColor={snapshot.isDragging ? 'primary' : 'default'}
      cursor="pointer"
      minWidth="350px"
      padding="major-2"
      variant="shadowed">
      {content}
      <Flex alignX="right">
        <Text use="em" fontSize="100" color="text100">
          {author}
        </Text>
      </Flex>
    </Card>
  );
};

export default TaskCard;
