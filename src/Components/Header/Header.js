import React, { Component } from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import "./Header.css"


class Header extends Component{
    
    render(){
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>{this.props.title}</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/Link"><NavItem>Link</NavItem></LinkContainer>
                        <LinkContainer to="/Link2"><NavItem>Link2</NavItem></LinkContainer>
                        <LinkContainer to="/Link3"><NavItem>Link3</NavItem></LinkContainer>
                    </Nav>
                    <Nav pullRight>
                        <LinkContainer to="/Login"><NavItem>Login</NavItem></LinkContainer>
                        <LinkContainer to="/Sign Up"><NavItem>Sign Up</NavItem></LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;