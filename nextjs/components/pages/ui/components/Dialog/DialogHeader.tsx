import clsx from 'clsx'
import * as React from 'react'

import { ButtonIcon } from '../Button'
import { XSolid } from '../heroicons'
import { theme } from '../themes'
import { useDialogCtx } from './DialogContext'

interface DialogHeaderProps {
  className?: string
}

export const DialogHeader: React.FC<DialogHeaderProps> = (props) => {
  const { children, className } = props
  const { onClose } = useDialogCtx()

  const headerStyles = theme.Dialog.header

  const cls = clsx(className, headerStyles)

  return (
    <div className={cls}>
      {children}
      <ButtonIcon
        icon={XSolid}
        variant="light"
        onClick={onClose}
        color="secondary"
      />
    </div>
  )
}

export default DialogHeader
