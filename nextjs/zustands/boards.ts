import create from 'zustand'

export const [useLastListPosition] = create<{
  lastPosition: number
  setLastPosition: (lastPosition: number) => void
}>((set) => ({
  lastPosition: 0,
  setLastPosition: (lastPosition) => set(() => ({ lastPosition })),
}))
