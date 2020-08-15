import gql from 'graphql-tag';
import React from 'react';

import { useInsertBoardMutation } from '../../../generated/graphql';

gql`
  mutation insertBoard($name: String) {
    insert_boards_one(object: { name: $name }) {
      name
      id
      created_at
      updated_at
    }
  }
`;

const Index: React.FC = () => {
  const [{ fetching, error }, insertBoard] = useInsertBoardMutation();
  return <div>Index</div>;
};

export default Index;
