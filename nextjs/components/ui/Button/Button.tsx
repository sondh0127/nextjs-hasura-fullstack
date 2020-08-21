import React, {
  ButtonHTMLAttributes,
  cloneElement,
  isValidElement,
  PropsWithChildren,
} from 'react'

type ReactButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'type' | 'disabled'
>

type ButtonProps = ReactButtonProps &
  PropsWithChildren<{
    size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl'
    iconLeft?: React.ReactElement
    iconRight?: React.ReactElement
  }>

export type Ref = HTMLButtonElement

const Button = React.forwardRef<Ref, ButtonProps>(
  (
    { children, disabled, size = 'base', iconLeft, iconRight, ...rest },
    ref,
  ) => {
    const baseCls =
      'align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none'

    const sizeCls = {
      xs: `px-1 py-0 rounded-sm text-xs`,
      sm: `px-3 py-1 rounded-md text-sm`,
      base: `px-4 py-2 rounded-lg text-sm`,
      lg: `px-5 py-3 rounded-lg`,
      xl: `px-10 py-4 rounded-lg`,
    }

    const iconLeftStyles = ''
    const iconRightStyles = ''

    const cls = `${baseCls} ${sizeCls[size]}`
    const _iconLeft = isValidElement(iconLeft)
      ? cloneElement(iconLeft, {
          'aria-hidden': true,
          className: iconLeftStyles,
        })
      : null

    const _iconRight = isValidElement(iconRight)
      ? cloneElement(iconRight, {
          'aria-hidden': true,
          className: iconRightStyles,
        })
      : null

    return (
      <button
        className={cls}
        ref={ref}
        disabled={disabled}
        type="button"
        {...rest}
      >
        {_iconLeft}
        {children}
        {_iconRight}
      </button>
    )
  },
)

Button.displayName = 'Button'

export default Button
