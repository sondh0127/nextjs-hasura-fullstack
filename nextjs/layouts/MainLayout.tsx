import React, { FC, useState } from 'react'

import Navbar from './components/Navbar'

interface MainLayoutProps {
  footer?: () => React.ReactNode
}

const MainLayout: FC<MainLayoutProps> = ({ children, footer }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 dark:from-gray-900 dark:via-gray-900 dark:to-gray-900">
      <div className="flex flex-col flex-1 w-full">
        <Navbar onHamburgerClick={() => setIsSideMenuOpen((value) => !value)} />
        <main className="h-full overflow-y-auto">
          <div className="container grid px-6 mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default MainLayout
