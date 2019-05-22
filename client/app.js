import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PlayerList from './components/player-list';

export default class App extends Component {
  render() {
    return (
      <Router>
        <div className='app-container'>
          <Route path='/playerList' component={Teams} />
        </div>
      </Router>
    );
  }
}
