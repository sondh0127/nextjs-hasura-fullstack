import React, { useCallback, useEffect, useMemo, useState } from 'react'

import { Pagination, PaginationProps } from '../'

type TableFooterProps = PaginationProps

const TableFooter: React.FC<TableFooterProps> = ({
  label,
  onChange,
  resultsPerPage,
  totalResults,
}) => {
  return (
    <Pagination
      label={label}
      onChange={onChange}
      resultsPerPage={resultsPerPage}
      totalResults={totalResults}
    />
  )
}

export default TableFooter
