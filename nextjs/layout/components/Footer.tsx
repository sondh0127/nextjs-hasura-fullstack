import { Box, Link, Text } from 'bumbag';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <Box textAlign="center" height="60px" alignY="center">
      <Text fontWeight="500" fontSize="200">
        Copyright © 2020
        <Link marginLeft="minor-1" href="https://github.com/sondh0127">
          @sondh0127
        </Link>
      </Text>
    </Box>
  );
};

export default Footer;
