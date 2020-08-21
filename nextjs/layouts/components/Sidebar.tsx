import React from 'react'

import DashboardIcon from '../../components/icons/DashboardIcon'
import NextLink from '../../components/NextLink'
import { Links } from '../../utils/uiLinks'

export interface SidebarProps {
  links: Links
}

const Sidebar: React.FC<SidebarProps> = ({ links }) => {
  return (
    <aside className="z-20 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          Windllo
        </a>
        <ul className="mt-6">
          {(links || []).map((item, index) => (
            <NextLink
              key={`${item.link}-${index}`}
              href={`/ui/[id]`}
              as={`/ui/${item.link}`}
              // inactiveClassName=""
              activeClassName="text-gray-800  dark:text-gray-100"
              className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
            >
              {({ isActive, href, aClassName }) => (
                <li className="relative px-6 py-3">
                  {isActive && (
                    <span
                      className="absolute inset-y-0 left-0 w-1 bg-purple-600 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  )}
                  <a className={aClassName} href={href}>
                    {item.icon}
                    <span className="ml-4">{item.name}</span>
                  </a>
                </li>
              )}
            </NextLink>
          ))}
        </ul>
        <div className="px-6 my-6">
          <button className="flex items-center justify-between w-full px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
            New board
            <span className="ml-2" aria-hidden="true">
              +
            </span>
          </button>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
