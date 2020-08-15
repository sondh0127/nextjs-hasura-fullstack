import { Box, Button, Flex, Heading, Stack, Text } from 'bumbag';
import Link from 'next/link';
import React, { FC } from 'react';

import { CONTAINER_PADDING, HEIGHT_OF_NAVBAR } from '../../../constants/layout';

interface IProps {
  statusCode: number;
}

const IndexPageComponent: FC<IProps> = ({ statusCode }) => {
  const signOutButtonNode = () => {
    return (
      <Box>
        <Link href="/">
          <Button>Return to the home page</Button>
        </Link>
      </Box>
    );
  };

  return (
    <Stack>
      <Flex
        minHeight={`calc(100vh - ${HEIGHT_OF_NAVBAR} - ${CONTAINER_PADDING}*2)`}
        justifyContent="center"
        alignItems="center">
        <Stack spacing="major-2" maxWidth="xl" marginX="auto" alignX="center">
          <Heading textAlign="center">Nextjs Hasura Boilerplate</Heading>
          <Text fontSize="xl" lineHeight="tall" textAlign="center">
            {statusCode
              ? `An error ${statusCode} occurred on server`
              : 'An error occurred on client'}
          </Text>
          <Box>
            <Stack orientation="horizontal" alignX="center" alignY="center">
              {signOutButtonNode()}
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default IndexPageComponent;
