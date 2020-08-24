import clsx from 'clsx'
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { IconProps, Spinner, SpinnerSize, Theme, theme } from '../'

type ReactButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'disabled'
>

export type ButtonColor = keyof Theme['Button']['variant']['default']
export type ButtonVariant = keyof Theme['Button']['variant']
export type ButtonSize = keyof Theme['Button']['size']
export type ButtonShape = keyof Theme['Button']['shape']

export type ButtonProps = ReactButtonProps &
  PropsWithChildren<{
    size?: ButtonSize
    variant?: ButtonVariant
    shape?: ButtonShape
    color?: ButtonColor
    className?: string
    spinnerClassName?: string
    block?: boolean
    iconLeft?: React.ComponentType<IconProps>
    iconRight?: React.ComponentType<IconProps>
    isLoading?: boolean
  }>

type Ref = HTMLButtonElement

export const Button = React.forwardRef<Ref, ButtonProps>(
  (
    {
      children,
      className,
      spinnerClassName,
      disabled,
      block,
      isLoading,
      variant = 'default',
      color = 'primary',
      size = 'base',
      iconLeft,
      iconRight,
      shape,
    },
    ref,
  ) => {
    const variantCls = theme.Button.variant

    const colorCls = variantCls[variant]
    const sizeCls = theme.Button.size
    const shapeCls = theme.Button.shape

    const IconLeft = iconLeft
    const IconRight = iconRight

    const cls = clsx(
      theme.Button.base,
      disabled && theme.Button.disabled,
      block && theme.Button.block,
      isLoading && theme.Button.loading,
      colorCls[color],
      sizeCls[size],
      shape && shapeCls[shape],
      className,
    )
    // Spinner
    const spinnerSizeCls = theme.Button.spinner.size
    const spinnerCls = clsx('absolute', spinnerSizeCls[size], spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    const iconCls = theme.Button.icon
    const iconSizeCls = iconCls['size']

    const iconLeftCls = clsx(
      children && iconCls.variant.left,
      isLoadingCls,
      iconSizeCls[size],
    )
    const iconRightCls = clsx(
      children && iconCls.variant.right,
      isLoadingCls,
      iconSizeCls[size],
    )

    return (
      <button ref={ref} className={cls} disabled={disabled}>
        {isLoading && <Spinner className={spinnerCls} />}
        {IconLeft && <IconLeft className={iconLeftCls} />}
        <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
          {children}
        </span>
        {IconRight && <IconRight className={iconRightCls} />}
      </button>
    )
  },
)

Button.displayName = 'Button'
