import React, { Component } from 'react';

import { connect } from 'react-redux';

import { oneEntry } from '../../actions/EntryActions';

import Entry from './Entry';

class FullView extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;

    this.props.oneEntry(id);
  }

  render() {
    const { entry } = this.props;
    console.log(entry);
    return (
      <div>
        {entry ? (
          <Entry
            title={entry.title}
            body={entry.content}
            createdOn={entry.createdOn}
            label={entry.label}
          />
        ) : null}{' '}
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
  { oneEntry }
)(FullView);
