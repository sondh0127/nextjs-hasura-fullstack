import { useSession } from 'next-auth/client'
import React, { useCallback, useContext, useState } from 'react'

import HamburgerIcon from '../../../components/icons/HamburgerIcon'
import LogoutIcon from '../../../components/icons/LogoutIcon'
import MoonIcon from '../../../components/icons/MoonIcon'
import NotificationIcon from '../../../components/icons/NotificationIcon'
import ProfileIcon from '../../../components/icons/ProfileIcon'
import SearchIcon from '../../../components/icons/SearchIcon'
import SettingsIcon from '../../../components/icons/SettingsIcon'
import SunIcon from '../../../components/icons/SunIcon'
import NextLink from '../../../components/NextLink'
import { Dropdown, DropdownItem } from '../../../components/ui'
import { ThemeContext } from '../../../contexts/themeContext'
import routes from '../../../utils/routes'

interface NavbarProps {
  onHamburgerClick: () => void
}

const Navbar: React.FC<NavbarProps> = ({ onHamburgerClick }) => {
  const [session] = useSession()
  const { theme, toggleTheme } = useContext(ThemeContext)

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuOpenP, setIsMenuOpenP] = useState(false)

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((open) => !open)
  }, [])

  const toggleMenuP = useCallback(() => {
    setIsMenuOpenP((open) => !open)
  }, [])

  return (
    <header className="z-10 py-4 bg-white shadow-md dark:bg-gray-800">
      <div className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600 dark:text-purple-300">
        {/* Mobile hamburger  */}
        <button
          onClick={onHamburgerClick}
          className="p-1 mr-5 -ml-1 rounded-md lg:hidden focus:outline-none focus:shadow-outline-purple"
          aria-label="Menu"
        >
          <HamburgerIcon />
        </button>
        {/* Search input */}
        <ul className="flex flex-1 lg:mr-32">
          {(routes || []).map((item, index) => (
            <NextLink
              key={`${item.href}-${index}`}
              href={`${item.href}`}
              inactiveClassName="text-gray-600 dark:text-gray-400"
              activeClassName="text-gray-800 dark:text-gray-100"
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            >
              {({ isActive, href, aClassName }) => (
                <li className="relative px-6 py-3">
                  <a className={aClassName} href={item.href}>
                    <span>{item.name}</span>
                  </a>
                </li>
              )}
            </NextLink>
          ))}
        </ul>
        {/* Right bar */}
        <ul className="flex items-center flex-shrink-0 space-x-6">
          {/* Theme toggler */}
          <li>
            <div className="input-icon-wrapper">
              <input
                type="text"
                className="pl-10 input-text input-active"
                placeholder="Search for projects"
                aria-label="Search"
              />
              <div className="text-purple-500 input-icon-left">
                <SearchIcon />
              </div>
            </div>
          </li>
          <li className="flex">
            <button
              className="rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={toggleTheme}
              aria-label="Toggle color mode"
            >
              {theme === 'light' && <MoonIcon />}
              {theme === 'dark' && <SunIcon />}
            </button>
          </li>
          {/* Notifications menu */}
          <li className="relative">
            <button
              className="relative align-middle rounded-md focus:outline-none focus:shadow-outline-purple"
              onClick={() => toggleMenu()}
              aria-label="Notifications"
              aria-haspopup="true"
            >
              <NotificationIcon />
              {/*  Notification badge  */}
              <span
                aria-hidden="true"
                className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full dark:border-gray-800"
              ></span>
            </button>
            <Dropdown onClose={() => setIsMenuOpen(false)} isOpen={isMenuOpen}>
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
            </Dropdown>
          </li>
          {/* Profile menu */}

          <li className="relative">
            <button
              className="align-middle rounded-full focus:shadow-outline-purple focus:outline-none"
              onClick={toggleMenuP}
              aria-label="Account"
              aria-haspopup="true"
            >
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={session.user.image}
                alt=""
                aria-hidden="true"
              />
            </button>
            <Dropdown
              onClose={() => setIsMenuOpenP(false)}
              isOpen={isMenuOpenP}
            >
              <DropdownItem>
                <ProfileIcon />
                <span>Profile</span>
              </DropdownItem>
              <DropdownItem>
                <SettingsIcon />
                <span>Settings</span>
              </DropdownItem>
              <DropdownItem>
                <LogoutIcon />
                <span>Log out</span>
              </DropdownItem>
            </Dropdown>
          </li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar
