import clsx from 'clsx'
import * as React from 'react'

import { ButtonIcon, ButtonIconVariant } from '..'
import {
  BanOutline,
  CheckOutline,
  ExclamationOutline,
  XSolid,
} from '../heroicons'
import { ExclamationCircleOutline } from '../heroicons'
import { Theme, theme } from '../themes'

const ALERT_STATUS_ICON = {
  primary: ExclamationCircleOutline,
  success: CheckOutline,
  danger: BanOutline,
  warning: ExclamationOutline,
}

type AlertVariant = keyof Theme['Alert']['variant']
type AlertColor = keyof Theme['Alert']['variant']['default']
type AlertSize = keyof Theme['Alert']['size']
type AlertBordered = keyof Theme['Alert']['bordered']
type AlertStatusIcon = keyof typeof ALERT_STATUS_ICON

export type AlertProps = React.PropsWithChildren<{
  title: string | React.ReactNode
  variant?: AlertVariant
  color?: AlertColor
  statusIcon?: AlertStatusIcon
  size?: AlertSize
  bordered?: AlertBordered
  hasClose?: boolean
  onClose?: () => void
}>

type Ref = HTMLDivElement

export const Alert = React.forwardRef<Ref, AlertProps>((props, ref) => {
  const {
    title,
    children,
    variant = 'default',
    color = 'primary',
    size = 'base',
    bordered,
    hasClose = false,
    statusIcon,
    onClose,
  } = props
  const variantCls = theme.Alert.variant

  const colorCls = variantCls[variant]
  const sizeCls = theme.Alert.size
  const borderedCls = theme.Alert.bordered

  const cls = clsx(
    theme.Alert.base,
    colorCls[color],
    sizeCls[size],
    bordered && borderedCls[bordered],
    hasClose && theme.Alert.hasClose,
  )

  const btnCls = clsx(theme.Alert.btnClose)
  const btnVariant: Record<AlertVariant, ButtonIconVariant> = {
    default: 'light',
    outline: 'outline',
    solid: 'default',
  }

  const StatusIcon = statusIcon ? ALERT_STATUS_ICON[statusIcon] : null
  const statusIconCls = clsx(theme.Alert.statusIcon)

  const descriptionCls = clsx(theme.Alert.description)

  return (
    <div ref={ref} className={cls} role="alert">
      {StatusIcon && (
        <StatusIcon
          className={statusIconCls}
          // style={{
          //   maxWidth: '1.25rem',
          //   minWidth: '1.25rem',
          //   maxHeight: '1.25rem',
          //   minHeight: '1.25rem',
          // }}
        />
      )}
      {!children && title}
      {children && (
        <div>
          <span>{title}</span>
          <p className={descriptionCls}>{children}</p>
        </div>
      )}
      {hasClose && (
        <div className={btnCls}>
          <ButtonIcon
            color={color}
            size="base"
            shape="rounded"
            icon={XSolid}
            variant={btnVariant[variant]}
            onClick={onClose}
          />
        </div>
      )}
    </div>
  )
})

Alert.displayName = 'Alert'
