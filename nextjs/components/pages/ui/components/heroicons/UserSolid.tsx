import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const UserSolid = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
      <path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </Icon>
  )
})

UserSolid.displayName = 'UserSolid'
