import { Badge, Button, Clickable, Flex, Icon, Input, Text } from 'bumbag';
import gql from 'graphql-tag';
import React, { useEffect, useRef, useState } from 'react';
import { useClickAway } from 'react-use';

interface ListHeaderProps {
  name: string;
  length?: number;
  onSubmit: (name: string) => void;
  onCancel: () => void;
}

const ListHeader: React.FC<ListHeaderProps> = ({
  name,
  length = 0,
  onSubmit,
  onCancel,
}) => {
  const [isEditting, setIsEditting] = useState(!name);
  const [value, setValue] = useState(name);

  const ref = useRef(null);

  useClickAway(ref, () => {
    if (isEditting) {
      if (!name) {
        if (value) {
          onSubmit(value);
          setValue('');
        } else {
          onCancel();
          setValue('');
        }
      } else {
        // Old list
        if (value && value !== name) {
          // onChange name
          onSubmit(value);
        } else {
          onCancel();
          setValue(name);
        }
      }
      setIsEditting(false);
    }
  });

  return (
    <Flex justifyContent="space-between">
      <Flex>
        <Flex
          ref={ref}
          height="40px"
          maxWidth="200px"
          alignItems="center"
          onClick={() => {
            console.log(`🇻🇳 [LOG]: onClick`);
            setIsEditting(true);
          }}>
          {isEditting && (
            <Input
              // eslint-disable-next-line jsx-a11y/no-autofocus
              autoFocus={true}
              size="small"
              inputProps={{ height: `100%` }}
              value={value}
              onChange={(e) => {
                setValue(e.currentTarget.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onSubmit(value);
                  setIsEditting(false);
                }
              }}
            />
          )}
          {!isEditting && (
            <Text
              color="text"
              textTransform="uppercase"
              fontSize="150"
              marginRight="major-1">
              {value}
            </Text>
          )}
        </Flex>

        {!!length && (
          <Button variant="ghost" size="small" padding="major-1">
            <Badge>{length}</Badge>
          </Button>
        )}
      </Flex>
      <Button variant="ghost" size="small">
        <Icon color="text" icon="solid-ellipsis-v" />
      </Button>
    </Flex>
  );
};

export default ListHeader;
