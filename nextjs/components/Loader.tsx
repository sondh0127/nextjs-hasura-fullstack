import { Box, Spinner } from 'bumbag';
import React, { FC } from 'react';

interface Props {
  fontSize?: string;
}

const Loader: FC<Props> = ({ fontSize = '50px' }) => {
  return (
    <Box width="full" textAlign="center" maxWidth="200px">
      <Spinner hasTrack fontSize={fontSize} />
    </Box>
  );
};

export default Loader;
