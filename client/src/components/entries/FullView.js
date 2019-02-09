import React, { Component } from 'react';

import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

import { oneEntry, deleteEntry } from '../../actions/EntryActions';

import Nav from '../Nav';
import Entry from './Entry';
// import Edit from './Edit';

class FullView extends Component {
  componentWillMount() {
    const id = this.props.match.params.id;

    // console.log(id);
    this.props.oneEntry(id);
    // console.log(this.props.entry);
  }

  render() {
    const { entry } = this.props;
    const { id } = this.props.match.params;
    console.log(entry);
    return (
      <div>
        <Nav history={this.props.history} />
        {entry ? (
          entry._id === id ? (
            <div className="view_container">
              <Entry
                id={entry._id}
                title={entry.title}
                body={entry.content}
                createdOn={entry.createdOn}
                label={entry.label}
                history={this.props.history}
              />
            </div>
          ) : (
            'loading'
          )
        ) : (
          'loading'
        )}{' '}
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
  { oneEntry, deleteEntry }
)(FullView);
