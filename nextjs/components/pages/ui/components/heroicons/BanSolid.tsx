import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const BanSolid = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
      <path
        fillRule="evenodd"
        d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
        clipRule="evenodd"
      />
    </Icon>
  )
})

BanSolid.displayName = 'BanSolid'
