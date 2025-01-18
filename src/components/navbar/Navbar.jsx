import React, { useState } from 'react'
import {Hamburger, Logo,Menu,MenuLink,Nav} from "./NavbarStyles"
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
const [open,setOpen] = useState(false)

  return (
  
    <Nav>
      <Logo to="/home">
        <i>{"<Clarusway/>"}</i>
        <span>recipe</span>
      </Logo>
      <Hamburger onClick={()=>setOpen(!open)}>
        <GiHamburgerMenu/>  
      </Hamburger>

      <Menu>
        <MenuLink to="/about">About</MenuLink> 
        <a to="https://github.com/">Github</a>
        <MenuLink to="/">Logout</MenuLink>
        {/* navbarstyle içindeki font girasol buyuk harfe çeviriyor */}
      </Menu>









    </Nav>

    
  )
}

export default Navbar