import React, { useCallback, useEffect, useMemo, useState } from 'react'

const TableHeaderCell: React.FC = ({ children }) => {
  return <th className="px-4 py-3">{children}</th>
}

export default TableHeaderCell
