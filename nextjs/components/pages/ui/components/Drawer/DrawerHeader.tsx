import clsx from 'clsx'
import * as React from 'react'

import { ButtonIcon } from '../Button'
import { XSolid } from '../heroicons'
import { theme } from '../themes'
import { useDrawerCtx } from './DrawerContext'

interface DrawerHeaderProps {
  className?: string
}
export const DrawerHeader: React.FC<DrawerHeaderProps> = (props) => {
  const { children, className } = props
  const { onClose } = useDrawerCtx()

  const headerStyles = theme.Drawer.header

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

export default DrawerHeader
