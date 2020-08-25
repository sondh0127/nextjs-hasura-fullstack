import clsx from 'clsx'
import * as React from 'react'

import { theme } from '..'

export type BreadcrumbProps = React.PropsWithChildren<{
  className?: string
}>
type Ref = HTMLUListElement

export const Breadcrumb = React.forwardRef<Ref, BreadcrumbProps>(
  (props, ref) => {
    const { children, className } = props

    const cls = clsx(className, theme.Breadcrumb.base)

    return (
      <ul ref={ref} className={cls}>
        {children}
      </ul>
    )
  },
)

Breadcrumb.displayName = 'Breadcrumb'
