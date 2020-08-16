import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import React from 'react';

import AccessDeniedIndicator from '../components/access-denied-indicator';
import BoardPage from '../components/pages/boards';
import BoardLayout from '../layout/BoardLayout';

interface BoardsProps {
  session: string;
}

const Boards: NextPage<BoardsProps> = ({ session }) => {
  if (!session) {
    return (
      <BoardLayout>
        <AccessDeniedIndicator />
      </BoardLayout>
    );
  }

  return (
    <BoardLayout footer={() => null}>
      <Head>
        <title>Trello: Board</title>
      </Head>
      <BoardPage />
    </BoardLayout>
  );
};

export const getServerSideProps: GetServerSideProps<BoardsProps> = async ({
  req,
}) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default Boards;
