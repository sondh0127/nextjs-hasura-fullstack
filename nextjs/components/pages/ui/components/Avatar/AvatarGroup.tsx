import clsx from 'clsx'
import * as React from 'react'

import { theme } from '..'

export type AvatarGroupProps = React.PropsWithChildren<{
  // maxCount: number
}>
type Ref = HTMLDivElement

export const AvatarGroup = React.forwardRef<Ref, AvatarGroupProps>(
  (props, ref) => {
    const { children } = props
    const cls = clsx(theme.Avatar.group.base)
    return (
      <div ref={ref} className={cls}>
        {children}
      </div>
    )
  },
)

AvatarGroup.displayName = 'AvatarGroup'
