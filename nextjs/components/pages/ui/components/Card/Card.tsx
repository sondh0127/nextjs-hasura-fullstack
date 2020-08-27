import clsx from 'clsx'
import * as React from 'react'

import { Theme, theme } from '..'
import { CardProvider } from './CardContext'

export type CardColor = keyof Theme['Card']['color']

export type CardProps = React.PropsWithChildren<{
  className?: string
  color?: CardColor
  isLoading?: boolean
  isStatic?: boolean
}>
type Ref = HTMLDivElement

export const Card = React.forwardRef<Ref, CardProps>((props, ref) => {
  const {
    children,
    className,
    color = 'default',
    isLoading = false,
    isStatic = false,
  } = props

  const cardStyle = theme.Card

  const cls = clsx(
    className,
    isStatic && cardStyle.base,
    !cardStyle.hov,
    cardStyle.color[color],
  )

  const cardValue = React.useMemo(() => {
    return { color, isLoading }
  }, [color, isLoading])

  return (
    <CardProvider value={cardValue}>
      <div ref={ref} className={cls}>
        {children}
      </div>
    </CardProvider>
  )
})

Card.displayName = 'Card'

export default Card
