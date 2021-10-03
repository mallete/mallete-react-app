import React, { useState } from 'react';
import mallete from "../../Assets/Icons/black-logo.png" 
import './style.scss'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
  } from 'reactstrap';
  
  function NavBar (props) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">
          <img id="logo" src={mallete} width="35" height="35"></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="ref" href="/juicios/">Juicios</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="ref" href="/notificaciones/">Notificaciones</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="link" href="/perfil/">Perfil</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default NavBar;