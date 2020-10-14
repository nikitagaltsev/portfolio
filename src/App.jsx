import React from 'react';
import Layout from './hoc/Layout/Layout';
import Header from './containers/Header/Header';
import Primary from './components/Primary';
import Works from './containers/Works/Works';
import About from './containers/About/About';
import './App.scss';


class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header/>
        <Primary/>
        <Works/>
        <About/>
      </Layout>
    )
  }
}
 
export default App;