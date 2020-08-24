import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const CheckSoild = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </Icon>
  )
})

CheckSoild.displayName = 'CheckSoild'
