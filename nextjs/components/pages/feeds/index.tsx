import { Box, Stack } from 'bumbag';
import gql from 'graphql-tag';
import React from 'react';

import { useFeedsSubscription } from '../../../generated/graphql';
import IFeed from '../../../types/feed';
import AddNewFeedForm from './add-new-feed-form';
import Feed from './feed';

gql`
  subscription feeds {
    feeds(order_by: { created_at: desc }) {
      id
      created_at
      body
      author {
        id
        name
        image
      }
    }
  }
`;

const FeedsPageComponent = () => {
  const [result] = useFeedsSubscription();

  if (!result.data) {
    return <p>No feeds!</p>;
  }

  return (
    <Stack spacing="major-2">
      <Box>
        <AddNewFeedForm />
      </Box>
      {result.data.feeds.map((feed: IFeed) => {
        return (
          <Box key={feed.id}>
            <Feed feed={feed} />
          </Box>
        );
      })}
    </Stack>
  );
};

export default FeedsPageComponent;
