import React from 'react'

import { Icon, IconProps, SVGRef } from '..'

export const SearchSolid = React.forwardRef<SVGRef, IconProps>((props, ref) => {
  return (
    <Icon ref={ref} {...props} viewBox="0 0 20 20" isSolid>
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </Icon>
  )
})

SearchSolid.displayName = 'BlankSolid'
