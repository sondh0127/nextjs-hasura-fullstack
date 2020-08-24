import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const ExclamationCircleOutline = React.forwardRef<SVGRef, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props} viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </Icon>
    )
  },
)

ExclamationCircleOutline.displayName = 'ExclamationCircleOutline'
