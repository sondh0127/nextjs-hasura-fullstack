import React, { useState } from 'react'

import links from '../utils/uiLinks'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SidebarMobile from './components/SidebarMobile'

const TailwindLayout: React.FC = ({ children }) => {
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false)

  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      {/* <div className="flex h-screen bg-gradient-to-r from-cool-gray-300 to-gray-300"> */}
      <Sidebar links={links} />
      <SidebarMobile
        links={links}
        isSideMenuOpen={isSideMenuOpen}
        onClose={() => setIsSideMenuOpen(false)}
      />
      <div className="flex flex-col flex-1 w-full">
        <Navbar onHamburgerClick={() => setIsSideMenuOpen((value) => !value)} />
        <main className="h-full overflow-y-auto">
          <div className="container grid px-6 mx-auto">{children}</div>
        </main>
      </div>
    </div>
  )
}

export default TailwindLayout
