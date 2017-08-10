import React, { Component } from 'react';
import RedditList from './components/redditList';
import Header from './components/header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <RedditList />
      </div>
    );
  }
}

export default App;
