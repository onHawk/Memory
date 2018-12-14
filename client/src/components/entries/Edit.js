import React, { Component } from 'react';
import { Form, Text, TextArea } from 'informed';

import { connect } from 'react-redux';

import { editEntry, oneEntry } from '../../actions/EntryActions';

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
      <div>
        {entry ? (
          <Form onSubmit={values => this.handleSubmit(values)}>
            <label>Title</label>
            <Text field="title" initialValue={entry.title} />

            <label>label</label>
            <Text field="label" initialValue={entry.label} />

            <label>write something</label>
            <TextArea field="content" initialValue={entry.content} />

            <button type="submit">Finish</button>
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
