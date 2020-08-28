import clsx from 'clsx'
import * as React from 'react'

import { ActionButtons, theme } from '..'
import { useDrawerCtx } from './DrawerContext'

interface DrawerFooterProps {
  className?: string
}

export const DrawerFooter: React.FC<DrawerFooterProps> = (props) => {
  const { className } = props

  const { onClose, onSubmit } = useDrawerCtx()

  const footerStyles = theme.Drawer.footer

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

export default DrawerFooter
