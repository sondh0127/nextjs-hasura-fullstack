import clsx from 'clsx'
import * as React from 'react'

import { theme } from '..'
import { useCardCtx } from './CardContext'

interface CardHeaderProps {
  className?: string
  title?: string
  subtitle?: string
  action?: React.ReactNode
}

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
  const { children, className, title, subtitle, action } = props

  const { color } = useCardCtx()

  const headerStyle = theme.Card.header

  const cls = clsx(className, headerStyle.base, headerStyle.color[color])

  let titleRender
  if (title) {
    const titleStyle = headerStyle.title
    const titleCls = clsx(titleStyle.base, titleStyle[color])

    if (subtitle) {
      const subtitleCls = headerStyle.subtitle
      titleRender = (
        <div>
          <div className={titleCls}>{title}</div>
          <div className={subtitleCls}>{subtitle}</div>
        </div>
      )
    } else {
      titleRender = <div className={titleCls}>{title}</div>
    }
  } else {
    titleRender = children
  }

  return (
    <div className={cls}>
      {titleRender}
      {action}
    </div>
  )
}

export default CardHeader
