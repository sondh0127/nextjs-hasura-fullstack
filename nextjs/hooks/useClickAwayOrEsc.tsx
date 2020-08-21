import { useRef } from 'react'
import { useClickAway, useKeyPressEvent } from 'react-use'

export const useClickAwayOrEsc = (handleFn: () => void) => {
  const ref = useRef(null)
  useClickAway(ref, handleFn, ['click'])
  useKeyPressEvent('Escape', handleFn)

  return ref
}
