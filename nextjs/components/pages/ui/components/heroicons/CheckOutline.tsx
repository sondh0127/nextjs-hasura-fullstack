import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const CheckOutline = React.forwardRef<SVGRef, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </Icon>
    )
  },
)

CheckOutline.displayName = 'CheckOutline'
