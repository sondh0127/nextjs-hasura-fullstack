import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

import { IconProps, Spinner, Theme, theme } from '..'

type ReactButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'disabled' | 'onClick'
>

export type ButtonIconColor = keyof Theme['ButtonIcon']['variant']['default']
export type ButtonIconVariant = keyof Theme['ButtonIcon']['variant']
export type ButtonIconSize = keyof Theme['ButtonIcon']['size']
export type ButtonIconShape = keyof Theme['ButtonIcon']['shape']

export type ButtonIconProps = ReactButtonProps & {
  size?: ButtonIconSize
  variant?: ButtonIconVariant
  shape?: ButtonIconShape
  color?: ButtonIconColor
  className?: string
  spinnerClassName?: string
  icon: React.ComponentType<IconProps>
  isLoading?: boolean
}

type Ref = HTMLButtonElement

export const ButtonIcon = React.forwardRef<Ref, ButtonIconProps>(
  (
    {
      className,
      spinnerClassName,
      disabled,
      isLoading,
      variant = 'default',
      color = 'primary',
      size = 'base',
      icon,
      shape,
      onClick,
    },
    ref,
  ) => {
    const variantCls = theme.ButtonIcon.variant

    const colorCls = variantCls[variant]
    const sizeCls = theme.ButtonIcon.size
    const shapeCls = theme.ButtonIcon.shape

    const Icon = icon

    const cls = clsx(
      theme.ButtonIcon.base,
      disabled && theme.ButtonIcon.disabled,
      isLoading && theme.ButtonIcon.loading,
      colorCls[color],
      sizeCls[size],
      shape && shapeCls[shape],
      className,
    )
    const spinnerSizeCls = theme.ButtonIcon.spinner.size
    const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    const iconSizeCls = theme.ButtonIcon.icon.size

    const iconCls = clsx(iconSizeCls[size], isLoadingCls)

    return (
      <button ref={ref} className={cls} disabled={disabled} onClick={onClick}>
        {isLoading && <Spinner className={spinnerCls} />}
        <Icon className={iconCls} />
      </button>
    )
  },
)

ButtonIcon.displayName = 'ButtonIcon'
