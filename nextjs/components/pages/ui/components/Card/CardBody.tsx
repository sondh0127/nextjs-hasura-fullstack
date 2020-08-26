import clsx from 'clsx'
import * as React from 'react'

import { theme } from '..'
import { Spinner } from '../Spinner'
import { useCardCtx } from './CardContext'

interface CardBodyProps {
  className?: string
}

export const CardBody: React.FC<CardBodyProps> = (props) => {
  const { children, className } = props

  const { color, isLoading } = useCardCtx()

  const headerStyle = theme.Card.body
  const cls = clsx(
    className,
    headerStyle.base,
    isLoading && headerStyle.loading.base,
    isLoading && headerStyle.loading[color],
  )

  let bodyRender
  if (!isLoading) {
    bodyRender = children
  } else {
    bodyRender = <Spinner />
  }

  return <div className={cls}>{bodyRender}</div>
}

export default CardBody
