import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react'

import AccessDeniedIndicator from '../../components/access-denied-indicator'
import BoardsPage from '../../components/pages/boards'
import MainLayout from '../../layouts/MainLayout'
import { SessionProp } from '../../types/session'

const Boards: NextPage<SessionProp> = ({ session }) => {
  if (!session) {
    return (
      <MainLayout>
        <AccessDeniedIndicator />
      </MainLayout>
    )
  }

  return (
    <MainLayout>
      <Head>
        <title>Boards Page</title>
      </Head>
      <BoardsPage />
    </MainLayout>
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
export default Boards
