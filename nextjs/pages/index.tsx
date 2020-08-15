import { Box, Button, Flex, Heading, Stack, Text, useColorMode } from 'bumbag';
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import { signIn, signOut, useSession } from 'next-auth/client';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

import Book from '../components/pages/index/Book';
import {
  CONTAINER_PADDING,
  HEIGHT_OF_FOOTER,
  HEIGHT_OF_NAVBAR,
} from '../constants/layout';
import MainLayout from '../layout/MainLayout';
import ISession from '../types/session';

interface IndexPageProps {
  session: ISession;
}

const IndexPage: NextPage<IndexPageProps> = ({ session }) => {
  const { colorMode } = useColorMode();

  const authButtonNode = () => {
    if (session) {
      return (
        <Link href="/api/auth/signout">
          <Button
            onClick={(e) => {
              e.preventDefault();
              signOut();
            }}>
            Sign Out
          </Button>
        </Link>
      );
    }

    return (
      <Link href="/api/auth/signin">
        <Button
          onClick={(e) => {
            e.preventDefault();
            signIn();
          }}>
          Create an account
        </Button>
      </Link>
    );
  };

  return (
    <>
      <MainLayout>
        <Head>
          <title>Index Page</title>
        </Head>

        <Stack>
          <Flex
            minHeight={`calc(100vh - ${HEIGHT_OF_NAVBAR}  - ${HEIGHT_OF_FOOTER} - ${CONTAINER_PADDING}*2)`}
            justifyContent="center"
            alignItems="center">
            <Stack spacing="major-2" marginX="auto" alignX="center">
              <Heading textAlign="center">Nextjs Hasura Boilerplate</Heading>
              <Text fontSize="xl" lineHeight="tall" textAlign="center">
                Boilerplate for building applications using Hasura and Next.js.
                This demo application has been built using Bumbag, NextAuth.js
                and urql.
              </Text>
              <Flex alignX="center">{authButtonNode()}</Flex>
              <Book />
            </Stack>
          </Flex>
        </Stack>
      </MainLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<IndexPageProps> = async ({
  req,
}) => {
  const session = await getSession({ req });

  return {
    props: {
      session,
    },
  };
};

export default IndexPage;
