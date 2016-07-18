import React, { Component } from 'react';
import { PanelGroup, Panel, ListGroup, ListGroupItem } from 'react-bootstrap';

export default class SiteSideMenu extends Component {

  render() {
    return (
      <div>

        <Panel header="Chu Dan" bsStyle="primary">
          <ListGroup fill>
            <ListGroupItem href="#">ABC</ListGroupItem>
            <ListGroupItem href="#">ABC</ListGroupItem>
            <ListGroupItem href="#">ABC</ListGroupItem>
          </ListGroup>
        </Panel>

        <Panel header="Chu Dan 2" bsStyle="primary">
          <ListGroup fill>
            <ListGroupItem href="#">ABC</ListGroupItem>
            <ListGroupItem href="#">ABC</ListGroupItem>
            <ListGroupItem href="#">ABC</ListGroupItem>
          </ListGroup>
        </Panel>

      </div>
    );
  }
}
