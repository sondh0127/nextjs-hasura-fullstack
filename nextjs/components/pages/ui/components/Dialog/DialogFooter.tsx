import clsx from 'clsx'
import * as React from 'react'

import { ActionButtons, theme } from '..'
import { useDialogCtx } from './DialogContext'

interface DialogFooterProps {
  className?: string
}

export const DialogFooter: React.FC<DialogFooterProps> = (props) => {
  const { className } = props

  const { onClose, onSubmit } = useDialogCtx()

  const footerStyles = theme.Dialog.footer

  const cls = clsx(className, footerStyles)

  return (
    <div className={cls}>
      <ActionButtons
        cancelProps={{ className: `sm:w-auto` }}
        submitProps={{
          className: `sm:w-auto`,
        }}
        onClickCancel={onClose}
        onClickSubmit={onSubmit}
      />
    </div>
  )
}

export default DialogFooter
