import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';

function HomeNavbar(){
    return(
        <Navbar expand='lg' bg='dark' variant='dark'>
            <Navbar.Brand>Blog System</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav  className='mr-auto'>
                    <Nav.Item><Nav.Link href='/users'>Users</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/blogs'>Blogs</Nav.Link></Nav.Item>                    
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default HomeNavbar;
