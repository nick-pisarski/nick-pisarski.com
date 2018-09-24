import React from 'react';
import { Navbar, Nav, NavItem , NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import "./Header.css"

const RenderLogin = (props) => {
    if(!props.loggedIn){
        return (<NavItem onClick={() =>{ props.onLogin({name: 'johnFrank'} )}}>login</NavItem>);
    };
    return (
        <NavDropdown eventKey={1} title={props.user.name} id="user-details">
            <MenuItem eventKey={1} onClick={() => props.onLogout()}>logout</MenuItem>
        </NavDropdown>
    )
}

export default props => {
        return (
            <Navbar inverse collapseOnSelect>
                <Navbar.Header>
                    <LinkContainer to="/">
                        <Navbar.Brand>{props.title}</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle/>
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/apps"><NavItem>Apps</NavItem></LinkContainer>
                    </Nav>

                    <Nav pullRight>
                        <RenderLogin 
                            user={props.user} 
                            loggedIn={props.userLoggedIn} 
                            onLogin={props.onLogin} 
                            onLogout={props.onLogout}
                        />
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }

