import { createCtx } from '../utils'

export type DrawerValue = {
  onClose?: () => void
  onSubmit?: () => void
}

export const [useDrawerCtx, DrawerProvider] = createCtx<DrawerValue>()
