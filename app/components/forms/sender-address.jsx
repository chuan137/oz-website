import React, { Component } from 'react';
import { Field } from 'react-redux-form';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';

class SenderAddress extends Component {
  render() {
    let { user } = this.props;

    return(
        <form>
          <Field model="user.firstName">
            <label>first name</label>
            {' '}
            <input type="text" />
          </Field>
          <Field model="user.lastName">
            <label>last name</label>
            {' '}
            <input type="text" />
          </Field>
            <Button>Login as {user.firstName}</Button>
        </form>
    );
  }
};

const selector = (state) => ({ user: state.user });
export default connect(selector)(SenderAddress);
