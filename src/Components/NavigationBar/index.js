import React, {useState} from "react";
import Mallete from '../../Assets/Images/mallete.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import  Button  from "../../Components/Button";
import './style.scss'
//import {Redirect} from "react-router-dom"
import { useHistory } from "react-router-dom";


  

const NavigationBar = () =>{
    const [collapsed, setCollapsed] = useState(true);
    const toggleNavbar = () => setCollapsed(!collapsed);
    const history = useHistory()
    const inputHandlerLogin = (event) =>{
      history.push('/login')
    }
    const inputHandlerRegister = (event) =>{
      history.push('/registro')
    }

    return( 
        <>

      <Navbar className="landing navbar-expand-md navbar-light">
        <NavbarBrand href="/" className="mr-auto p-3" >
        <img className='ml-3' src={Mallete} width='180' height='35' alt='logo de mallete' />
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar className="ml-auto">
            <NavItem>
              <NavLink className="links-landing mr-5" href="/planes/">Planes</NavLink>
            </NavItem>
            <NavItem className="mr-2">
                <Button className="" text="Entrar" template="btn-landing btn-login mr-4" handler={inputHandlerLogin}/>
            </NavItem>
            <NavItem className="mr-5">
                <Button className="" text="Registro" template="btn-landing btn-registro" handler={inputHandlerRegister}/>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    
        </>
    );
}

export default NavigationBar