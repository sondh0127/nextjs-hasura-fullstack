import { GetServerSideProps, NextPage } from 'next';
import { getSession } from 'next-auth/client';
import Head from 'next/head';
import React from 'react';

import AccessDeniedIndicator from '../components/access-denied-indicator';
import Page from '../components/pages/feeds';
import MainLayout from '../layout/MainLayout';

interface FeedsProps {
  session: string;
}

const FeedsPage: NextPage<FeedsProps> = ({ session }) => {
  if (!session) {
    return (
      <MainLayout>
        <AccessDeniedIndicator />
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <Head>
        <title>My Account Page</title>
      </Head>
      <Page />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps<FeedsProps> = async (
  ctx
) => {
  const session = await getSession({ req: ctx.req });

  return {
    props: {
      session,
    },
  };
};

export default FeedsPage;
