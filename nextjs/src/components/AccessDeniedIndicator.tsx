import { Button, ExclamationCircleSolid } from '@retail-ui/core'
import { signIn } from 'next-auth/client'
import Link from 'next/link'
import React from 'react'

interface AccessDeniedIndicatorProps {
  message?: string
}

const AccessDeniedIndicator: React.FC<AccessDeniedIndicatorProps> = ({
  message = 'You need to Sign In to view this content!',
}) => {
  const iconNode = () => {
    return <ExclamationCircleSolid className={`!w-16 !h-16`} color="danger" />
  }

  const signInButtonNode = () => {
    return (
      <Link href="/api/auth/signin">
        <Button
          variant="light"
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          {message}
        </Button>
      </Link>
    )
  }

  return (
    <div className={`flex items-center justify-center h-96`}>
      <div
        className={`flex flex-col items-center justify-center p-6 space-y-4 bg-gray-200 rounded-md`}
      >
        <div>{iconNode()}</div>
        <div className={`text-lg italic text-gray-800`}>
          {signInButtonNode()}
        </div>
      </div>
    </div>
  )
}

export default AccessDeniedIndicator
