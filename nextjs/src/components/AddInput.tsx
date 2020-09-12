import { Button, ButtonIcon, Input } from '@retail-ui/core'
import clsx from 'clsx'
import * as React from 'react'
import { useClickAway, useKey } from 'react-use'

interface AddInputProps {
  isCreating: boolean
  setIsCreating: (isCreating: boolean) => void
  loading: boolean
  onSubmit: (value: string) => void
  className?: string
  label: string
  placeholder?: string
  onClickAway: (value: string) => void
}

export const AddInput: React.FC<AddInputProps> = (props) => {
  const {
    onSubmit,
    isCreating,
    setIsCreating,
    loading,
    className,
    label,
    placeholder,
    onClickAway,
  } = props

  const [value, setValue] = React.useState('')

  const reset = React.useCallback(() => {
    setIsCreating(false)
    setValue('')
  }, [])

  const handleClickAway = React.useCallback(() => {
    onClickAway(value)
    reset()
  }, [onClickAway, reset, value])

  const ref = React.useRef<HTMLInputElement>(null)

  useClickAway(ref, () => handleClickAway())
  useKey('Escape', () => handleClickAway())

  const handleSubmit = React.useCallback(() => {
    onSubmit(value)
    reset()
  }, [onSubmit, reset, value])

  const cls = clsx(className, `flex w-full h-10`)

  return (
    <div className={cls}>
      {!isCreating && (
        <Button
          isLoading={loading}
          isBlock
          className={``}
          onClick={() => {
            setIsCreating(true)
          }}
          variant="light"
          iconLeft={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          }
        >
          {label}
        </Button>
      )}
      {isCreating && (
        <div className={`flex items-center justify-between`} ref={ref}>
          <Input
            // eslint-disable-next-line jsx-a11y/no-autofocus
            autoFocus={true}
            placeholder={placeholder ?? `New ${label}`}
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
            className={``}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                handleSubmit()
              }
            }}
          />
          <ButtonIcon
            className={`flex-grow ml-2`}
            size="base"
            onClick={(e) => {
              e.preventDefault()
              handleSubmit()
            }}
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            }
          />
        </div>
      )}
    </div>
  )
}

export default AddInput
