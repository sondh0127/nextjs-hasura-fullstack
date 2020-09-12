import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  InputGroup,
} from '@retail-ui/core'
import { useSession } from 'next-auth/client'
import React, { useEffect, useState } from 'react'

import { useUpdateUserMutation, useUserQuery } from '@/generated/graphql'

import Loader from '../../../layouts/components/Footer'

const Account = () => {
  const [name, setName] = useState('')
  const [session] = useSession()

  /* Fetching */
  const {
    data: fetchUserData,
    loading: fetchUserLoading,
    error: fetchUserError,
  } = useUserQuery({
    // @ts-ignore
    variables: { userId: session.id },
  })

  useEffect(() => {
    if (fetchUserData) {
      setName(fetchUserData.users_by_pk?.name || '')
    }
  }, [fetchUserData])

  /* Update */

  const [errorMessage, setErrorMessage] = React.useState('')
  const [updateUser, { loading: updateUserLoading }] = useUpdateUserMutation({
    onError: (error) => setErrorMessage(error.message),
  })

  const handleSubmit = async () => {
    await updateUser({
      variables: {
        // @ts-ignore
        userId: Number(session.id),
        name,
      },
    })
  }

  const errorNode = () => {
    if (!errorMessage) {
      return false
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

  /* Render */
  if (fetchUserLoading) {
    return <Loader />
  }

  if (fetchUserError) {
    return <p>Error: {fetchUserError.message}</p>
  }

  return (
    <div className={`pt-6`}>
      <h1 className={`text-3xl font-bold text-gray-100`}>My Account</h1>

      <Card className={`mt-4`}>
        <CardBody>
          {errorNode()}
          <div className={`flex items-center justify-between`}>
            <InputGroup>
              <Input
                placeholder="Name"
                id="name"
                value={name}
                onChange={(e) => setName(e.currentTarget.value)}
                disabled={updateUserLoading}
              />
            </InputGroup>

            <div>
              <Button onClick={handleSubmit} isLoading={updateUserLoading}>
                Save
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  )
}

export default Account
