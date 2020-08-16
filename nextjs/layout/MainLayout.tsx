import { PageContent, PageWithHeader, useColorMode } from 'bumbag';
import React, { FC } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';

interface MainLayoutProps {
  footer?: () => React.ReactNode;
}

const MainLayout: FC<MainLayoutProps> = ({ children, footer }) => {
  const { colorMode } = useColorMode();
  const bgColor = { default: 'white600', dark: 'black200' };

  const heightOfNavbar = '60px';

  return (
    <PageWithHeader
      sticky
      header={<Header />}
      overrides={{
        PageWithHeader: { styles: { base: { minHeight: 'unset' } } },
      }}>
      <PageContent
        breakpoint="fullHD"
        wrapperProps={{
          minHeight: `calc(100vh - ${heightOfNavbar})`,
          backgroundColor: bgColor[colorMode],
        }}>
        {children}
        {footer ? footer() : <Footer />}
      </PageContent>
    </PageWithHeader>
  );
};

export default MainLayout;
