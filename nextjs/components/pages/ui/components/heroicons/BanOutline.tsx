import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const BanOutline = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
      />
    </Icon>
  )
})

BanOutline.displayName = 'BanOutline'
