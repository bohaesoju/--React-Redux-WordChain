import React, { Component } from 'react';
import './App.css';
import WordContainer from './containers/WordContainer';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div>
          <WordContainer />
        </div>
      </div>
    );
  }
}

export default App;
