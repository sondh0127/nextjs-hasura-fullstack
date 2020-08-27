import clsx from 'clsx'
import * as React from 'react'

import { theme } from '../themes'

interface DialogBodyProps {
  className?: string
}

export const DialogBody: React.FC<DialogBodyProps> = (props) => {
  const { children, className } = props

  const headerStyles = theme.Dialog.body

  const cls = clsx(className, headerStyles)

  return <p className={cls}>{children}</p>
}

export default DialogBody
