import classNames from 'classnames'
import React, { ButtonHTMLAttributes, PropsWithChildren } from 'react'

import { IconProps, IconSize, Spinner, SpinnerSize, Theme, theme } from '../'
type ReactButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'disabled'
>

export type ButtonColor = keyof Theme['button']['variant']['default']
export type ButtonVariant = keyof Theme['button']['variant']
export type ButtonSize = keyof Theme['button']['size']

export type ButtonProps = ReactButtonProps &
  PropsWithChildren<{
    size?: ButtonSize
    variant?: ButtonVariant
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
    },
    ref,
  ) => {
    const variantCls = theme.button.variant

    const colorCls = variantCls[variant]
    const sizeCls = theme.button.size

    const IconLeft = iconLeft
    const IconRight = iconRight

    const cls = classNames(
      theme.button.base,
      disabled ? theme.button.disabled : '',
      block ? theme.button.block : '',
      isLoading ? theme.button.loading : '',
      colorCls[color],
      sizeCls[size],
      // has icon but no children
      // hasIcon() && !children && iconSizeStyles[size],
      // has icon and children
      // hasIcon() && children && sizeStyles[size],
      className,
    )
    const spinnerSize: Record<ButtonSize, SpinnerSize> = {
      xs: 'sm',
      sm: 'sm',
      base: 'base',
      lg: 'base',
      xl: 'base',
    }
    const spinnerCls = classNames('absolute', spinnerClassName)
    const isLoadingCls = isLoading ? 'opacity-0' : 'opacity-100'

    const iconCls = theme.button.icon

    const iconSizeProps: Record<ButtonSize, IconSize> = {
      xs: 'xs',
      sm: 'sm',
      base: 'base',
      lg: 'lg',
      xl: 'xl',
    }

    const iconLeftCls = classNames(
      children ? iconCls.variant.left : '',
      isLoadingCls,
    )

    const iconRightCls = classNames(
      children ? iconCls.variant.right : '',
      isLoadingCls,
    )

    return (
      <button ref={ref} className={cls} disabled={disabled}>
        {isLoading && (
          <Spinner className={spinnerCls} size={spinnerSize[size]} />
        )}

        {IconLeft && (
          <IconLeft size={iconSizeProps[size]} className={iconLeftCls} />
        )}
        <span className={isLoading ? 'opacity-0' : 'opacity-100'}>
          {children}
        </span>
        {IconRight && (
          <IconRight size={iconSizeProps[size]} className={iconRightCls} />
        )}
      </button>
    )
  },
)

Button.displayName = 'Button'
