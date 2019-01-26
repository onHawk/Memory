import React, { Component } from 'react';

import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { logout } from '../actions/AuthActions';

import { allEntries } from '../actions/EntryActions';

import moment from 'moment';

import Entries from './entries/AllEntries';
import Nav from './Nav';

// import { TiPlusOutline, TiPencil, FaFeatherAlt } from 'react-icons/fa';
// import ReactDOM from 'react-dom';

class HomePage extends Component {
  state = {
    offset: 0,
  };

  componentDidMount() {
    this.props.allEntries();
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = e => {
    this.setState({ offset: window.pageYOffset });

    // console.log(this.state.offset);
  };

  render() {
    const { entries, user } = this.props;
    // console.log(user);
    const today = moment(Date.now()).format('MMMM D YYYY');

    return (
      <div>
        <Nav history={this.props.history} />

        <div className="content">
          <div className={this.state.offset === 0 ? 'no_shadow' : 'shadow'}>
            <p style={{ textAlign: 'center', marginTop: '1rem' }}>{today}</p>
          </div>
          <div style={{ width: '100%' }}>
            <p>Total entries: {entries.length}</p>
          </div>
          <div className="content-list">
            {entries ? (
              entries.map((e, i) => {
                /**Date formatting */
                const day = moment(e.createdOn).format('ddd');
                const date = moment(e.createdOn).format('D');
                const month = moment(e.createdOn).format('MMM');
                /**************** */
                return (
                  <Entries
                    key={i}
                    title={e.title}
                    body={e.content}
                    label={e.label}
                    day={day}
                    date={date}
                    month={month}
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
