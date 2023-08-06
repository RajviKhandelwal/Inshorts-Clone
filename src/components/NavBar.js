import React from 'react'
import "./NavBar.css"
import HamburgerDrawer from "./HamburgerDrawer"

const NavBar = ({setCategory}) => {
  return (
    <div className='nav'>
        <div className='icon'><HamburgerDrawer setCategory={setCategory}/></div>
        <img 
            src='https://assets.inshorts.com/website_assets/images/logo_inshorts.png' alt='logo'
            height="80%"
        />
        {/* <div className='icon'></div> */}
    </div>
  )
}

export default NavBar