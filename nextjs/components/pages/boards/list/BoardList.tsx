import { Columns, Stack, useColorMode } from 'bumbag';
import gql from 'graphql-tag';
import React from 'react';
import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';

import { useUpdateListMutation } from '../../../../generated/graphql';
import { List } from '../../../../types/model';
import NewCard from '../card/NewCard';
import TaskCard from '../card/TaskCard';
import ListHeader from './ListHeader';

interface BoardListProps {
  list: List;
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
}

gql`
  mutation UpdateList($id: Int!, $position: Int!, $name: String!) {
    update_lists_by_pk(
      pk_columns: { id: $id }
      _set: { name: $name, position: $position }
    ) {
      id
      position
      name
      cards {
        id
        title
        description
        position
      }
    }
  }
`;

const BoardList: React.FC<BoardListProps> = ({ list, provided, snapshot }) => {
  const { colorMode } = useColorMode();
  const bgColor = { default: 'white', dark: 'gray800' };
  const color = { default: 'gray800', dark: 'gray100' };

  const [{ fetching }, updateList] = useUpdateListMutation();

  const onSubmit = async (name: string) => {
    // console.log(`🇻🇳 [LOG]: onSubmit -> onSubmit`);
    try {
      await updateList({ id: list.id, position: list.position, name });
    } catch (err) {
      // console.log(`🇻🇳 [LOG]: onSubmit -> err`, err);
    }
  };
  const onCancel = () => {
    // console.log(`🇻🇳 [LOG]: onCancel -> onCancel`);
  };

  return (
    <Columns.Column>
      <Stack
        ref={provided.innerRef}
        backgroundColor={snapshot.isDraggingOver ? 'secondary' : 'default'}
        paddingX="major-2"
        spacing="major-2"
        {...provided.droppableProps}>
        <ListHeader
          name={list.name}
          length={list.cards.length}
          onSubmit={onSubmit}
          onCancel={onCancel}
        />
        {/* CardList */}
        <Stack spacing="major-2">
          {list.cards.map((card, index) => (
            <Draggable key={card.id} draggableId={`${card.id}`} index={index}>
              {(provided, snapshot) => (
                <TaskCard card={card} provided={provided} snapshot={snapshot} />
              )}
            </Draggable>
          ))}
          <Draggable draggableId={`${Infinity}`} index={list.cards.length}>
            {(provided, snapshot) => (
              <NewCard text="New" provided={provided} snapshot={snapshot} />
            )}
          </Draggable>
        </Stack>
      </Stack>
    </Columns.Column>
  );
};

export default BoardList;
