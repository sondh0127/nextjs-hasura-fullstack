/*
  Example with @emotion/react

  Required packages for this component:
    "@emotion/react"
    "@emotion/babel-plugin"

  These packages can be removed if you plan on only using @emotion/react API:
    "@emotion/css"
    "@emotion/styled"
    "@emotion/server"
*/

/** @jsx jsx */
import { jsx } from '@emotion/react'
import tw from '@tailwindcssinjs/macro'

//"react native style"
const styles = {
  button: tw`
    relative
    w-64 min-w-0
    flex justify-center
    py-2 px-4
    border border-transparent
    text-sm leading-5 font-medium
    rounded-md
    text-white
    bg-purple-600
    hover:bg-purple-500
    focus[outline-none border-purple-700 shadow-outline-purple]
    active:bg-purple-700
    transition duration-150 ease-in-out
  `,
}

interface ButtonReactProps {
  className?: string
}

const ButtonReact: React.FC<ButtonReactProps> = ({
  className,
  children,
  ...props
}) => (
  <button
    {...props}
    css={styles.button}
    className={['group', className].join(' ')}
  >
    {/* inline style */}
    <span
      css={tw`absolute inset-y-0 left-0 flex items-center pl-3 text-white transition duration-150 ease-in-out group-hover:text-purple-800`}
    >
      <svg css={tw`w-5 h-5 `} fill="currentColor" viewBox="0 0 20 20">
        <path
          fillRule="evenodd"
          d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
          clipRule="evenodd"
        />
      </svg>
    </span>
    {children}
  </button>
)

export default ButtonReact
