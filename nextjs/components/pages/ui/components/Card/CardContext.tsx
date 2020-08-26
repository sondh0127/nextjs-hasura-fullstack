import { CardColor } from '..'
import { createCtx } from '../utils'

export type CardValue = {
  color: CardColor
  isLoading: boolean
}

export const [useCardCtx, CardProvider] = createCtx<CardValue>()
