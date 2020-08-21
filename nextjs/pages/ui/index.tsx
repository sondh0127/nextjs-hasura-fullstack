import { GetServerSideProps, NextPage } from 'next'
import { getSession } from 'next-auth/client'
import React, { Fragment } from 'react'

import AccessDeniedIndicator from '../../components/access-denied-indicator'
import Navbar from '../../components/Navbar'
import TailwindLayout from '../../layouts/TailwindLayout'
import { SessionProp } from '../../types/session'

const Ui: NextPage<SessionProp> = ({ session }) => {
  if (!session) {
    return (
      <TailwindLayout>
        <AccessDeniedIndicator />
      </TailwindLayout>
    )
  }

  return (
    <TailwindLayout>
      <div className="container flex hover:border-black">
        <label className="block">
          <span className="text-gray-700 ">Name</span>
          <input className="block mt-1 form-input" placeholder="Jane Doe" />
        </label>
      </div>
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
export default Ui
