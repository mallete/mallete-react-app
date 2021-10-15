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
  NavLink,
  Button
} from 'reactstrap'
import { useHistory, Link } from "react-router-dom";


function NavBar (props) {
  const { setIsLogged } = props
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)
  let history = useHistory();
  const logout = (event)=>{
    event.preventDefault()
    localStorage.removeItem("userId")
    localStorage.removeItem("authenticationToken")
    setIsLogged(false)
    history.replace("/")
  }
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
              <Link className='ref link-navbar-logged nav-link' to={{
                    pathname: '/busqueda',
                  }}>Agregar Juicio</Link>
            </NavItem>
            <NavItem>
            <Link className='ref link-navbar-logged nav-link' to={{
                    pathname: '/dashboard',
                  }}>Juicios</Link>
            </NavItem>
            <NavItem>
              <Link className='ref link-navbar-logged nav-link' to={{
                    pathname: '/planes',
                  }}>Planes</Link>
            </NavItem>
            <NavItem>
              <NavLink id='perfil' className='ref link-perfil' href="#" onClick={logout}>Cerrar Sesión</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
