import React, { Component } from 'react';
import { Form, Text, TextArea } from 'informed';

import { connect } from 'react-redux';

import { editEntry, oneEntry } from '../../actions/EntryActions';

import Nav from '../Nav';

class Edit extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;

    this.props.oneEntry(id);
  }

  handleSubmit(entry) {
    this.props.editEntry(entry, this.props.history);
  }

  render() {
    const { entry } = this.props;

    console.log(this.props.entry);
    return (
      <div className="create_container">
        <Nav history={this.props.history} />

        {entry ? (
          <Form
            onSubmit={values => this.handleSubmit(values)}
            className="create_form"
          >
            <div className="top">
              <button type="submit">Save</button>

              <Text
                field="title"
                initialValue={entry.title}
                className="create_form-title"
              />
            </div>

            <div className="create_form-labels">
              <Text field="label" initialValue={entry.label} />
              <p>{}</p>
            </div>

            <TextArea
              field="content"
              initialValue={entry.content}
              className="create_form-body"
            />
          </Form>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    entry: state.journal.entry_view,
  };
};

export default connect(
  mapStateToProps,
  { editEntry, oneEntry }
)(Edit);
