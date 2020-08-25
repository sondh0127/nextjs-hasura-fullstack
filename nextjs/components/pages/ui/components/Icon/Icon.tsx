import clsx from 'clsx'
import * as React from 'react'

import { Theme, theme } from '../'

export type SVGRef = SVGSVGElement
export type IconSize = keyof Theme['Icon']['size']
export type IconColor = keyof Theme['Icon']['color']

export type IconProps = React.PropsWithChildren<{
  className?: string
  size?: IconSize
  color?: IconColor
  style?: React.CSSProperties
}>

type SVGProps = {
  viewBox: string
  isSolid?: boolean
}

export const Icon = React.forwardRef<SVGRef, IconProps & SVGProps>(
  (
    {
      viewBox,
      isSolid = false,
      children,
      className,
      style,
      size = 'base',
      color,
      ...rest
    },
    ref,
  ) => {
    const sizeCls = theme.Icon.size
    const colorCls = theme.Icon.color

    const cls = clsx(
      sizeCls[size],
      color ? colorCls[color] : 'text-current',
      isSolid ? 'fill-current' : 'stroke-current',
      className,
    )

    return (
      <svg
        style={style}
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
