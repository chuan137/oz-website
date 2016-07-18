import React, { Component } from 'react';
import { PageHeader, Tab, Tabs } from 'react-bootstrap';
import SenderAddress from './forms/sender-address.jsx';
import GoAddress from './forms/go-address.jsx';


export default class PagePackage extends Component {

  render() {

    return (
      <div>
        <PageHeader>Send International Package</PageHeader>
        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Address">
            <SenderAddress />
          </Tab>
          <Tab eventKey={2} title="Package">
            <GoAddress />
          </Tab>
          <Tab eventKey={3} title="Payment">

          </Tab>
        </Tabs>
    </div>
    );
  }
}
