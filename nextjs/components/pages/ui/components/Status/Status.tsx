import clsx from 'clsx'
import * as React from 'react'

import { Theme, theme } from '../'

export type StatusPosition = keyof Theme['Status']['position']
export type StatusColor = keyof Theme['Status']['color']

export type StatusProps = {
  text?: React.ReactNode
  // count?: React.ReactNode
  position?: StatusPosition
  color?: StatusColor
  // size
  // icon
  // number
  // Ribbon
}
type Ref = HTMLDivElement

export const Status = React.forwardRef<Ref, StatusProps>((props, ref) => {
  const { children, text, position = 'bottom-right', color = 'busy' } = props
  let statusToRender

  const cls = clsx(theme.Status.base)

  const positionCls = theme.Status.position
  const colorCls = theme.Status.color

  if (text) {
    const textStatusCls = clsx()
    statusToRender = <span className={textStatusCls}>{text}</span>
  } else {
    // No text, status only
    const emptyStatusCls = clsx(positionCls[position], colorCls[color])
    statusToRender = <span className={emptyStatusCls}>{text}</span>
  }

  return (
    <div ref={ref} className={cls}>
      {children}
      {statusToRender}
    </div>
  )
})

Status.displayName = 'Status'
