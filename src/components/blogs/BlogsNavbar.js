import React from 'react';
import { Navbar,Nav } from 'react-bootstrap';

function BlogsNavbar(){
    return(
        <Navbar expand='lg' bg='dark' variant='dark'>
            <Navbar.Brand>Blogs</Navbar.Brand>
            <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
            <Navbar.Collapse id='responsive-navbar-nav'>
                <Nav  className='mr-auto'>
                    <Nav.Item><Nav.Link href='/blogs/register'>Register</Nav.Link></Nav.Item>
                    <Nav.Item><Nav.Link href='/blogs/search'>Search</Nav.Link></Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default BlogsNavbar;
