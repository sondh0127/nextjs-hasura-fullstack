import * as React from 'react'

import { Avatar, Status } from './components'
import { UserSolid } from './components/heroicons'

const Statuses: React.FC = (props) => {
  const { children } = props
  const src = `https://pbs.twimg.com/profile_images/1285102166709919744/XvlWrJny_400x400.jpg`
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Status</h1>

      <div className="space-x-2">
        <h2 className="section-title">Basic</h2>
        <Status>
          <Avatar src={src} alt="Hasura" />
        </Status>
        <Status>
          <Avatar icon={UserSolid} />
        </Status>
        <Status>
          <Avatar title="PJ" size="base" />
        </Status>
      </div>
      <div className="space-x-2">
        <h2 className="section-title">Position</h2>
        <Status position="bottom-left">
          <Avatar src={src} alt="Hasura" />
        </Status>
        <Status position="bottom-right">
          <Avatar icon={UserSolid} />
        </Status>
        <Status position="top-left">
          <Avatar title="PJ" size="base" />
        </Status>
        <Status position="top-right">
          <Avatar title="PJ" size="base" />
        </Status>
      </div>
    </div>
  )
}

export default Statuses
