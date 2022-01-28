import {Link} from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import NavDropdown from 'react-bootstrap/NavDropdown'

const Nav = () => {
    return ( 
        <div>
        <Navbar bg="dark" variant= "dark" expand="lg">

<Container>

<Navbar.Brand href="/">Home</Navbar.Brand>

<Navbar.Brand href="/about">About</Navbar.Brand>

<Navbar.Brand href="/menu">Menu</Navbar.Brand>

<Navbar.Brand href="/contactUs">Contact Us</Navbar.Brand>

</Container>

</Navbar>
        </div>

     );

}

 

export default Nav;
