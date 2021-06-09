import React from 'react';
import {Navbar } from 'react-bootstrap';

function Header() {
    return (
        <header>
            <Navbar bg="Info" expand="lg">
                <Navbar.Brand ><h1>Score Card</h1></Navbar.Brand>
            </Navbar>
        </header>
    )
}
export default Header;
