import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import { useRouter } from 'next/router'
import React from 'react'

import AccessDeniedIndicator from '../../components/access-denied-indicator'
import ActionButtons from '../../components/pages/ui/actionbuttons'
import Alerts from '../../components/pages/ui/alerts'
import Avatars from '../../components/pages/ui/avatars'
import Badges from '../../components/pages/ui/badges'
import Breadcrumbs from '../../components/pages/ui/breadcrumbs'
import Buttons from '../../components/pages/ui/buttons'
import Cards from '../../components/pages/ui/cards'
import Charts from '../../components/pages/ui/charts'
import Collapses from '../../components/pages/ui/collapses'
import Dashboard from '../../components/pages/ui/dashboard'
import Dialogs from '../../components/pages/ui/dialogs'
import Drawers from '../../components/pages/ui/drawers'
import Form from '../../components/pages/ui/form'
import Icons from '../../components/pages/ui/icons'
import Images from '../../components/pages/ui/images'
import Spinners from '../../components/pages/ui/spinners'
import Statuses from '../../components/pages/ui/statuses'
import Tables from '../../components/pages/ui/tables'
import TailwindLayout from '../../layouts/TailwindLayout'
import { SessionProp } from '../../types/session'

const uiComps: Record<string, React.ElementType> = {
  dashboard: Dashboard,
  forms: Form,
  cards: Cards,
  charts: Charts,
  buttons: Buttons,
  spinners: Spinners,
  icons: Icons,
  alerts: Alerts,
  avatars: Avatars,
  status: Statuses,
  dialogs: Dialogs,
  tables: Tables,
  badges: Badges,
  collapses: Collapses,
  breadcrumbs: Breadcrumbs,
  actionbuttons: ActionButtons,
  images: Images,
  drawers: Drawers,
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
