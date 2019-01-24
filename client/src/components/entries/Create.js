import React, { Component } from 'react';
import { Form, Text, TextArea } from 'informed';
import moment from 'moment';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { createEntry } from '../../actions/EntryActions';
import Nav from '../Nav';

// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

class Create extends Component {
  handleSubmit(entry) {
    console.log(entry);
    this.props.createEntry(entry, this.props.history);
  }

  render() {
    const today = moment(Date.now()).format('MMM D YYYY');

    return (
      <div className="create_container">
        <Nav history={this.props.history} />

        <Form
          onSubmit={values => this.handleSubmit(values)}
          className="create_form"
        >
          <div className="top">
            <button type="submit">Save</button>

            <Text
              field="title"
              placeholder="Title..."
              autoComplete="off"
              maxLength="12"
              className="create_form-title"
            />
          </div>
          <div className="create_form-labels">
            <Text
              field="label"
              placeholder="#label"
              autoComplete="off"
              maxLength="6"
            />
            <p>{today}</p>
          </div>

          <TextArea
            field="content"
            placeholder="write something..."
            autoComplete="off"
            className="create_form-body"
          />
          {/* </div> */}
        </Form>
      </div>
    );
  }
}

export default connect(
  null,
  { createEntry }
)(Create);
