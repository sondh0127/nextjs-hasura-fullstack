import clsx from 'clsx'
import * as React from 'react'

import { IconProps, Theme, theme } from '..'

export type BreadcrumbItemSize = keyof Theme['Breadcrumb']['item']['size']

export const BREADCRUMB_SEPARATOR_VARIANT = {
  default: '/',
  arrow: '→',
  arrowhead: '>',
  bullet: '.',
}
export type BreadcrumbItemProps = React.PropsWithChildren<{
  separator?: keyof typeof BREADCRUMB_SEPARATOR_VARIANT
  onClick?: () => void
  isActive?: boolean
  size?: BreadcrumbItemSize
  icon?: React.ElementType<IconProps>
}>
type Ref = HTMLLIElement
// TODO: add hover style for primary text
export const BreadcrumbItem = React.forwardRef<Ref, BreadcrumbItemProps>(
  (props, ref) => {
    const {
      children,
      separator = 'default',
      isActive = false,
      size = 'base',
      icon,
    } = props

    const itemCls = theme.Breadcrumb.item

    const sizeCls = itemCls.size

    const cls = clsx(itemCls.base, isActive && itemCls.active, sizeCls[size])

    let linkToRender
    if (icon) {
      const Icon = icon
      const iconSizeCls = itemCls.icon.size
      const iconCls = clsx(itemCls.icon.base, iconSizeCls[size])

      linkToRender = (
        <span className="flex items-center">
          <Icon className={iconCls} />
          {children}
        </span>
      )
    } else {
      linkToRender = <span>{children}</span>
    }

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
