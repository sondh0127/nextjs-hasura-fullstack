import { css } from '@emotion/css'
import tw from '@tailwindcssinjs/macro'
import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Modal as ModalComp } from '../../ui'
import ButtonCss from './components/ButtonCss'
import ButtonReact from './components/ButtonReact'
import ButtonStyled from './components/ButtonStyled'

const Modal: React.FC = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    // <div className="container grid px-6 mx-auto">
    <div className="container grid px-6 mx-auto">
      <h1 className="page-title">Modal</h1>
      <div>
        <button
          className="btn btn-base btn-primary"
          onClick={() => setIsOpen(true)}
        >
          Open modal
        </button>

        <ModalComp
          isOpen={isOpen}
          onClose={() => {
            setIsOpen(false)
          }}
        />
      </div>
    </div>
  )
}

export default Modal
