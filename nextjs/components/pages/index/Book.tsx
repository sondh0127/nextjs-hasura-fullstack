import {
  Group,
  Heading,
  Icon,
  Image,
  Level,
  Paragraph,
  Stack,
  Tag,
  Text,
} from 'bumbag';
import React from 'react';

const Book: React.FC = () => {
  return (
    <Group borderRadius="4" altitude="300">
      <Image
        src="https://d2xf5gjipzd8cd.cloudfront.net/available/431227550/431227550_600x504.jpg"
        width="300px"
      />
      <Level padding="major-2" orientation="vertical">
        <Stack spacing="major-1">
          <Heading fontSize="400" marginBottom="minor-1">
            The Local Hostel
          </Heading>
          <Tag palette="info" variant="tint">
            Great for solo travellers
          </Tag>
          <Paragraph color="text100" fontSize="100">
            <Icon icon="solid-map-marked-alt" marginRight="minor-1" />
            6km from city center
          </Paragraph>
        </Stack>
        <Paragraph fontSize="300">
          from <Text fontWeight="bold">$35</Text> a night
        </Paragraph>
      </Level>
    </Group>
  );
};

export default Book;
