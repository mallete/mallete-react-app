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
import { useHistory } from "react-router-dom";


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
    history.push("/")
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
              <NavLink className='ref link-navbar-logged' href='/busqueda'>Agregar Juicio</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className='ref link-navbar-logged' href='/dashboard/'>Juicios</NavLink>
            </NavItem>
            <NavItem>
              <NavLink id='perfil' className='ref link-perfil' href="#" onClick={logout}>Perfil</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default NavBar
