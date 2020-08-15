import { Columns, Heading, Stack } from 'bumbag';
import faker from 'faker';
import produce from 'immer';
import React, { useState } from 'react';
import {
  DragDropContext,
  DraggableLocation,
  DragStart,
  DragUpdate,
  Droppable,
  DropResult,
  ResponderProvided,
} from 'react-beautiful-dnd';

import { CONTAINER_PADDING, HEIGHT_OF_NAVBAR } from '../../../constants/layout';
import BoardList from './BoardList';
import NewList from './NewList';

const reorder = <T extends unknown>(
  list: T[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = <T extends unknown>(
  source: T[],
  destination: T[],
  droppableSource: DraggableLocation,
  droppableDestination: DraggableLocation
) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result: Record<string, T[]> = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const BoardPage: React.FC = () => {
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
      overflowY="hidden"
      overflowX="scroll"
      minHeight={`calc(100vh - ${HEIGHT_OF_NAVBAR} - ${CONTAINER_PADDING}*2)`}>
      <Heading use="h2">NextJS Hasura Trello Clone</Heading>
      <DragDropContext
        onDragStart={onDragStart}
        onDragUpdate={onDragUpdate}
        onDragEnd={onDragEnd}>
        <Columns isOneLine spacing="major-4">
          {boardCols.map((board, index) => (
            <Droppable key={board.id} droppableId={`${index}`}>
              {(provided, snapshot) => (
                <BoardList
                  status={board.status}
                  tasks={board.tasks}
                  provided={provided}
                  snapshot={snapshot}
                />
              )}
            </Droppable>
          ))}
          <Droppable droppableId={`${boardCols.length}`}>
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
