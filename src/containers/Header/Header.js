import React, { Component } from 'react';
import { connect } from 'react-redux';

import {loginUser} from './ducks';

import { Navbar, Nav, NavItem , NavDropdown, MenuItem} from 'react-bootstrap';
import { LinkContainer } from "react-router-bootstrap";

import "./Header.css"


class Header extends Component{
    // componentDidMount(){
    //     this.props.login({
    //         name: 'johnFrank'
    //     })
    // }

    _renderLogin = () => {
        if(!this.props.isUserLoggedIn){
            return (
            <LinkContainer to="/" onClick={() =>{ this.props.login({name: 'johnFrank'} )}}>
                <NavItem>login</NavItem>
            </LinkContainer>
            );
        };
        return (
            <NavDropdown eventKey={1} title={this.props.user.name} id="user-details">
                <LinkContainer to="/settings"><MenuItem eventKey={1}>Settings</MenuItem></LinkContainer>
            </NavDropdown>
        )
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
                        <NavDropdown eventKey={1} title='About Me' id="about-me-nav">
                            <LinkContainer to="/aboutme" exact>
                                <MenuItem eventKey={1}>About Me</MenuItem>
                            </LinkContainer>
                            <LinkContainer to="/aboutme/resume" exact>
                                <MenuItem eventKey={2} >Resume</MenuItem>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>

                    <Nav pullRight>
                        {this._renderLogin()}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}


const mapStateToProps = state => {
    return {
        user: state.header.user,
        isUserLoggedIn: state.header.isUserLoggedIn
    };
}

const mapDispatchToProps = dispatch => {
    return {
        login: (user) => dispatch(loginUser(user))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);