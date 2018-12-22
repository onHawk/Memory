import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

import { allEntries } from '../actions/EntryActions';

import Entries from './entries/AllEntries';

import { TiPlusOutline, TiPencil, FaFeatherAlt } from 'react-icons/fa';
import ReactDOM from 'react-dom';

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
      <div className="homepage">
        <div className="title_bar">
          <h2>{this.props.user.username}</h2>
          <div
            onClick={() => this.props.logout(this.props.history)}
            className="logout"
          >
            <p>Log out</p>
          </div>
        </div>

        <div className="content">
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

          <div className="nav">
            <Link to="/create" style={{ justifyContent: 'center' }}>
              <div className="nav-create">
                <FaFeatherAlt />
                <p>create</p>
              </div>
            </Link>
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
