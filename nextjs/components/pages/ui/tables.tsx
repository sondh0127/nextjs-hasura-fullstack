import React, { useCallback, useEffect, useMemo, useState } from 'react'

import tableData from '../../../utils/tableData'
import { Pagination } from '../../ui'
const Tables: React.FC = ({ children }) => {
  const total = tableData.length
  const resultPerPage = 5
  const [activePage, setActivePage] = useState(1)
  const [activePage2, setActivePage2] = useState(1)

  const handleChangePage = (activePage: number) => {
    setActivePage(activePage)
  }

  const handleChangePage2 = (activePage: number) => {
    setActivePage2(activePage)
  }

  const renderData = useMemo(() => {
    return tableData.slice(
      (activePage - 1) * resultPerPage,
      activePage * resultPerPage,
    )
  }, [activePage, tableData])

  const renderData2 = useMemo(() => {
    return tableData.slice(
      (activePage2 - 1) * resultPerPage,
      activePage2 * resultPerPage,
    )
  }, [activePage2, tableData])

  return (
    <div className="container grid px-6 mx-auto">
      <h2 className="page-title">Tables</h2>
      <div className="mb-6">
        <h3 className="section-title">Simple table</h3>

        <div className="table-wrapper">
          <div className="w-full overflow-x-auto">
            <table className="table-table">
              <thead className="table-header">
                <tr className="table-header-row">
                  <th className="table-header-cell">Client</th>
                  <th className="table-header-cell">Amount</th>
                  <th className="table-header-cell">Status</th>
                  <th className="table-header-cell">Date</th>
                </tr>
              </thead>
              <tbody className="table-body ">
                {renderData.map((item, index) => (
                  <tr key={index} className="table-body-row">
                    <td className="table-body-cell">
                      <div className="flex items-center text-sm">
                        {/* <!-- Avatar with inset shadow --> */}
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={item.avatar}
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {item.job}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="table-body-cell">{item.amount}</td>
                    <td className="table-body-cell">
                      <span className="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        {item.status}
                      </span>
                    </td>
                    <td className="table-body-cell">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <Pagination
              label={'Simple table'}
              onChange={handleChangePage}
              resultsPerPage={resultPerPage}
              totalResults={total}
            />
          </div>
          {/* <!-- Charts --> */}
        </div>
      </div>

      <div className="mb-6">
        <h3 className="section-title">Table with actions</h3>

        <div className="table-wrapper">
          <div className="w-full overflow-x-auto">
            <table className="table-table">
              <thead className="table-header">
                <tr className="table-header-row">
                  <th className="table-header-cell">Client</th>
                  <th className="table-header-cell">Amount</th>
                  <th className="table-header-cell">Status</th>
                  <th className="table-header-cell">Date</th>
                  <th className="table-header-cell">Actions</th>
                </tr>
              </thead>
              <tbody className="table-body ">
                {renderData2.map((item, index) => (
                  <tr key={index} className="table-body-row">
                    <td className="table-body-cell">
                      <div className="flex items-center text-sm">
                        {/* <!-- Avatar with inset shadow --> */}
                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                          <img
                            className="object-cover w-full h-full rounded-full"
                            src={item.avatar}
                            alt=""
                            loading="lazy"
                          />
                          <div
                            className="absolute inset-0 rounded-full shadow-inner"
                            aria-hidden="true"
                          ></div>
                        </div>
                        <div>
                          <p className="font-semibold">{item.name}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            {item.job}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="table-body-cell">{item.amount}</td>
                    <td className="table-body-cell">
                      <span className="px-2 py-1 text-xs font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                        {item.status}
                      </span>
                    </td>
                    <td className="table-body-cell">
                      {new Date(item.date).toLocaleDateString()}
                    </td>
                    <td className="table-body-cell">
                      <div className="flex items-center space-x-1">
                        <button className="btn-icon btn-icon-sm btn-link">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 pencil-alt"
                          >
                            <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z" />
                            <path
                              fillRule="evenodd"
                              d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                        <button className="btn-icon btn-icon-sm btn-link">
                          <svg
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 trash"
                          >
                            <path
                              fillRule="evenodd"
                              d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            <Pagination
              label={'Table with actions'}
              onChange={handleChangePage2}
              resultsPerPage={resultPerPage}
              totalResults={total}
            />
          </div>
          {/* <!-- Charts --> */}
        </div>
      </div>
    </div>
  )
}

export default Tables
