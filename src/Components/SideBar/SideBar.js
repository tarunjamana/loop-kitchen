import React from 'react';
import {  Container ,Nav } from 'react-bootstrap';  
import './sidebar.scss';

function SideBar() {
    return (  
      <>  
      <Container className='p-4 sidebar'>  
 
            <Nav className='d-flex flex-column'>
                <Nav.Link className='sidebar__link' href="/" >Home</Nav.Link>
                <Nav.Link className='sidebar__link'   href="/bookmarks">Bookmarks</Nav.Link>
            </Nav>

        </Container>  
      </>  
    );  
}

export default SideBar

