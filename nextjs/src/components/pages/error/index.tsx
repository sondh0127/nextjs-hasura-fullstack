import Link from 'next/link'
import React from 'react'

interface IndexProps {
  statusCode: number
}

const IndexPageComponent: React.FC<IndexProps> = ({ statusCode }) => {
  const signOutButtonNode = () => {
    return (
      <div>
        <Link href="/">
          <button>Return to the home page</button>
        </Link>
      </div>
    )
  }

  return (
    <div>
      <div className={`flex items-center justify-center`}>
        <div className={`space-y-2 max-w-xl mx-auto justify-center`}>
          <h1 className={`text-center`}>Nextjs Hasura Boilerplate</h1>
          <p>
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </p>
          <div>
            <div className={`flex items-center justify-center`}>
              {signOutButtonNode()}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPageComponent
