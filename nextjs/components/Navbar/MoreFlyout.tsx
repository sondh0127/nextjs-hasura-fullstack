import React from 'react'

const MoreFlyout: React.FC = () => {
  return (
    <div className="absolute w-screen max-w-md px-2 mt-3 transform -translate-x-1/2 left-1/2 sm:px-0">
      {/*
      'More' flyout menu, show/hide based on flyout menu state.

      Entering: "transition ease-out duration-200"
        From: "opacity-0 translate-y-1"
        To: "opacity-100 translate-y-0"
      Leaving: "transition ease-in duration-150"
        From: "opacity-100 translate-y-0"
        To: "opacity-0 translate-y-1"
      */}
      <div className="rounded-lg shadow-lg">
        <div className="overflow-hidden rounded-lg shadow-xs">
          <div className="relative z-20 grid gap-6 px-5 py-6 bg-white sm:gap-8 sm:p-8">
            <a
              href="#"
              className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <div className="space-y-1">
                <p className="text-base font-medium leading-6 text-gray-900">
                  Help Center
                </p>
                <p className="text-sm leading-5 text-gray-500">
                  Get all of your questions answered in our forums or contact
                  support.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="space-y-1">
                <p className="text-base font-medium leading-6 text-gray-900">
                  Guides
                </p>
                <p className="text-sm leading-5 text-gray-500">
                  Learn how to maximize our platform to get the most out of it.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <div className="space-y-1">
                <p className="text-base font-medium leading-6 text-gray-900">
                  Events
                </p>
                <p className="text-sm leading-5 text-gray-500">
                  See what meet-ups and other events we might be planning near
                  you.
                </p>
              </div>
            </a>
            <a
              href="#"
              className="flex items-start p-3 -m-3 space-x-4 transition duration-150 ease-in-out rounded-lg hover:bg-gray-50"
            >
              <svg
                className="flex-shrink-0 w-6 h-6 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <div className="space-y-1">
                <p className="text-base font-medium leading-6 text-gray-900">
                  Security
                </p>
                <p className="text-sm leading-5 text-gray-500">
                  Understand how we take your privacy seriously.
                </p>
              </div>
            </a>
          </div>
          <div className="px-5 py-5 space-y-5 bg-gray-50 sm:px-8 sm:py-8">
            <div className="space-y-4">
              <h3 className="text-sm font-medium leading-5 tracking-wide text-gray-500 uppercase">
                Recent Posts
              </h3>
              <ul className="space-y-4">
                <li className="text-base leading-6 truncate">
                  <a
                    href="#"
                    className="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                  >
                    Boost your conversion rate
                  </a>
                </li>
                <li className="text-base leading-6 truncate">
                  <a
                    href="#"
                    className="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                  >
                    How to use search engine optimization to drive traffic to
                    your site
                  </a>
                </li>
                <li className="text-base leading-6 truncate">
                  <a
                    href="#"
                    className="font-medium text-gray-900 transition duration-150 ease-in-out hover:text-gray-700"
                  >
                    Improve your customer experience
                  </a>
                </li>
              </ul>
            </div>
            <div className="text-sm leading-5">
              <a
                href="#"
                className="font-medium text-indigo-600 transition duration-150 ease-in-out hover:text-indigo-500"
              >
                View all posts →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MoreFlyout
