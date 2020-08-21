import React, { useCallback, useEffect, useMemo, useState } from 'react'

import BalanceIcon from '../../icons/BalanceIcon'
import ClientIcon from '../../icons/ClientIcon'
import ContactIcon from '../../icons/ContactIcon'
import CTA from './components/CTA'

const Cards: React.FC = ({ children }) => {
  return (
    <div className="container grid mx-auto">
      <h1 className="page-title">Cards</h1>
      <CTA />
      <div className="mb-6">
        <h2 className="section-title">Big session card</h2>
        <div className="shadow-md card">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Large, full width sections goes here
          </p>
        </div>
      </div>
      <div className="mb-6">
        <h2 className="section-title">Responsive cards</h2>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center card">
            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
              <ClientIcon />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Total clients
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                6389
              </p>
            </div>
          </div>

          <div className="flex items-center card">
            <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
              <BalanceIcon />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Account balance
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                $ 46,760.89
              </p>
            </div>
          </div>

          <div className="flex items-center card">
            <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
              <BalanceIcon />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                New sales
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                376
              </p>
            </div>
          </div>

          <div className="flex items-center card">
            <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
              <ContactIcon />
            </div>
            <div>
              <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                Pending contacts
              </p>
              <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                35
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h2 className="section-title">Cards with title</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card">
            <p className="mb-2 text-base font-semibold text-gray-600 dark:text-gray-300">
              Revenue
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
              dolorum.
            </p>
          </div>

          <div className="text-white bg-purple-600 dark:text-white card dark:bg-purple-600">
            <p className="mb-2 font-semibold">Colored card</p>
            <p className="">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga,
              cum commodi a omnis numquam quod? Totam exercitationem quos hic
              ipsam at qui cum numquam, sed amet ratione! Ratione, nihil
              dolorum.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards
