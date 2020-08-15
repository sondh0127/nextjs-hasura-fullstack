import fetch from 'isomorphic-unfetch';
import ws from 'isomorphic-ws';
import React, { ReactNode } from 'react';
import { SubscriptionClient } from 'subscriptions-transport-ws';
import { Client, defaultExchanges, Provider, subscriptionExchange } from 'urql';

const WithGraphQL = ({
  children,
  token,
}: {
  children: ReactNode;
  token: string;
}) => {
  const subscriptionClient = new SubscriptionClient(
    process.env.NEXT_PUBLIC_WS_URL || 'ws://localhost:8080/v1/graphql',
    {
      reconnect: true,
      connectionParams: {
        headers: { Authorization: `Bearer ${token}` },
      },
    },
    ws
  );

  const client = new Client({
    url: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/v1/graphql',
    fetch,
    fetchOptions: {
      headers: { Authorization: `Bearer ${token}` },
    },
    requestPolicy: 'cache-and-network',
    exchanges: [
      ...defaultExchanges,
      subscriptionExchange({
        forwardSubscription(operation) {
          return subscriptionClient.request(operation);
        },
      }),
    ],
  });

  return <Provider value={client}>{children}</Provider>;
};

export default WithGraphQL;
