import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const ArrowCircleRightSolid = React.forwardRef<SVGRef, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
          clipRule="evenodd"
        />
      </Icon>
    )
  },
)

ArrowCircleRightSolid.displayName = 'ArrowCircleRightSolid'
