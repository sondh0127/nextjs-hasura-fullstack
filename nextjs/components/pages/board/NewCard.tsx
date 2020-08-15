import { Card, Flex, Icon, useColorMode } from 'bumbag';
import React from 'react';
import { DraggableProvided, DraggableStateSnapshot } from 'react-beautiful-dnd';

interface NewCardProps {
  text: string;
  provided: DraggableProvided;
  snapshot: DraggableStateSnapshot;
}

const NewCard: React.FC<NewCardProps> = ({ text, provided, snapshot }) => {
  const { colorMode } = useColorMode();
  const bgColor = { default: 'white', dark: 'gray600' };
  const color = { default: 'gray800', dark: 'gray100' };

  return (
    <Card
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      backgroundColor={snapshot.isDragging ? 'primary' : 'background'}
      padding="major-1"
      minWidth="350px"
      cursor="pointer"
      _hover={{}}>
      <Flex alignY="center">
        <Icon icon="solid-plus" marginRight="major-1" /> {text}
      </Flex>
    </Card>
  );
};

export default NewCard;
