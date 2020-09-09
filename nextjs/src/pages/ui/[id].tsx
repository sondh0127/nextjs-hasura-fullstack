import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'

import AccessDeniedIndicator from '@/components/AccessDeniedIndicator'

// import Charts from '../../components/pages/ui/charts'
// import Dashboard from '../../components/pages/ui/dashboard'
// import Form from '../../components/pages/ui/form'
// import Tables from '../../components/pages/ui/tables'
import { SessionProp } from '../../types/session'

const uiComps: Record<string, React.ElementType> = {
  pages: () => null,
}

const Index: NextPage<SessionProp> = ({ session }) => {
  const router = useRouter()
  const link = router.query.id as string
  const Component = uiComps[link]
  if (!session) {
    return <AccessDeniedIndicator />
  }

  return <Component />
}
export const getServerSideProps: GetServerSideProps<SessionProp> = async (
  ctx,
) => {
  const session = await getSession(ctx as any)

  return {
    props: { session },
  }
}

export default Index
