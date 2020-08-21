import React from 'react'

import NavbarDesktop from './NavbarDesktop'
import NavbarMobile from './NavbarMobile'

const Navbar: React.FC = () => {
  return (
    <div className="relative bg-white">
      <NavbarDesktop />
      <NavbarMobile />
    </div>
  )
}

export default Navbar
