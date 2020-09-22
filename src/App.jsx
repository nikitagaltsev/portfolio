import React from 'react';
import Header from './components/Header'
import './App.scss';


class App extends React.Component {
  render() {
    return (
      <div className="body">
        <Header/>
        <main className="main"></main>
      </div>
    )
  }
}

export default App;