import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import SiteHeader from './components/SiteHeader.jsx';
import SiteSideMenu from './components/SiteSideMenu.jsx';
import PagePackage from './components/PagePackage.jsx';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <SiteHeader />

        <Grid fluid={false}>
          <Row>
            <Col md={2}> <SiteSideMenu /> </Col>
            <Col md={8}>
              <PagePackage />
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
