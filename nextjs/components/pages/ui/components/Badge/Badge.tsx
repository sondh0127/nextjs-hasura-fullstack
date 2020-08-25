import clsx from 'clsx'
import * as React from 'react'

import { ButtonIcon, Theme, theme } from '..'
import { ButtonIconVariant } from '../Button'
import { XSolid } from '../heroicons'

export type BadgeVariant = keyof Theme['Badge']['variant']
export type BadgeColor = keyof Theme['Badge']['variant']['solid']

export type BadgeProps = React.PropsWithChildren<{
  variant?: BadgeVariant
  color?: BadgeColor
  hasClose?: boolean
  className?: string
}>
type Ref = HTMLDivElement

export const Badge = React.forwardRef<Ref, BadgeProps>((props, ref) => {
  const {
    children,
    className,
    variant = 'solid',
    color = 'primary',
    hasClose,
  } = props

  const variantCls = theme.Badge.variant
  const colorCls = variantCls[variant]

  const cls = clsx(
    theme.Badge.base,
    theme.Badge.active,
    theme.Badge.focus,
    colorCls[color],
    className,
  )

  const btnVariant: Record<BadgeVariant, ButtonIconVariant> = {
    solid: 'default',
    light: 'light',
  }
  const btnCls = theme.Badge.btn

  return (
    <div ref={ref} className={cls}>
      {children}
      {hasClose && (
        <ButtonIcon
          className={btnCls}
          color={color}
          size="xs"
          shape="rounded"
          icon={XSolid}
          variant={btnVariant[variant]}
        />
      )}
    </div>
  )
})

Badge.displayName = 'Badge'
