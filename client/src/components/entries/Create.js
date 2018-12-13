import React, { Component } from 'react';
import { Form, Text, TextArea } from 'informed';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createEntry } from '../../actions/EntryActions';

class Create extends Component {
  handleSubmit(entry) {
    console.log(entry);
    this.props.createEntry(entry, this.props.history);
  }

  render() {
    return (
      <div>
        <Form onSubmit={values => this.handleSubmit(values)}>
          <label>Title</label>
          <Text field="title" />

          <label>label</label>
          <Text field="label" />

          <label>write something</label>
          <TextArea field="content" />

          <button type="submit">Finish</button>
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { createEntry }
)(Create);
