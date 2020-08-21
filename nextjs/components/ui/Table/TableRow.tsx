import React, { useCallback, useEffect, useMemo, useState } from 'react'

const TableRow: React.FC = ({ children }) => {
  return <tr className="text-gray-700 dark:text-gray-400">{children}</tr>
}

export default TableRow
