import React from 'react';
import Registration from './components/Form/Registration.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <Registration />
        <div>Sender Address</div>
        <form></form>
        <div>Reciever Address</div>
        <form></form>
      </div>
    )
  }
}
