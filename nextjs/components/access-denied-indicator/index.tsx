import { Box, Button, Flex, Icon, Stack } from 'bumbag';
import { signIn } from 'next-auth/client';
import Link from 'next/link';
import React, { FC } from 'react';

interface IProps {
  message?: string;
}

const AccessDeniedIndicator: FC<IProps> = ({
  message = 'You need to Sign In to view this content!',
}) => {
  const iconNode = () => {
    return (
      <Icon
        aria-label="ExclamationCircle"
        icon="solid-exclamation-circle"
        fontSize="500"
        color="danger"
        marginLeft="major-1"
      />
    );
  };

  const signInButtonNode = () => {
    return (
      <Link href="/api/auth/signin">
        <Button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}>
          {message}
        </Button>
      </Link>
    );
  };

  return (
    <Flex height="400px" alignY="center" alignX="center">
      <Stack spacing="major-2" alignX="center" alignY="center">
        <Box>{iconNode()}</Box>
        <Box>{signInButtonNode()}</Box>
      </Stack>
    </Flex>
  );
};

export default AccessDeniedIndicator;
