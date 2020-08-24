import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const XOutline = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props} viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M6 18L18 6M6 6l12 12"
      ></path>
    </Icon>
  )
})

XOutline.displayName = 'XOutline'
