import Link from 'next/link'
import React from 'react'

const Footer: React.FC = () => {
  return (
    <div className={`h-40 flex-row items-center justify-center`}>
      <p className={`font-bold text-sm`}>
        Copyright © 2020
        <Link href="https://github.com/sondh0127">
          <a className={`ml-4`} href="https://github.com/sondh0127">
            @sondh0127
          </a>
        </Link>
      </p>
    </div>
  )
}

export default Footer
