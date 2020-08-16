import {
  Button,
  Icon,
  Image,
  Link,
  PageContent,
  PageWithHeader,
  PageWithSidebar,
  TopNav,
  useColorMode,
} from 'bumbag';
import NextLink from 'next/link';
import React, { FC } from 'react';

import BoardSideBar from '../components/pages/boards/BoardSideBar';
import Footer from './components/Footer';
import Header from './components/Header';

interface BoardLayoutProps {
  footer?: () => React.ReactNode;
}

const BoardLayout: FC<BoardLayoutProps> = ({ children, footer }) => {
  const { colorMode, setColorMode } = useColorMode();
  const bgColor = { default: 'white600', dark: 'black200' };

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'default' : 'dark');
  };

  const heightOfNavbar = '60px';

  return (
    <PageWithHeader
      sticky
      header={<Header />}
      overrides={{
        PageWithHeader: { styles: { base: { minHeight: 'unset' } } },
      }}>
      <PageWithSidebar sidebar={<BoardSideBar />} sidebarPlacement="left">
        <PageContent
          breakpoint="fullHD"
          wrapperProps={{
            minHeight: `calc(100vh - ${heightOfNavbar})`,
            backgroundColor: bgColor[colorMode],
          }}>
          {children}
          {footer ? footer() : <Footer />}
        </PageContent>
      </PageWithSidebar>
    </PageWithHeader>
  );
};

export default BoardLayout;
