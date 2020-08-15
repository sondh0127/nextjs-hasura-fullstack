import {
  Button,
  Container,
  Icon,
  Image,
  Link,
  PageContent,
  PageWithHeader,
  PageWithSidebar,
  SideNav,
  TopNav,
  useColorMode,
} from 'bumbag';
import { signIn, signOut, useSession } from 'next-auth/client';
import NextLink from 'next/link';
import React, { FC } from 'react';

import Footer from '../components/Footer';
import BoardSideBar from '../components/pages/boards/BoardSideBar';

interface BoardLayoutProps {
  footer?: () => React.ReactNode;
}

const BoardLayout: FC<BoardLayoutProps> = ({ children, footer }) => {
  const [session] = useSession();

  const { colorMode, setColorMode } = useColorMode();
  const bgColor = { default: 'white600', dark: 'black200' };

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'default' : 'dark');
  };

  const authButtonNode = () => {
    if (session) {
      return (
        <Link href="/api/auth/signout">
          <Button
            palette="primary"
            onClick={(e) => {
              // e.preventDefault();
              // signOut();
            }}>
            Logout
          </Button>
        </Link>
      );
    }

    return (
      <Link href="/api/auth/signin">
        <Button
          palette="primary"
          onClick={(e) => {
            // e.preventDefault();
            // signIn();
          }}>
          Login
        </Button>
      </Link>
    );
  };
  const heightOfNavbar = '60px';

  return (
    <PageWithHeader
      sticky
      header={
        <TopNav>
          <TopNav.Section>
            <TopNav.Item
              href="https://github.com/sondh0127"
              fontWeight="semibold">
              <Image
                src="https://cdn.worldvectorlogo.com/logos/react.svg"
                height="44px"
              />
            </TopNav.Item>
            <NextLink href="/">
              <TopNav.Item href="/" variant="pill">
                Home
              </TopNav.Item>
            </NextLink>
            <NextLink href="/board">
              <TopNav.Item href="/board" variant="pill">
                Board
              </TopNav.Item>
            </NextLink>
            <NextLink href="/feeds">
              <TopNav.Item href="/feeds" variant="pill">
                Feeds
              </TopNav.Item>
            </NextLink>
            <NextLink href="/my-account">
              <TopNav.Item href="/my-account" variant="pill">
                Account
              </TopNav.Item>
            </NextLink>
          </TopNav.Section>
          <TopNav.Section marginRight="major-2">
            <TopNav.Item>
              <Button palette="default" onClick={() => toggleColorMode()}>
                <Icon
                  icon={colorMode === 'dark' ? 'solid-sun' : 'solid-moon'}
                />
              </Button>
            </TopNav.Item>
            <TopNav.Item>{authButtonNode()}</TopNav.Item>
          </TopNav.Section>
        </TopNav>
      }
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
