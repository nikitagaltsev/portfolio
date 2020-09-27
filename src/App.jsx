import React from 'react';
import Layout from './hoc/Layout/Layout';
import Header from './containers/Header/Header';
import Primary from './components/Primary'
import './App.scss';


class App extends React.Component {
  render() {
    return (
      <Layout>
        <Header/>
        <Primary/>
      </Layout>
    )
  }
}
 
export default App;