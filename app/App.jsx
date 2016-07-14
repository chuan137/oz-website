import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <div>Sender Address</div>
        <form></form>
        <div>Reciever Address</div>
        <form></form>
      </div>
    )
  }
}
