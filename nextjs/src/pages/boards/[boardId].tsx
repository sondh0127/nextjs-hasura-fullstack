import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import React from 'react'

import AccessDeniedIndicator from '@/components/AccessDeniedIndicator'
import BoardPage from '@/components/pages/boards/board'
import { getBoardLayout } from '@/layouts/BoardLayout'
import { NextPageWithLayout } from '@/types/page'
import { SessionProp } from '@/types/session'

const Board: NextPageWithLayout<SessionProp> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />
  }

  return <BoardPage />
}

export const getServerSideProps: GetServerSideProps<SessionProp> = async (
  ctx,
) => {
  const session = await getSession(ctx as any)

  return {
    props: { session },
  }
}
Board.getLayout = getBoardLayout('Board')

export default Board
