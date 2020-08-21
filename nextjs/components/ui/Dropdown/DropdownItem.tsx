import React from 'react'

interface DropdownItemProps {
  className?: string
}

const DropdownItem: React.FC<DropdownItemProps> = ({ children, className }) => {
  const cls = `inline-flex items-center w-full px-2 py-1 text-sm font-semibold transition-colors duration-150 rounded-md hover:bg-gray-100 hover:text-gray-800 dark:hover:bg-gray-800 dark:hover:text-gray-200 ${className}`
  return (
    <li className="flex">
      <a className={cls} href="#">
        {children}
      </a>
    </li>
  )
}

export default DropdownItem
