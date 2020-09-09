import {
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

  const [
    updateUser,
    { loading: updateUserLoading, error: updateUserError },
  ] = useUpdateUserMutation()

  if (fetchUserLoading) {
    return <Loader />
  }

  if (fetchUserError) {
    return <p>Error: {fetchUserError.message}</p>
  }

  const handleSubmit = () => {
    updateUser({
      // @ts-ignore
      userId: session.id,
      name,
    })
  }

  const errorNode = () => {
    if (!updateUserError) {
      return false
    }

    return (
      <div
        title="Error: "
        // type="danger"
        // showCloseButton
        // isInline
        // onClickClose={() => alert('Closed!')}
      >
        {updateUserError}
      </div>
    )
  }

  return (
    <div className={`pt-6`}>
      <h1 className={`text-3xl font-bold text-gray-100`}>My Account</h1>

      <Card className={`mt-4`}>
        <CardBody>
          {errorNode()}
          <div className={`flex justify-between items-center`}>
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
