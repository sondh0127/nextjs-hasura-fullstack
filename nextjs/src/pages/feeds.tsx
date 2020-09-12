import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import React from 'react'

import AccessDeniedIndicator from '@/components/AccessDeniedIndicator'
import FeedsPage from '@/components/pages/feeds'
import { getMainLayout } from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/types/page'
import { SessionProp } from '@/types/session'

type FeedsProps = SessionProp

const Feeds: NextPageWithLayout<FeedsProps> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />
  }

  return <FeedsPage />
}

export const getServerSideProps: GetServerSideProps<FeedsProps> = async (
  ctx,
) => {
  const session = await getSession(ctx as any)

  return { props: { session } }
}

Feeds.getLayout = getMainLayout('Feeds')

export default Feeds
