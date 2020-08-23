import React, { useEffect, useState } from 'react'

interface NavigationProps {
  onClick: () => void
  disabled?: boolean
}

const PrevNavigationButton: React.FC<NavigationProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
      aria-label="Previous"
    >
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}

const NextNavigationButton: React.FC<NavigationProps> = ({
  onClick,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
      aria-label="Next"
    >
      <svg aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
        <path
          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </button>
  )
}

interface PageButtonProps {
  page: number
  isActive: boolean
  onClick: () => void
}

const PageButton: React.FC<PageButtonProps> = ({ page, isActive, onClick }) => {
  const primaryCls =
    'px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple'
  const ghostCls =
    'px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple'

  const cls = isActive ? primaryCls : ghostCls
  return (
    <button onClick={onClick} className={cls}>
      {page}
    </button>
  )
}

const EmptyPageButton = () => <span className="px-2 py-1">...</span>

export interface PaginationProps {
  totalResults: number
  resultsPerPage: number
  label: string
  onChange?: (activePage: number) => void
}

const Pagination: React.FC<PaginationProps> = ({
  totalResults,
  resultsPerPage,
  label,
  onChange,
}) => {
  const [pages, setPages] = useState<(number | string)[]>([])
  const [activePage, setActivePage] = useState(1)

  const TOTAL_PAGES = Math.ceil(totalResults / resultsPerPage)
  const FIRST_PAGE = 1
  const LAST_PAGE = TOTAL_PAGES
  const MAX_VISIBLE_PAGES = 7

  function handlePreviousClick() {
    setActivePage(activePage - 1)
  }

  function handleNextClick() {
    setActivePage(activePage + 1)
  }

  useEffect(() => {
    // [1], 2, 3, 4, 5, ..., 12 case #1
    // 1, [2], 3, 4, 5, ..., 12
    // 1, 2, [3], 4, 5, ..., 12
    // 1, 2, 3, [4], 5, ..., 12
    // 1, ..., 4, [5], 6, ..., 12 case #2
    // 1, ..., 5, [6], 7, ..., 12
    // 1, ..., 6, [7], 8, ..., 12
    // 1, ..., 7, [8], 9, ..., 12
    // 1, ..., 8, [9], 10, 11, 12 case #3
    // 1, ..., 8, 9, [10], 11, 12
    // 1, ..., 8, 9, 10, [11], 12
    // 1, ..., 8, 9, 10, 11, [12]
    // [1], 2, 3, 4, 5, ..., 8
    // always show first and last
    // max of 7 pages shown (incl. [...])
    if (TOTAL_PAGES <= MAX_VISIBLE_PAGES) {
      setPages(Array.from({ length: TOTAL_PAGES }).map((_, i) => i + 1))
    } else if (activePage < 5) {
      // #1 active page < 5 -> show first 5
      setPages([1, 2, 3, 4, 5, '...', TOTAL_PAGES])
    } else if (activePage >= 5 && activePage < TOTAL_PAGES - 3) {
      // #2 active page >= 5 && < TOTAL_PAGES - 3
      setPages([
        1,
        '...',
        activePage - 1,
        activePage,
        activePage + 1,
        '...',
        TOTAL_PAGES,
      ])
    } else {
      // #3 active page >= TOTAL_PAGES - 3 -> show last
      setPages([
        1,
        '...',
        TOTAL_PAGES - 4,
        TOTAL_PAGES - 3,
        TOTAL_PAGES - 2,
        TOTAL_PAGES - 1,
        TOTAL_PAGES,
      ])
    }
  }, [activePage])

  useEffect(() => {
    if (onChange) {
      onChange(activePage)
    }
  }, [activePage])

  return (
    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
      <span className="flex items-center col-span-3">
        Showing {activePage * resultsPerPage - resultsPerPage + 1}-
        {Math.min(activePage * resultsPerPage, totalResults)} of {totalResults}
      </span>
      <span className="col-span-2"></span>
      {/* <!-- Pagination --> */}
      <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
        <nav aria-label="navigation">
          <ul className="inline-flex items-center">
            <li>
              <PrevNavigationButton
                onClick={handlePreviousClick}
                disabled={activePage === FIRST_PAGE}
              />
            </li>
            {pages.map((p) => (
              <li key={`${p}`}>
                {p === '...' ? (
                  <EmptyPageButton />
                ) : (
                  <PageButton
                    page={Number(p)}
                    isActive={p === activePage}
                    onClick={() => setActivePage(Number(p))}
                  />
                )}
              </li>
            ))}
            <li>
              <NextNavigationButton
                disabled={activePage === LAST_PAGE}
                onClick={handleNextClick}
              />
            </li>
          </ul>
        </nav>
      </span>
    </div>
  )
}

export default Pagination
