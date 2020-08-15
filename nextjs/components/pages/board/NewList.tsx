import { Columns, Stack } from 'bumbag';
import React from 'react';
import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';

import NewCard from './NewCard';

interface NewListProps {
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
}

const NewList: React.FC<NewListProps> = ({ provided, snapshot }) => {
  return (
    <Columns.Column>
      <Stack
        ref={provided.innerRef}
        backgroundColor={snapshot.isDraggingOver ? 'secondary' : 'default'}
        paddingX="major-2"
        spacing="major-2"
        {...provided.droppableProps}>
        <Draggable draggableId={`${0}`} index={0}>
          {(provided, snapshot) => (
            <NewCard text="New" provided={provided} snapshot={snapshot} />
          )}
        </Draggable>
      </Stack>
    </Columns.Column>
  );
};

export default NewList;
