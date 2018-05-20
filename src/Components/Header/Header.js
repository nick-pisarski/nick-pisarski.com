import React, { Component } from 'react';

import { Navbar, Nav, NavItem , NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import "./Header.css"


class Header extends Component{
    state = {
        user: {
            username: 'nickp'
        }
    }
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
                        <LinkContainer to="/projects"><NavItem>Projects</NavItem></LinkContainer>
                        <LinkContainer to="/apps"><NavItem>Apps</NavItem></LinkContainer>
                        <LinkContainer to="/aboutme"><NavItem>About Me</NavItem></LinkContainer>
                    </Nav>
                    <Nav pullRight>
                    <NavDropdown eventKey={3} title={this.state.user.username} id="user-details">
                        <LinkContainer to="/settings"><MenuItem>Login</MenuItem></LinkContainer>
                        <LinkContainer to="/settings"><MenuItem>Sign Up</MenuItem></LinkContainer>
                        <LinkContainer to="/settings"><MenuItem eventKey={3.1}>Settings</MenuItem></LinkContainer>
                        <MenuItem divider />
                        <MenuItem eventKey={3.2}>Sign Out</MenuItem>
                    </NavDropdown>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Header;