import React from 'react'

const TableBody: React.FC = ({ children }) => {
  return (
    <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
      {children}
    </tbody>
  )
}

export default TableBody
