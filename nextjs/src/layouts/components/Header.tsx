import {
  Dropdown,
  DropdownButton,
  DropdownItem,
  DropdownList,
  Input,
  InputAddon,
  InputGroup,
  useToggle,
} from '@retail-ui/core'
import { useThemeCtx } from '@retail-ui/core'
import { Transition } from '@tailwindui/react'
import { signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import CustomLink from '@/components/CustomLink'
import HamburgerIcon from '@/components/icons/HamburgerIcon'
import Logo from '@/components/icons/Logo'
import LogoutIcon from '@/components/icons/LogoutIcon'
import MoonIcon from '@/components/icons/MoonIcon'
import NotificationIcon from '@/components/icons/NotificationIcon'
import ProfileIcon from '@/components/icons/ProfileIcon'
import SearchIcon from '@/components/icons/SearchIcon'
import SettingsIcon from '@/components/icons/SettingsIcon'
import SunIcon from '@/components/icons/SunIcon'

const routes = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'Feeds',
    href: '/feeds',
  },
  {
    name: 'Account',
    href: '/account',
  },
  {
    name: 'Boards',
    href: '/boards',
  },
  {
    name: 'UI',
    href: '/ui',
  },
]

const SessionItem: React.FC = () => {
  const [session] = useSession()

  if (session) {
    return (
      <Dropdown>
        <DropdownButton
          className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
          aria-label="Account"
          aria-haspopup="true"
        >
          <img
            className="object-cover w-8 h-8 rounded-full"
            src={session?.user?.image}
            alt=""
            aria-hidden="true"
          />
        </DropdownButton>

        <DropdownList align="right">
          <DropdownItem>
            <ProfileIcon />
            <span>Profile</span>
          </DropdownItem>
          <DropdownItem>
            <SettingsIcon />
            <span>Settings</span>
          </DropdownItem>
          <DropdownItem onClick={() => signOut()}>
            <LogoutIcon />
            <span>Log out</span>
          </DropdownItem>
        </DropdownList>
      </Dropdown>
    )
  }

  return (
    <Link href={'/api/auth/signin'}>
      <a className={'p-1 font-medium'} href={'/api/auth/signin'}>
        Login
      </a>
    </Link>
  )
}

interface HeaderProps {
  onMenuClick?: () => void
}

const Header: React.FC<HeaderProps> = (props) => {
  const { onMenuClick } = props
  const router = useRouter()
  const { theme, toggleTheme } = useThemeCtx()
  const [isMenuOpen, { toggle: toggleMenu }] = useToggle(false)

  React.useEffect(() => {
    toggleMenu(false)
  }, [router.pathname])

  return (
    <header className="z-10 bg-white shadow-md h-14 dark:bg-gray-800">
      <div className="container flex justify-between px-3 py-2 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile hamburger  */}
        <div className={`flex items-center item`}>
          {onMenuClick && (
            <button
              onClick={() => {
                onMenuClick()
              }}
              className="mr-4 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
              aria-label="Menu"
            >
              <HamburgerIcon />
            </button>
          )}
          <Logo />

          <div className={`hidden lg:flex lg:items-center lg:ml-4`}>
            {(routes || []).map((item, index) => (
              <CustomLink href={`${item.href}`} key={`${item.href}-${index}`}>
                {({ isActive, href }) => (
                  <a
                    href={href}
                    className={`block relative px-4 py-1 text-gray-600 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-300 dark:hover:text-purple-400 rounded-md ${
                      isActive && `text-purple-600 dark:text-purple-400`
                    }`}
                  >
                    <span
                      className={`w-full text-sm font-semibold transition-colors duration-150`}
                    >
                      {item.name}
                    </span>
                  </a>
                )}
              </CustomLink>
            ))}
          </div>
        </div>

        {/* Right bar */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => toggleMenu()}
            className="ml-4 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
            aria-label="Menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={`w-6 h-6`}
            >
              <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>
          <div className={`hidden px-4 py-2 sm:block`}>
            <InputGroup>
              <InputAddon position="left">
                <SearchIcon />
              </InputAddon>
              <Input
                className="pl-10"
                placeholder="Search for projects"
                aria-label="Search"
                hasLeft
              />
            </InputGroup>
          </div>
          <button
            className="rounded-md focus:outline-none focus:shadow-outline-purple"
            onClick={toggleTheme}
            aria-label="Toggle color mode"
          >
            {theme === 'light' && <MoonIcon />}
            {theme === 'dark' && <SunIcon />}
          </button>
          {/* Notifications menu */}
          <Dropdown>
            <DropdownButton
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <NotificationIcon />
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </DropdownButton>
            <DropdownList align="right">
              <DropdownItem className="justify-between">
                <span>Messages</span>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                  13
                </span>
              </DropdownItem>
              <DropdownItem className="justify-between">
                <span>Sales</span>
                <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-600 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-600">
                  2
                </span>
              </DropdownItem>
              <DropdownItem className="justify-between">
                <span>Alerts</span>
              </DropdownItem>
            </DropdownList>
          </Dropdown>
          {/* Profile menu */}

          <SessionItem />
        </div>
      </div>
      {/* Menu link */}
      <Transition
        show={isMenuOpen}
        enter="transition duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100 translate-y-1/2"
        leave="transition duration-75"
        leaveFrom="opacity-100 "
        leaveTo="opacity-0"
        as="div"
        className={`container mx-auto`}
      >
        <div className={`lg:hidden lg:mr-32`}>
          <div className={`px-4 py-2 sm:hidden`}>
            <InputGroup>
              <InputAddon position="left">
                <SearchIcon />
              </InputAddon>
              <Input
                className="pl-10"
                placeholder="Search for projects"
                aria-label="Search"
                hasLeft
              />
            </InputGroup>
          </div>
          {(routes || []).map((item, index) => (
            <CustomLink href={`${item.href}`} key={`${item.href}-${index}`}>
              {({ isActive, href }) => (
                <a
                  href={href}
                  className={`block relative px-4 py-2 text-gray-600 dark:text-gray-300 hover:text-purple-600 hover:bg-purple-300 dark:hover:text-purple-400 ${
                    isActive && `text-purple-600 dark:text-purple-400`
                  }`}
                >
                  <span
                    className={`w-full text-sm font-semibold transition-colors duration-150`}
                  >
                    {item.name}
                  </span>
                </a>
              )}
            </CustomLink>
          ))}
        </div>
      </Transition>
    </header>
  )
}

export default Header
