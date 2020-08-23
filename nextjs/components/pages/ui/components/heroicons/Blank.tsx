import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const BlankCapIcon = React.forwardRef<SVGRef, IconProps>(
  (props, ref) => {
    return <Icon ref={ref} {...props} viewBox="0 0 20 20"></Icon>
  },
)

BlankCapIcon.displayName = 'BlankCapIcon'