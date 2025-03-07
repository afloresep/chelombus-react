import React from 'react'
import './NavBar.css'
import logo from '../../assets/chelombus-logo.png'

function NavBar() {
  return (
    <div className='navBar'>
      <div className="logo">
        <img src={logo} alt="" width={"50px"} />
        Chelombus
      </div>
      <div className='nav'>
        <div className="box home">HOME</div>
        <div className="box databases">DATABASES</div>
        <div className="box aboutUs">TUTORIAL</div>
        <div className="box contact">CONTACT</div>
        <div className="search-btn">DOCUMENTATION</div>
      </div>
    </div>
  )
}

export default NavBar