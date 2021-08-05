import React from 'react'
import {Link} from 'react-router-bootstrap'
import './header.css'

//needs real hamburger component
const Hamburger = () => {
    return (
        <div>|||</div>
    )
}
//needs real hamburger component
const MenuMobil3e = () => {
    return (
        <div>|||</div>
    )
}

//needs real hamburger component
const Menu = () => {
    return (
        <div>|||</div>
    )
}

const header = () => {
    return (
        <div className="header">
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img height={config.logo.desktop_height} alt={config.logo.alt} src={config.logo.desktop} />
            </Link>
          </div>
          <div className="logo-mobile">
            <Link to="/">
              <img height={config.logo.desktop_height} alt={config.logo.alt} src={config.logo.mobile} />
            </Link>
          </div>
          <MenuMobile active={this.state.menuActive} />
          <Menu />
          <Hamburger toggleMenu={this.toggleMenu} />
        </div>
      </div>
    )
    )


    export default header

