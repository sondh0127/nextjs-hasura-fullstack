import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const DotsVerticalSolid = React.forwardRef<SVGRef, IconProps>(
  (props, ref) => {
    return (
      <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
      </Icon>
    )
  },
)

DotsVerticalSolid.displayName = 'DotsVerticalSolid'
