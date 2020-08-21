import React, { useState } from 'react'

import MoreFlyout from './MoreFlyout'
import SolutionFlyout from './SolutionFlyout'

type Flyout = 'solution' | 'more' | null

const NavbarDesktop: React.FC = () => {
  const [showFlyoutName, setShowFlyoutName] = useState<Flyout>(null)

  const handleNavClick = (name: Flyout) => {
    console.log(`🇻🇳 [LOG]: handleNavClick -> name`, name)
    if (name !== showFlyoutName) {
      setShowFlyoutName(name)
    } else {
      setShowFlyoutName(null)
    }
  }

  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6">
      <div className="flex items-center justify-between py-6 border-b-2 border-gray-100 md:justify-start md:space-x-10">
        <div className="lg:w-0 lg:flex-1">
          <a href="#" className="flex">
            <img
              className="w-auto h-8 sm:h-10"
              src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
              alt="Workflow"
            />
          </a>
        </div>
        <div className="-my-2 -mr-2 md:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 text-gray-400 transition duration-150 ease-in-out rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <nav className="hidden space-x-10 md:flex">
          <div className="relative">
            {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
            <button
              type="button"
              onClick={() => handleNavClick('solution')}
              className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out group hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <span>Solutions</span>
              {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
              <svg
                className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showFlyoutName === 'solution' && <SolutionFlyout />}
          </div>
          <a
            href="#"
            className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Pricing
          </a>
          <a
            href="#"
            className="text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Docs
          </a>
          <div className="relative">
            {/* Item active: "text-gray-900", Item inactive: "text-gray-500" */}
            <button
              type="button"
              onClick={() => handleNavClick('more')}
              className="inline-flex items-center space-x-2 text-base font-medium leading-6 text-gray-500 transition duration-150 ease-in-out hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              <span>More</span>
              {/* Item active: "text-gray-600", Item inactive: "text-gray-400" */}
              <svg
                className="w-5 h-5 text-gray-400 transition duration-150 ease-in-out group-hover:text-gray-500 group-focus:text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {showFlyoutName === 'more' && <MoreFlyout />}
          </div>
        </nav>
        <div className="items-center justify-end hidden space-x-8 md:flex md:flex-1 lg:w-0">
          <a
            href="#"
            className="text-base font-medium leading-6 text-gray-500 whitespace-no-wrap hover:text-gray-900 focus:outline-none focus:text-gray-900"
          >
            Sign in
          </a>
          <span className="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-white whitespace-no-wrap transition duration-150 ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700"
            >
              Sign up
            </a>
          </span>
        </div>
      </div>
    </div>
  )
}

export default NavbarDesktop
