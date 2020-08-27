// Usage:

import { createCtx } from '../utils'

export type CollapseValue = {
  collapses: boolean[]
  setCollapses: (collapses: boolean[]) => void
}

export const [useCollapseCtx, CollapseProvider] = createCtx<CollapseValue>()
