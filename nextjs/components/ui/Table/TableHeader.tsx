import React, { useCallback, useEffect, useMemo, useState } from 'react'

const TableHeader: React.FC<> = ({ children }) => {
  return <thead>{children}</thead>
}

export default TableHeader
