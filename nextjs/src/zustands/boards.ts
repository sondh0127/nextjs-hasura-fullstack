import create from 'zustand'

import { Board } from '@/types/model'

export const useLastPositionNumber = create<{
  lastPosition: number
  setLastPosition: (lastPosition: number) => void
}>((set) => ({
  lastPosition: 0,
  setLastPosition: (lastPosition) => set(() => ({ lastPosition })),
}))
