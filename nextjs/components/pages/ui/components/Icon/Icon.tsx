import clsx from 'clsx'
import React, { PropsWithChildren } from 'react'

import { Theme, theme } from '../'

export type SVGRef = SVGSVGElement
export type IconSize = keyof Theme['icon']['size']
export type IconColor = keyof Theme['icon']['color']

export type IconProps = {
  className?: string
  size?: IconSize
  color?: IconColor
}

type SVGProps = {
  viewBox: string
  isSolid?: boolean
}

export const Icon = React.forwardRef<
  SVGRef,
  PropsWithChildren<IconProps & SVGProps>
>(
  (
    {
      viewBox,
      isSolid = false,
      children,
      className,
      size = 'base',
      color,
      ...rest
    },
    ref,
  ) => {
    const sizeCls = theme.icon.size
    const colorCls = theme.icon.color

    const cls = clsx(
      sizeCls[size],
      color ? colorCls[color] : 'text-current',
      isSolid ? 'fill-current' : 'stroke-current',
      className,
    )

    return (
      <svg
        ref={ref}
        viewBox={viewBox}
        fill="none"
        className={cls}
        {...rest}
        aria-hidden="true"
      >
        {children}
      </svg>
    )
  },
)

Icon.displayName = 'Icon'
