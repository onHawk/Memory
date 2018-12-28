import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './sass/App.scss';

import Landing from './components/Landing';
import Login from './components/accounts/Login';
import Register from './components/accounts/Register';

import HomePage from './components/Home';
import FullView from './components/entries/FullView';
import Create from './components/entries/Create';
import Edit from './components/entries/Edit';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/register" component={Register} />
          <Route path="/login" component={Login} />
          <Route path="/home" component={HomePage} />
          <Route path="/entry/:id" component={FullView} />
          <Route path="/create" component={Create} />
          <Route path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    );
  }
}

export default App;
/* 
 * 
  <div className="App">
  <header className="App-header">
  <img src={logo} className="App-logo" alt="logo" />
  </header>
  </div> 
 * 
*/
