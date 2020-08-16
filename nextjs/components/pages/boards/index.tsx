import { Columns, Heading, Stack } from 'bumbag';
import faker from 'faker';
import gql from 'graphql-tag';
import produce from 'immer';
import React, { useEffect, useState } from 'react';
import {
  DragDropContext,
  DragStart,
  DragUpdate,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

import { CONTAINER_PADDING, HEIGHT_OF_NAVBAR } from '../../../constants/layout';
import { useListsQuery } from '../../../generated/graphql';
import {
  useLastListPosition,
  useSelectedBoard,
} from '../../../zustands/boards';
import { move, reorder } from './boardUtils';
import BoardList from './list/BoardList';
import NewList from './list/NewList';

gql`
  query Lists($board_id: Int!) {
    lists(
      order_by: { position: asc }
      where: { board_id: { _eq: $board_id } }
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

const BoardPage: React.FC = () => {
  const { selectedBoardId, selectedBoard } = useSelectedBoard();
  const { setLastPosition } = useLastListPosition();

  const [{ fetching, data }] = useListsQuery({
    variables: { board_id: selectedBoardId },
    pause: !selectedBoardId,
  });

  useEffect(() => {
    if (data) {
      setLastPosition(data.lists.length - 1);
    }
  }, [data]);

  const boardColsInit = [
    {
      id: '1',
      status: 'Ideal Features',
      tasks: Array.from(Array(4), (item, index) => ({
        id: index + 100,
        author: 'sondh0127',
        content: faker.lorem.lines(1),
      })),
    },
    {
      id: '2',
      status: 'No status',
      tasks: Array.from(Array(5), (item, index) => ({
        id: index + 200,
        author: 'sondh0127',
        content: faker.lorem.lines(1),
      })),
    },
    {
      id: '3',
      status: 'Next Up',
      tasks: Array.from(Array(4), (item, index) => ({
        id: index + 300,
        author: 'sondh0127',
        content: faker.lorem.lines(1),
      })),
    },
    {
      id: '4',
      status: 'In Progress',
      tasks: Array.from(Array(1), (item, index) => ({
        id: index + 400,
        author: 'sondh0127',
        content: faker.lorem.lines(1),
      })),
    },
    {
      id: '5',
      status: 'Completed',
      tasks: Array.from(Array(3), (item, index) => ({
        id: index + 500,
        author: 'sondh0127',
        content: faker.lorem.lines(1),
      })),
    },
    {
      id: '6',
      status: 'Improvement',
      tasks: Array.from(Array(5), (item, index) => ({
        id: index + 600,
        author: 'sondh0127',
        content: faker.lorem.lines(1),
      })),
    },
  ];

  const [boardCols, setBoardCols] = useState(boardColsInit);

  const onDragStart = (initial: DragStart, provided: ResponderProvided) => {
    // document.body.style.color = 'white';
  };

  const onDragUpdate = (initial: DragUpdate, provided: ResponderProvided) => {
    // document.body.style.backgroundColor = '0023cf7a';
  };

  const onDragEnd = (result: DropResult, provided: ResponderProvided) => {
    document.body.style.color = 'inherit';
    document.body.style.backgroundColor = 'inherit';

    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      const tasks = boardCols[sInd].tasks;
      const nextTask = reorder(tasks, source.index, destination.index);

      const next = produce(boardCols, (draftState) => {
        draftState[sInd].tasks = nextTask;
      });
      setBoardCols(next);
    } else {
      const result = move(
        boardCols[sInd].tasks,
        boardCols[dInd].tasks,
        source,
        destination
      );
      const next = produce(boardCols, (draftState) => {
        draftState[sInd].tasks = result[sInd];
        draftState[dInd].tasks = result[dInd];
      });

      setBoardCols(next);
    }
  };

  return (
    <Stack
      padding="major-4"
      // minHeight={`calc(100vh - ${HEIGHT_OF_NAVBAR} - ${CONTAINER_PADDING}*2)`}
    >
      <Heading use="h2">{selectedBoard?.name}</Heading>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}>
        <Columns isOneLine spacing="major-4">
          {!fetching &&
            data?.lists.length > 0 &&
            data?.lists.map((list, index) => (
              <Droppable key={list.id} droppableId={`${index}`}>
                {(provided, snapshot) => (
                  <BoardList
                    list={list}
                    provided={provided}
                    snapshot={snapshot}
                  />
                )}
              </Droppable>
            ))}
          <Droppable droppableId={`${data?.lists.length || 0}`}>
            {(provided, snapshot) => (
              <NewList provided={provided} snapshot={snapshot} />
            )}
          </Droppable>
        </Columns>
      </DragDropContext>
    </Stack>
  );
};

export default BoardPage;
