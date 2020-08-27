// Usage:

import { createCtx } from '../utils'

export type DialogValue = {
  onClose: () => void
  onSubmit: () => void
}

export const [useDialogCtx, DialogProvider] = createCtx<DialogValue>()
