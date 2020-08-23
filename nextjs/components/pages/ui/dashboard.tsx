import React from 'react'

import BalanceIcon from '../../icons/BalanceIcon'
import ClientIcon from '../../icons/ClientIcon'
import ContactIcon from '../../icons/ContactIcon'
import SaleIcon from '../../icons/SaleIcon'
import StarIcon from '../../icons/StarIcon'
import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableHeaderCell,
  TableHeaderRow,
  TableRow,
  TableWrapper,
} from './components'
import CTA from './components/CTA'

const Dashboard: React.FC = () => {
  return (
    <div className="container grid px-6 mx-auto">
      <h2 className="page-title">Dashboard</h2>
      <CTA />
      {/* <!-- Cards --> */}
      <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
        {/* <!-- Card --> */}
        <Card>
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
        </Card>
        {/* <!-- Card --> */}
        <Card>
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
        </Card>
        {/* <!-- Card --> */}
        <Card>
          <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
            <SaleIcon />
          </div>
          <div>
            <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
              New sales
            </p>
            <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
              376
            </p>
          </div>
        </Card>
        {/* <!-- Card --> */}
        <Card>
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
        </Card>
      </div>
      {/* <!-- New Table --> */}
      <TableWrapper>
        <Table>
          <TableHeader>
            <TableHeaderRow>
              <TableHeaderCell>Client</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
            </TableHeaderRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center text-sm">
                  {/* <!-- Avatar with inset shadow --> */}
                  <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                    <img
                      className="object-cover w-full h-full rounded-full"
                      src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                      alt=""
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 rounded-full shadow-inner"
                      aria-hidden="true"
                    ></div>
                  </div>
                  <div>
                    <p className="font-semibold">Hans Burger</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      10x Developer
                    </p>
                  </div>
                </div>
              </TableCell>
              <TableCell>$ 863.45</TableCell>
              <TableCell>
                <span className="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                  Approved
                </span>
              </TableCell>
              <TableCell>6/10/2020</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <TableFooter
          onChange={() => {}}
          totalResults={0}
          resultsPerPage={0}
          label={''}
        />
        {/* <!-- Charts --> */}
      </TableWrapper>
      <h2 className="my-6 text-2xl font-semibold text-gray-700 dark:text-gray-200">
        Charts
      </h2>
      <div className="grid gap-6 mb-8 md:grid-cols-2">
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Revenue
          </h4>
          <canvas id="pie"></canvas>
          <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
            {/* <!-- Chart legend --> */}
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-blue-500 rounded-full"></span>
              <span>Shirts</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
              <span>Shoes</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
              <span>Bags</span>
            </div>
          </div>
        </div>
        <div className="min-w-0 p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
          <h4 className="mb-4 font-semibold text-gray-800 dark:text-gray-300">
            Traffic
          </h4>
          <canvas id="line"></canvas>
          <div className="flex justify-center mt-4 space-x-3 text-sm text-gray-600 dark:text-gray-400">
            {/* <!-- Chart legend --> */}
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-teal-600 rounded-full"></span>
              <span>Organic</span>
            </div>
            <div className="flex items-center">
              <span className="inline-block w-3 h-3 mr-1 bg-purple-600 rounded-full"></span>
              <span>Paid</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
