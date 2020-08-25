import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const UserOutline = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
      />
    </Icon>
  )
})

UserOutline.displayName = 'UserOutline'
