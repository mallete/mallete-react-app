import React, { useState } from 'react'
import mallete from '../../Assets/Icons/black-logo.png'
import './style.scss'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap'

function NavBar (props) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar className='navbar-logged navbar-light' expand='md'>
        <NavbarBrand href='/'>
          <img id='logo' src={mallete} width='35' height='35' />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink className='ref link-navbar-logged' href='/búsqueda'>Juicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='ref link-navbar-logged' href='/notificaciones/'>Notificaciones</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id='perfil' className='link-perfil' href='/perfil/'>Perfil</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
