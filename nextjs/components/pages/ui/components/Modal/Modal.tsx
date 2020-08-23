import React, {
  Fragment,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'
import { useKeyPressEvent, useMountedState } from 'react-use'

import { Transition } from '..'

interface ModalProps {
  isOpen: boolean
  onClose: () => void
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose }) => {
  const handleFn = () => {
    onClose()
  }
  useKeyPressEvent('Escape', handleFn)
  const isMounted = useMountedState()

  const modalComponent = (
    <Transition show={isOpen}>
      <div className="backdrop">
        {/* Backdrop */}

        {/* Modal main */}
        <Transition
          enter="transition ease-out duration-150"
          enterFrom="opacity-0 transform translate-y-1/2"
          enterTo="opacity-100"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100"
          leaveTo="opacity-0  transform translate-y-1/2"
        >
          <FocusLock returnFocus>
            <div className="modal" role="dialog">
              <header className="flex justify-end">
                <button
                  className="w-6 h-6 text-gray-400 btn btn-icon btn-link"
                  aria-label="close"
                  onClick={onClose}
                >
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    role="img"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </button>
              </header>
              <div>
                <div className="modal-header">Modal header</div>
                <p className="modal-body">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Nostrum et eligendi repudiandae voluptatem tempore!
                </p>
              </div>
              {/* Footer */}
              <div className="modal-footer">
                <button
                  className="w-full btn btn-base btn-outline sm:w-auto"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button className="w-full btn btn-base btn-primary sm:w-auto">
                  Accept
                </button>
              </div>
            </div>
          </FocusLock>
        </Transition>
      </div>
    </Transition>
  )
  return isMounted() ? createPortal(modalComponent, document.body) : null
}

export default Modal
