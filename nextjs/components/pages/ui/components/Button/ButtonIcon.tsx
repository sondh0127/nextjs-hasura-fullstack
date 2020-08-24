import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

import { IconProps, Spinner, Theme, theme } from '..'

type ReactButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'disabled'
>

export type ButtonIconColor = keyof Theme['ButtonIcon']['variant']['default']
export type ButtonIconVariant = keyof Theme['ButtonIcon']['variant']
export type ButtonIconSize = keyof Theme['ButtonIcon']['size']

export type ButtonIconProps = ReactButtonProps & {
  size?: ButtonIconSize
  variant?: ButtonIconVariant
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
    },
    ref,
  ) => {
    const variantCls = theme.ButtonIcon.variant

    const colorCls = variantCls[variant]
    const sizeCls = theme.ButtonIcon.size

    const Icon = icon

    const cls = clsx(
      theme.ButtonIcon.base,
      disabled && theme.ButtonIcon.disabled,
      isLoading && theme.ButtonIcon.loading,
      colorCls[color],
      sizeCls[size],
      className,
    )
    const spinnerSizeCls = theme.Button.spinner.size
    const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    const iconSizeCls: Record<ButtonIconSize, string> = {
      xs: `h-4 w-4`,
      sm: `h-4 w-4`,
      base: `h-7 w-7`,
      lg: `h-6 w-6`,
      xl: `h-8 w-8`,
    }

    const iconCls = clsx(iconSizeCls[size], isLoadingCls)

    return (
      <button ref={ref} className={cls} disabled={disabled}>
        {isLoading && <Spinner className={spinnerCls} />}
        <Icon className={iconCls} />
      </button>
    )
  },
)

ButtonIcon.displayName = 'ButtonIcon'
