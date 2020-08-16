import {
  Avatar,
  Blockquote,
  Box,
  Flex,
  Paragraph,
  Stack,
  Text,
  useColorMode,
} from 'bumbag';
import React, { FC } from 'react';

import timeFromNow from '../../../lib/time-from-now';
import { IFeed } from '../../../types/model';

interface FeedProps {
  feed: IFeed;
}

const Feed: FC<FeedProps> = ({ feed }) => {
  const { colorMode } = useColorMode();
  const bgColor = { default: 'white', dark: 'gray800' };
  const color = { default: 'gray800', dark: 'gray100' };
  const borderColor = { default: 'gray300', dark: 'gray700' };

  const authorNode = () => {
    return (
      <Flex alignY="center">
        <Box marginRight="minor-2">
          <Avatar alt={feed.user.name} src={feed.user.image} />
        </Box>
        <Box>
          <Box>
            <Text fontWeight="bold">{feed.user.name}</Text>
          </Box>
          <Box>
            <Text>{timeFromNow(feed.created_at)}</Text>
          </Box>
        </Box>
      </Flex>
    );
  };

  const bodyNode = () => {
    return (
      <Box>
        <Blockquote>
          <Paragraph>{feed.body}</Paragraph>
        </Blockquote>
      </Box>
    );
  };

  return (
    <Box
      background={bgColor[colorMode]}
      color={color[colorMode]}
      altitude="400"
      borderRadius="5"
      padding="major-2">
      <Stack spacing="major-2">
        {authorNode()}
        {bodyNode()}
      </Stack>
    </Box>
  );
};

export default Feed;
