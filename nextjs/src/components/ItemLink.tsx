import * as React from 'react'

interface ItemLinkProps {
  href: string
}

export const ItemLink: React.FC<ItemLinkProps> = (props) => {
  const { children, href } = props

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`bg-gray-100 text-sm font-semibold rounded-md px-3 !text-gray-600 !no-underline`}
    >
      {children}
    </a>
  )
}

export default ItemLink
