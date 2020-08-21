import React, { useCallback, useEffect, useMemo, useState } from 'react'

const TableWrapper: React.FC = ({ children }) => {
  return (
    <div className="w-full overflow-hidden rounded-lg shadow-xs">
      {children}
    </div>
  )
}

export default TableWrapper
