import React from 'react'
import FocusLock from 'react-focus-lock'

import { Transition } from '../'
import { useClickAwayOrEsc } from '../'

interface DropdownProps {
  onClose: () => void
  isOpen: boolean
}

const Dropdown: React.FC<DropdownProps> = ({ onClose, isOpen, children }) => {
  const ref = useClickAwayOrEsc(onClose)

  if (!isOpen) {
    return null
  }

  return (
    <Transition
      show={isOpen}
      leave="transition ease-in duration-150"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <FocusLock returnFocus>
        <ul
          ref={ref}
          className="absolute right-0 w-56 p-2 mt-2 space-y-2 text-gray-600 bg-white border border-gray-100 rounded-md shadow-md dark:text-gray-300 dark:border-gray-700 dark:bg-gray-700"
        >
          {children}
        </ul>
      </FocusLock>
    </Transition>
  )
}

export default Dropdown
