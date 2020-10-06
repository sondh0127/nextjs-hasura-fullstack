import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import React from 'react'

import AccessDeniedIndicator from '@/components/AccessDeniedIndicator'
import BoardsPage from '@/components/pages/boards'
import { getMainLayout } from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/types/page'
import { SessionProp } from '@/types/session'

const Boards: NextPageWithLayout<SessionProp> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />
  }
  return <BoardsPage />
}

export const getServerSideProps: GetServerSideProps<SessionProp> = async (
  ctx,
) => {
  const session = await getSession(ctx)
  return { props: { session } }
}

Boards.getLayout = getMainLayout('Boards')
export default Boards
