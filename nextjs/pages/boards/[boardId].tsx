import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react'

import AccessDeniedIndicator from '../../components/access-denied-indicator'
import BoardPage from '../../components/pages/boards/board'
import BoardLayout from '../../layouts/BoardLayout'
import { SessionProp } from '../../types/session'

const Board: NextPage<SessionProp> = ({ session }) => {
  if (!session) {
    return (
      <BoardLayout>
        <AccessDeniedIndicator />
      </BoardLayout>
    )
  }

  return (
    <BoardLayout footer={() => null}>
      <Head>
        <title>Board: Name</title>
      </Head>
      <BoardPage />
    </BoardLayout>
  )
}

export const getServerSideProps: GetServerSideProps<SessionProp> = async (
  ctx,
) => {
  const session = await getSession({ req: ctx.req })

  return {
    props: {
      session,
    },
  }
}

export default Board
