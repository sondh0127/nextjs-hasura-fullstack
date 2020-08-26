import clsx from 'clsx'
import * as React from 'react'

import { Button, ButtonProps, theme } from '..'

interface ActionButtonsProps extends ButtonProps {
  cancelText?: string
  submitText?: string
  onClickCancel?: () => void
  onClickSubmit?: () => void
  submitProps?: ButtonProps
  cancelProps?: ButtonProps
}

export const ActionButtons: React.FC<ActionButtonsProps> = (props) => {
  const {
    cancelText = 'Cancel',
    submitText = 'Submit',
    onClickCancel,
    onClickSubmit,
    submitProps,
    cancelProps,
    color = 'primary',
    isLoading,
    block,
    size = 'sm',
  } = props

  const actionButtonStyle = theme.ActionButtons

  const cls = clsx(actionButtonStyle.base, block && 'w-full')

  return (
    <div className={cls}>
      <Button
        color="secondary"
        onClick={onClickCancel}
        type="button"
        size={size}
        {...cancelProps}
      >
        {cancelText}
      </Button>
      <Button
        color={color}
        onClick={onClickSubmit}
        isLoading={isLoading}
        size={size}
        type="button"
        {...submitProps}
      >
        {submitText}
      </Button>
    </div>
  )
}

export default ActionButtons
