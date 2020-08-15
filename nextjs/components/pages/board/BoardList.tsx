import {
  Badge,
  Button,
  Columns,
  Flex,
  Icon,
  Stack,
  Text,
  useColorMode,
} from 'bumbag';
import React from 'react';
import {
  Draggable,
  DroppableProvided,
  DroppableStateSnapshot,
} from 'react-beautiful-dnd';

import { Task } from '../../../types/board';
import NewCard from './NewCard';
import TaskCard from './TaskCard';

interface BoardListProps {
  status: string;
  tasks: Task[];
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
}

const BoardList: React.FC<BoardListProps> = ({
  status,
  tasks,
  provided,
  snapshot,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = { default: 'white', dark: 'gray800' };
  const color = { default: 'gray800', dark: 'gray100' };

  return (
    <Columns.Column>
      <Stack
        ref={provided.innerRef}
        backgroundColor={snapshot.isDraggingOver ? 'secondary' : 'default'}
        paddingX="major-2"
        spacing="major-2"
        {...provided.droppableProps}>
        <Flex justifyContent="space-between">
          <Flex>
            <Button variant="ghost" size="small">
              <Text
                color="text"
                textTransform="uppercase"
                fontSize="150"
                marginRight="major-1">
                {status}
              </Text>
            </Button>

            <Button variant="ghost" size="small" padding="major-1">
              <Badge>{tasks.length}</Badge>
            </Button>
          </Flex>
          <Button variant="ghost" size="small">
            <Icon color="text" icon="solid-ellipsis-v" />
          </Button>
        </Flex>
        {/* CardList */}
        <Stack spacing="major-2">
          {tasks.map(({ author, content, id }, index) => (
            <Draggable key={id} draggableId={`${id}`} index={index}>
              {(provided, snapshot) => (
                <TaskCard
                  author={author}
                  content={content}
                  provided={provided}
                  snapshot={snapshot}
                />
              )}
            </Draggable>
          ))}
          <Draggable
            draggableId={`${tasks[tasks.length - 1].id + 1}`}
            index={tasks.length}>
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
