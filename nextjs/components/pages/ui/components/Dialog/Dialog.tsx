import clsx from 'clsx'
import * as React from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { useMountedState } from 'react-use'

import { Theme, theme, Transition } from '..'
import { useClickAwayOrEsc } from '../hooks'
import { DialogProvider } from './DialogContext'

export type DialogSize = keyof Theme['Dialog']['size']

export type DialogProps = React.PropsWithChildren<{
  isOpen: boolean
  onClose: () => void
  onSubmit: () => void
  size?: DialogSize
}>

export const Dialog: React.FC<DialogProps> = (props) => {
  const { children, isOpen, onClose, onSubmit, size = 'base' } = props

  const ref = useClickAwayOrEsc(onClose)

  const isMounted = useMountedState()

  const dialogStyles = theme.Dialog

  const cls = clsx(dialogStyles.base, dialogStyles.size[size])

  const backdropCls = clsx(dialogStyles.backdrop)

  const dialogValue = React.useMemo(() => {
    return {
      onClose,
      onSubmit,
    }
  }, [onClose, onSubmit])

  const modalComponent = (
    <DialogProvider value={dialogValue}>
      <Transition show={isOpen}>
        <div className={backdropCls}>
          {/* Backdrop */}

          {/* Modal main */}
          <Transition
            show={isOpen}
            enter="transition ease-out duration-150"
            enterFrom="opacity-0 transform scale-105 origin-center"
            enterTo="opacity-100 scale-100"
            leave="transition ease-in duration-150 "
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 transform scale-105 origin-center"
          >
            <FocusLock returnFocus>
              <div
                className="flex items-center justify-center h-screen"
                role="dialog"
                aria-hidden="true"
              >
                <div ref={ref} className={cls}>
                  {children}
                </div>
              </div>
            </FocusLock>
          </Transition>
        </div>
      </Transition>
    </DialogProvider>
  )
  return isMounted() ? createPortal(modalComponent, document.body) : null
}

export default Dialog
