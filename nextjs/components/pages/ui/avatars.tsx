import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Avatar, AvatarGroup } from './components'
import { UserOutline, UserSolid } from './components/heroicons'

const Avatars: React.FC = ({ children }) => {
  const src = `https://pbs.twimg.com/profile_images/1285102166709919744/XvlWrJny_400x400.jpg`
  return (
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Avatars</h1>

      <h2 className="section-title">Basic</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Avatar src={src} alt="Hasura" />
        <Avatar title="PJ" size="base" />
        <Avatar icon={UserSolid} />
      </div>

      <h2 className="section-title">Size</h2>
      <div className="flex w-full mb-4 space-x-3">
        <Avatar src={src} alt="Hasura" size="xs" />
        <Avatar src={src} alt="Hasura" size="sm" />
        <Avatar src={src} alt="Hasura" size="base" />
        <Avatar src={src} alt="Hasura" size="lg" />
        <Avatar src={src} alt="Hasura" size="xl" />
        <Avatar title="PJ" size="xs" />
        <Avatar title="PJ" size="sm" />
        <Avatar title="PJ" size="base" />
        <Avatar title="PJ" size="lg" />
        <Avatar title="PJ" size="xl" />
        <Avatar icon={UserSolid} size="xs" />
        <Avatar icon={UserSolid} size="sm" />
        <Avatar icon={UserSolid} size="base" />
        <Avatar icon={UserSolid} size="lg" />
        <Avatar icon={UserSolid} size="xl" />
      </div>

      <div className="flex w-full mb-4 space-x-3">
        <AvatarGroup>
          <Avatar src={src} alt="Hasura" />
          <Avatar title="PJ" size="base" />
          <Avatar icon={UserSolid} />
        </AvatarGroup>
      </div>
    </div>
  )
}

export default Avatars
