import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, Stack } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const linkStyle ={
    margin : '1rem',
    textDecoration : 'none',
    color : 'black',
    fontWeight : '100px'
};
const Header = () => {
  const {client, logOut} = useAuth();
    return (
        <div>
           <h1> Air-Waves Tourism</h1> 
           <Navbar bg="light" expand="lg">
         <Container fluid>
             <Navbar.Toggle aria-controls="navbarScroll" />
             <Navbar.Collapse id="navbarScroll">
               <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                 >
                   <Stack direction="horizontal" gap={3}>
                    <div className="bg-light border"><NavLink to='/home'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}> Home </NavLink></div>
                    <div className="bg-light border"><NavLink to='/contact'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}>Contact Us</NavLink></div>
                    <div className="bg-light border"> <NavLink to='/about'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}> About </NavLink></div>
                   </Stack>
                </Nav>
                <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                />
                  <Button variant="outline-success">Search</Button>
              </Form>
              { client.email ? <Button onClick={logOut} variant="secondary">Log Out</Button> :
                <NavLink to='/login'  activeStyle={{fontWeight: "bold",color: "green"}} style={linkStyle}> Sign In </NavLink>}
              <Navbar.Text >
                   Signed in as: <a href="#login">{client?.displayName}</a>
              </Navbar.Text>
              
             </Navbar.Collapse>
             
         </Container>
            </Navbar>



            
        </div>
    );
};

export default Header;