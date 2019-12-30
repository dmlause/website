import React from 'react';
import {Navbar, Nav,} from 'react-bootstrap';

/**
 * Navbar Component, rendered in App.js
 * @param props
 * @returns {Navigation}
 */
const Navigation = (props) => {

    const isActive = (href) => {
        return window.location.pathname === href;
    };

    return (
        <>
            <Navbar fixed="top" expand="sm">
                <Navbar.Brand href="/">
                    <img alt="logo"
                         src={require("../../assets/images/tiny-logo.png")}
                         width="30"
                         height="30"
                         border="4"
                         className="brand-image"
                    />
                    &nbsp;Derek Lause
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse>
                    <Nav variant="pills">
                        <Nav.Link href="https://dlause.blogspot.com" active={isActive('/content')} className={isActive('/content') ? "active-link" : ""}>
                            Content
                        </Nav.Link>
                        <Nav.Link href="/portfolio" active={isActive('/portfolio')} className={isActive('/portfolio') ? "active-link" : ""}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link href="/shop" active={isActive('/shop')} className={isActive('/shop') ? "active-link" : ""}>
                            Store
                        </Nav.Link>
                        <Nav.Link href="/contact" active={isActive('/contact')} className={isActive('/contact') ? "active-link" : ""}>
                            Contact
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default Navigation;
