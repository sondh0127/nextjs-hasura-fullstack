import { Button, Icon, Image, TopNav, useColorMode } from 'bumbag';
import { useSession } from 'next-auth/client';
import NextLink from 'next/link';
import React from 'react';

const Header: React.FC = () => {
  const [session] = useSession();

  const { colorMode, setColorMode } = useColorMode();

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'default' : 'dark');
  };

  const authButtonNode = () => {
    if (session) {
      return (
        <NextLink href="/api/auth/signout">
          <Button
            palette="primary"
            onClick={(e) => {
              // e.preventDefault();
              // signOut();
            }}>
            Logout
          </Button>
        </NextLink>
      );
    }

    return (
      <NextLink href="/api/auth/signin">
        <Button
          palette="primary"
          onClick={(e) => {
            // e.preventDefault();
            // signIn();
          }}>
          Login
        </Button>
      </NextLink>
    );
  };

  return (
    <TopNav>
      <TopNav.Section>
        <TopNav.Item href="https://github.com/sondh0127" fontWeight="semibold">
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
        <NextLink href="/boards">
          <TopNav.Item href="/boards" variant="pill">
            Boards
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
            <Icon icon={colorMode === 'dark' ? 'solid-sun' : 'solid-moon'} />
          </Button>
        </TopNav.Item>
        <TopNav.Item>{authButtonNode()}</TopNav.Item>
      </TopNav.Section>
    </TopNav>
  );
};

export default Header;
