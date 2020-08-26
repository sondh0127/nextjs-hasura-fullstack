import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const DotsHorizontalSolid = React.forwardRef<SVGRef, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
        <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
      </Icon>
    )
  },
)

DotsHorizontalSolid.displayName = 'DotsHorizontalSolid'
