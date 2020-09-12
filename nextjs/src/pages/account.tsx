import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/client'
import React from 'react'

import AccessDeniedIndicator from '@/components/AccessDeniedIndicator'
import Account from '@/components/pages/account'
import { getMainLayout } from '@/layouts/MainLayout'
import { NextPageWithLayout } from '@/types/page'
import { SessionProp } from '@/types/session'

const AccountPage: NextPageWithLayout<SessionProp> = ({ session }) => {
  if (!session) {
    return <AccessDeniedIndicator />
  }
  return <Account />
}

export const getServerSideProps: GetServerSideProps<SessionProp> = async (
  ctx,
) => {
  const session = await getSession(ctx as any)

  return {
    props: { session },
  }
}
AccountPage.getLayout = getMainLayout('My account')

export default AccountPage
