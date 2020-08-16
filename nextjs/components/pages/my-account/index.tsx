import {
  Alert,
  Box,
  Button,
  FieldWrapper,
  Grid,
  Heading,
  InputField,
  Stack,
  useColorMode,
} from 'bumbag';
import gql from 'graphql-tag';
import { useSession } from 'next-auth/client';
import React, { useEffect, useState } from 'react';

import {
  useFetchUserQuery,
  useUpdateUserMutation,
} from '../../../generated/graphql';
import Loader from '../../../layout/components/Footer';

gql`
  query fetchUser($userId: Int!) {
    users_by_pk(id: $userId) {
      id
      name
    }
  }
`;

gql`
  mutation updateUser($userId: Int!, $name: String) {
    update_users(where: { id: { _eq: $userId } }, _set: { name: $name }) {
      returning {
        id
        name
      }
    }
  }
`;

const MyAccountPageComponent = () => {
  const { colorMode } = useColorMode();
  const bgColor = { default: 'white', dark: 'gray800' };
  const color = { default: 'gray800', dark: 'gray100' };
  const [name, setName] = useState('');
  const [session] = useSession();

  const [
    { data: fetchUserData, fetching: fetchUserFetching, error: fetchUserError },
  ] = useFetchUserQuery({
    variables: { userId: session.id },
  });

  useEffect(() => {
    if (fetchUserData) {
      setName(fetchUserData.users_by_pk?.name || '');
    }
  }, [fetchUserData]);

  const [
    { fetching: updateUserFetching, error: updateUserError },
    updateUser,
  ] = useUpdateUserMutation();

  if (fetchUserFetching) {
    return <Loader />;
  }

  if (fetchUserError) {
    return <p>Error: {fetchUserError.message}</p>;
  }

  const handleSubmit = () => {
    updateUser({
      userId: session.id,
      name,
    });
  };

  const errorNode = () => {
    if (!updateUserError) {
      return false;
    }

    return (
      <Alert
        title="Error: "
        type="danger"
        showCloseButton
        isInline
        onClickClose={() => alert('Closed!')}>
        {updateUserError}
      </Alert>
    );
  };

  return (
    <Stack spacing="major-2">
      <Heading color={color[colorMode]}>My Account</Heading>
      {errorNode()}
      <Grid
        // templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']}
        gap={4}>
        <Box
          padding="major-2"
          background={bgColor[colorMode]}
          color={color[colorMode]}
          altitude="400"
          borderRadius="5">
          <Stack spacing="major-2">
            <InputField
              label="Name"
              id="name"
              value={name}
              onChange={(e) => setName(e.currentTarget.value)}
              disabled={updateUserFetching}
            />

            <FieldWrapper>
              <Button
                // loadingText="Saving..."
                onClick={handleSubmit}
                isLoading={updateUserFetching}>
                Save
              </Button>
            </FieldWrapper>
          </Stack>
        </Box>
      </Grid>
    </Stack>
  );
};

export default MyAccountPageComponent;
