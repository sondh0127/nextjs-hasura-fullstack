import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Input,
} from '@retail-ui/core'
import { useSession } from 'next-auth/client'
import React, { useState } from 'react'

import AccessDeniedIndicator from '@/components/AccessDeniedIndicator'
import { useInsertFeedMutation } from '@/generated/graphql'

const AddNewFeedForm = () => {
  const [body, setBody] = useState('')
  const [session] = useSession()
  const [errorMessage, setErrorMessage] = React.useState('')

  const [insertFeed, { loading, error }] = useInsertFeedMutation()

  React.useEffect(() => {
    setErrorMessage(error?.message || '')
  }, [error])

  React.useEffect(() => {
    setErrorMessage('')
  }, [body])

  if (!session) {
    return (
      <AccessDeniedIndicator message="You need to be signed in to add a new feed!" />
    )
  }

  const handleSubmit = async () => {
    try {
      await insertFeed({ variables: { body } })
      setBody('')
    } catch (error) {
      console.log('Error: ', Object.entries(error))
    }
  }

  const errorNode = () => {
    if (!errorMessage) {
      return null
    }
    return (
      <Alert
        color="danger"
        size="sm"
        content={errorMessage}
        hasClose
        onClose={() => setErrorMessage('')}
      ></Alert>
    )
  }

  return (
    <Card>
      <CardHeader title="New post"></CardHeader>
      <CardBody>
        {errorNode()}
        <Input
          placeholder="What's on your mind ?"
          id="body"
          value={body}
          onChange={(e) => setBody(e.currentTarget.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
        />
      </CardBody>
      <CardFooter>
        <div>
          <Button
            onClick={handleSubmit}
            isLoading={loading}
            isDisabled={!body.trim()}
          >
            Post
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}

export default AddNewFeedForm
