import { Flex, Icon, Input, SideNav } from 'bumbag';
import gql from 'graphql-tag';
import React, { Fragment, useCallback, useEffect, useState } from 'react';

import {
  useBoardsQuery,
  useInsertBoardMutation,
} from '../../../generated/graphql';
import { useSelectedBoard } from '../../../zustands/boards';

gql`
  mutation insertBoard($name: String) {
    insert_boards_one(object: { name: $name }) {
      name
      id
    }
  }
`;

gql`
  query Boards {
    boards {
      id
      name
    }
  }
`;

const BoardSideBar: React.FC = () => {
  const [{ fetching: boardsFetching, data }] = useBoardsQuery();

  const [{ fetching: insertFetching }, insertBoard] = useInsertBoardMutation();

  const { selectedBoardId, setSelectedBoard } = useSelectedBoard();

  useEffect(() => {
    setSelectedBoard(data?.boards[0]);
  }, [data]);

  const [editing, setEditing] = useState(false);
  const [boardName, setBoardName] = useState('');

  const handleInsert = useCallback(async () => {
    console.log(`🇻🇳 [LOG]: BoardSideBar:React.FC -> boardName`, boardName);
    try {
      await insertBoard({ name: boardName });
      setEditing(false);
    } catch (err) {
      console.log(`🇻🇳 [ERROR]: BoardSideBar:React.FC -> err`, err);
    }
  }, [boardName]);

  const handleOnChangeItem = useCallback(
    (id: number) => {
      const board = data.boards.find((item) => item.id === id);
      setSelectedBoard(board);
    },
    [data]
  );

  return (
    <SideNav
      selectedId={`${selectedBoardId}`}
      onChange={(id) => handleOnChangeItem(Number(id))}
      paddingY="major-1">
      {boardsFetching && <Flex>Loading</Flex>}
      {!boardsFetching && (
        <SideNav.Level title="Boards">
          {data.boards.map((item) => (
            <SideNav.Item key={item.id} navId={`${item.id}`}>
              {item.name}
            </SideNav.Item>
          ))}
          <SideNav.Item navId="new" onClick={() => setEditing(true)}>
            <Flex>
              {editing ? (
                <Input
                  size="small"
                  placeholder="Enter board name"
                  value={boardName}
                  isLoading={insertFetching}
                  onChange={(e) => setBoardName(e.currentTarget.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      handleInsert();
                    }
                  }}
                />
              ) : (
                <Flex alignItems="center">
                  <Icon icon="solid-plus" marginRight="major-1" /> New
                </Flex>
              )}
            </Flex>
          </SideNav.Item>
        </SideNav.Level>
      )}
    </SideNav>
  );
};

export default BoardSideBar;
