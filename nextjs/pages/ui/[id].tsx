import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'

import AccessDeniedIndicator from '../../components/access-denied-indicator'
import Buttons from '../../components/pages/ui/buttons'
import Cards from '../../components/pages/ui/cards'
import Charts from '../../components/pages/ui/charts'
import Dashboard from '../../components/pages/ui/dashboard'
import Form from '../../components/pages/ui/form'
import Icons from '../../components/pages/ui/icons'
import Modal from '../../components/pages/ui/modal'
import Spinners from '../../components/pages/ui/spinners'
import Tables from '../../components/pages/ui/tables'
import TailwindLayout from '../../layouts/TailwindLayout'
import { SessionProp } from '../../types/session'

const uiComps: Record<string, React.ReactNode> = {
  dashboard: Dashboard,
  forms: Form,
  cards: Cards,
  charts: Charts,
  buttons: Buttons,
  spinners: Spinners,
  icons: Icons,
  modals: Modal,
  tables: Tables,
  pages: () => null,
}

const Index: NextPage<SessionProp> = ({ session }) => {
  const router = useRouter()
  const link = router.query.id as string
  const Component = uiComps[link]
  if (!session) {
    return (
      <TailwindLayout>
        <AccessDeniedIndicator />
      </TailwindLayout>
    )
  }

  return (
    <TailwindLayout>
      <Component />
    </TailwindLayout>
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

export default Index
