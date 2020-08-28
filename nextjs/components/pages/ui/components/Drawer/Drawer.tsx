import clsx from 'clsx'
import * as React from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { useMountedState } from 'react-use'

import { Theme, theme, Transition } from '..'
import { useClickAwayOrEsc } from '../hooks'
import { DrawerProvider } from './DrawerContext'

export type DrawerSize = keyof Theme['Drawer']['size']
export type DrawerPosition = keyof Theme['Drawer']['position']

export type DrawerProps = React.PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  size?: DrawerSize
  position?: DrawerPosition
}>

export const Drawer: React.FC<DrawerProps> = (props) => {
  const {
    children,
    isOpen,
    onClose,
    onSubmit,
    size = 'base',
    position = 'left',
  } = props

  const ref = useClickAwayOrEsc(onClose)

  const isMounted = useMountedState()

  const DrawerStyles = theme.Drawer
  const positionStyles = DrawerStyles.position[position]

  const cls = clsx(
    DrawerStyles.base,
    DrawerStyles.size[size],
    positionStyles.base,
  )

  const backdropCls = clsx(DrawerStyles.backdrop)

  const DrawerValue = React.useMemo(() => {
    return {
      onClose,
      onSubmit,
    }
  }, [onClose, onSubmit])

  const modalComponent = (
    <DrawerProvider value={DrawerValue}>
      <Transition show={isOpen}>
        {/* Backdrop */}
        <div className={backdropCls}>
          {/* Drawer main class="*/}
          <Transition
            enter="transition ease-out duration-150"
            enterFrom={`opacity-0 transform ${positionStyles.transition}`}
            enterTo="opacity-100"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100"
            leaveTo={`opacity-0 transform ${positionStyles.transition}`}
          >
            <FocusLock returnFocus>
              <div ref={ref} className={cls} role="dialog" aria-hidden="true">
                {children}
              </div>
            </FocusLock>
          </Transition>
          {/* "*/}
        </div>
      </Transition>
    </DrawerProvider>
  )
  return isMounted() ? createPortal(modalComponent, document.body) : null
}

Drawer.displayName = 'Drawer'

export default Drawer
