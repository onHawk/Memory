import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

import { allEntries } from '../actions/EntryActions';

import Entries from './entries/AllEntries';
import Nav from './Nav';

// import { TiPlusOutline, TiPencil, FaFeatherAlt } from 'react-icons/fa';
// import ReactDOM from 'react-dom';

class HomePage extends Component {
  state = {
    scrolled: false,
  };

  componentWillMount() {
    this.props.allEntries();
  }
  // componentDidMount() {
  //   window.addEventListener('scroll', this.handleScroll);
  // }

  // handleScroll = e => {
  //   if (e) {
  //     this.setState({ scrolled: !this.state.scrolled });
  //   }
  //   console.log(ReactDOM);
  // };

  render() {
    const { entries, user } = this.props;
    console.log(user);
    return (
      <div>
        <Nav history={this.props.history} />

        <div className="content">
          <div>
            <p>{entries.length}</p>
          </div>
          <div className="content-list">
            {entries ? (
              entries.map((e, i) => {
                return (
                  <Entries
                    key={i}
                    title={e.title}
                    body={e.content}
                    label={e.label}
                    id={e._id}
                  />
                );
              })
            ) : (
              <p> loading</p>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToprops = state => {
  return {
    user: state.auth.user,
    entries: state.journal.entries,
    usersentries: state.auth.user_entries,
  };
};

export default connect(
  mapStateToprops,
  { logout, allEntries }
)(HomePage);
