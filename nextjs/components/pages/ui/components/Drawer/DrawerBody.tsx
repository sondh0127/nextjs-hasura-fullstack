import clsx from 'clsx'
import * as React from 'react'

import { theme } from '../themes'

interface DrawerBodyProps {
  className?: string
}

export const DrawerBody: React.FC<DrawerBodyProps> = (props) => {
  const { children, className } = props

  const headerStyles = theme.Dialog.body

  const cls = clsx(className, headerStyles)

  return <p className={cls}>{children}</p>
}

export default DrawerBody
