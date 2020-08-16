import {
  Button,
  Flex,
  Heading,
  Paragraph,
  Stack,
  Text,
  useColorMode,
} from 'bumbag';
import { GetServerSideProps, NextPage } from 'next';
import { getSession, signIn, signOut } from 'next-auth/client';
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
              <Heading textAlign="center">Nextjs Hasura Fullstack</Heading>
              <Text fontSize="300" lineHeight="tall" textAlign="center">
                A boilerplate that uses Hasura and Next.js to develop
                applications
              </Text>
              <Paragraph fontSize="300">
                This demo has been built using BumbagUI, NextAuth.js and urql.
              </Paragraph>
              <Book />
              <Flex alignX="center">{authButtonNode()}</Flex>
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
