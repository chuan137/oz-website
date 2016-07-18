import React from 'react';
import { Nav, NavItem, Navbar } from 'react-bootstrap';
import { Grid, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a ref="#">Z&Q Package</a>
            </Navbar.Brand>
          </Navbar.Header>
            <Nav>
              <NavItem>
                Link
              </NavItem>
            </Nav>
            <Nav pullRight={true}>
              <NavItem>
                 <span className="glyphicon glyphicon-user"></span> Login
              </NavItem>
            </Nav>
        </Navbar>

        <Grid fluid={true}>
          <Row>

            <Col md={3}  componentClass={'aside'}>
              <div className='sidebar-nav'>
                <Nav>
                  <div className='sidebar-divider'>
                    ABC
                  </div>
                  <NavItem>
                    abc
                  </NavItem>

                  <div className='sidebar-divider'>
                    Infomation
                  </div>
                  <NavItem> abc </NavItem>
                  <NavItem> def </NavItem>
                </Nav>

              </div>
            </Col>
            <Col md={8}>
              Content
            </Col>

          </Row>

        </Grid>
              </div>
    )
  }
}
