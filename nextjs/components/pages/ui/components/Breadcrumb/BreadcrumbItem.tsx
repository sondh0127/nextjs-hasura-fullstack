import clsx from 'clsx'
import * as React from 'react'

import { Theme, theme } from '..'

export const BREADCRUMB_SEPARATOR_VARIANT = {
  default: '/',
  arrow: '→',
  arrowhead: '>',
  bullet: '.',
}
export type BreadcrumbItemProps = React.PropsWithChildren<{
  separator?: keyof typeof BREADCRUMB_SEPARATOR_VARIANT
  onClick?: () => void
}>
type Ref = HTMLLIElement

export const BreadcrumbItem = React.forwardRef<Ref, BreadcrumbItemProps>(
  (props, ref) => {
    const { children, separator = 'default' } = props
    const cls = clsx(theme.Breadcrumb.item.base)

    const linkToRender = <span className={cls}>{children}</span>

    const separatorCls = clsx(theme.Breadcrumb.separator.base)

    return (
      <React.Fragment>
        <li ref={ref} className={cls}>
          {linkToRender}
        </li>
        {separator && (
          <span className={separatorCls}>
            {BREADCRUMB_SEPARATOR_VARIANT[separator]}
          </span>
        )}
      </React.Fragment>
    )
  },
)

BreadcrumbItem.displayName = 'BreadcrumbItem'
