import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import Head from 'next/head'
import React from 'react'

import AccessDeniedIndicator from '../components/access-denied-indicator'
import Page from '../components/pages/my-account'
import TailwindLayout from '../layouts/TailwindLayout'

interface MyAccountPageProps {
  session: string
}

const MyAccountPage: NextPage<MyAccountPageProps> = ({ session }) => {
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

export const getServerSideProps: GetServerSideProps<MyAccountPageProps> = async (
  ctx,
) => {
  const session: string = await getSession({ req: ctx.req })

  return {
    props: {
      session,
    },
  }
}

export default MyAccountPage
