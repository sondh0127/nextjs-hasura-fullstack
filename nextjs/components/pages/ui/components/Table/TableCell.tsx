import React, { useCallback, useEffect, useMemo, useState } from 'react'

const TableCell: React.FC = ({ children }) => {
  return <td className="px-4 py-3 text-sm">{children}</td>
}

export default TableCell
