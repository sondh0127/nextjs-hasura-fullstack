import React, { useCallback, useEffect, useMemo, useState } from 'react'

const TableHeaderRow: React.FC = ({ children }) => {
  return (
    <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
      {children}
    </tr>
  )
}

export default TableHeaderRow
