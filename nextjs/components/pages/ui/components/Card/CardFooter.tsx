import clsx from 'clsx'
import * as React from 'react'

import { theme } from '..'
import { useCardCtx } from './CardContext'

interface CardFooterProps {
  className?: string
  transparent?: boolean
}

export const CardFooter: React.FC<CardFooterProps> = (props) => {
  const { children, className, transparent } = props

  const { color, isLoading } = useCardCtx()

  const footerStyle = theme.Card.footer
  const cls = clsx(
    className,
    footerStyle.base,
    transparent && footerStyle.transparent,
    footerStyle.color[color],
    isLoading && footerStyle.loading,
  )

  return <div className={cls}>{children}</div>
}

export default CardFooter
