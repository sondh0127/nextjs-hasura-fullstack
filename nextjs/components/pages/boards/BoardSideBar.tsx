import { SideNav } from 'bumbag';
import gql from 'graphql-tag';
import React from 'react';

// gql``;

const BoardSideBar: React.FC = () => {
  return (
    <SideNav defaultSelectedId="list">
      <SideNav.Level title="Boards">
        <SideNav.Item href="#" navId="button">
          Button
        </SideNav.Item>
      </SideNav.Level>
    </SideNav>
  );
};

export default BoardSideBar;
