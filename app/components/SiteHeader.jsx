import React, { Component } from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';

export default class  SiteHeader extends Component {

  render() {
    return (

      <Navbar staticTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a ref="#">Z&Q Package</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>

          <Nav bsStyle="pills">
            <NavItem> Link </NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem>
               <span className="glyphicon glyphicon-user"></span> Sign Up
            </NavItem>

            <NavItem>
               <span className="glyphicon glyphicon-log-in"></span> Login
            </NavItem>
          </Nav>

        </Navbar.Collapse>


      </Navbar>

    );
  }
}
