import {
  Alert,
  Box,
  Button,
  FieldWrapper,
  Stack,
  TextareaField,
  useColorMode,
} from 'bumbag';
import gql from 'graphql-tag';
import { useSession } from 'next-auth/client';
import React, { useState } from 'react';

import { useInsertFeedMutation } from '../../../generated/graphql';
import AccessDeniedIndicator from '../../access-denied-indicator';

gql`
  mutation insertFeed($body: String) {
    insert_feeds_one(object: { body: $body }) {
      id
    }
  }
`;

const AddNewFeedForm = () => {
  const { colorMode } = useColorMode();
  const bgColor = { default: 'white', dark: 'gray800' };
  const color = { default: 'gray800', dark: 'gray100' };
  const [body, setBody] = useState('');
  const [session] = useSession();

  const [{ fetching, error }, insertFeed] = useInsertFeedMutation();

  if (!session) {
    return (
      <AccessDeniedIndicator message="You need to be signed in to add a new feed!" />
    );
  }

  const handleSubmit = async () => {
    try {
      await insertFeed({ body });
      setBody('');
    } catch (err) {
      console.log(`handleSubmit -> err`, err);
    }
  };

  const errorNode = () => {
    if (!error) {
      return null;
    }

    return (
      <Alert
        title="Error"
        showCloseButton
        isInline
        onClickClose={() => alert('Closed!')}
        type="danger">
        {error.message}
      </Alert>
    );
  };

  return (
    <Stack spacing="major-2">
      {errorNode()}
      <Box
        padding="major-2"
        background={bgColor[colorMode]}
        color={color[colorMode]}
        altitude="300"
        borderRadius="5">
        <Stack spacing="major-1">
          <TextareaField
            label="What's on your mind ?"
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <FieldWrapper>
            <Button
              onClick={handleSubmit}
              isLoading={fetching}
              disabled={!body.trim()}>
              Post
            </Button>
          </FieldWrapper>
        </Stack>
      </Box>
    </Stack>
  );
};

export default AddNewFeedForm;
