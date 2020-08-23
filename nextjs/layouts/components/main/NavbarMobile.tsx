import React, { Fragment } from 'react'

import NextLink from '../../components/NextLink'
import { Transition } from '../../components/ui'
import { useClickAwayOrEsc } from '../../hooks/useClickAwayOrEsc'
import { Links } from '../../utils/uiLinks'

interface SidebarMobileProps {
  isSideMenuOpen: boolean
  onClose: () => void
  links: Links
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({
  isSideMenuOpen,
  onClose,
  links,
}) => {
  const ref = useClickAwayOrEsc(onClose)

  return (
    <Fragment>
      <Transition
        show={isSideMenuOpen}
        enter="transition ease-in-out duration-150"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {/* <!-- Backdrop --> */}
        <div className="fixed inset-0 z-10 flex items-end bg-black bg-opacity-50 sm:items-center sm:justify-center"></div>
      </Transition>

      <Transition
        show={isSideMenuOpen}
        enter="transition ease-in-out duration-150"
        enterFrom="opacity-0 transform -translate-x-20"
        enterTo="opacity-100"
        leave="transition ease-in-out duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0 transform -translate-x-20"
      >
        <aside
          ref={ref}
          className="fixed inset-y-0 z-20 flex-shrink-0 w-64 mt-16 overflow-y-auto bg-white dark:bg-gray-800 lg:hidden"
        >
          <div className="py-4 text-gray-500 dark:text-gray-400">
            <a
              className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
              href="#"
            >
              Windmill
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
              <button className="flex items-center justify-between px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple">
                Create account
                <span className="ml-2" aria-hidden="true">
                  +
                </span>
              </button>
            </div>
          </div>
        </aside>
      </Transition>
    </Fragment>
  )
}

export default SidebarMobile
