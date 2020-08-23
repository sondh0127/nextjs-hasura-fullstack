import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react'

import AccessDeniedIndicator from '../components/access-denied-indicator'
import Page from '../components/pages/feeds'
import TailwindLayout from '../layouts/TailwindLayout'

interface FeedsProps {
  session: string
}

const FeedsPage: NextPage<FeedsProps> = ({ session }) => {
  if (!session) {
    return (
      <TailwindLayout>
        <AccessDeniedIndicator />
      </TailwindLayout>
    )
  }

  return (
    <TailwindLayout>
      <Head>
        <title>My Account Page</title>
      </Head>
      <Page />
    </TailwindLayout>
  )
}

export const getServerSideProps: GetServerSideProps<FeedsProps> = async (
  ctx,
) => {
  const session = await getSession({ req: ctx.req })

  return {
    props: {
      session,
    },
  }
}

export default FeedsPage
