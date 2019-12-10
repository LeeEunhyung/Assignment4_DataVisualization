import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navi from './components/Navi';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  componentDidMount() {
  }

  _test = async() => {
    await axios({
      url: '/test',
      method: 'POST'
    }).then(response => response.data).then((data) => {
      alert(data);
    });
  }

  render() {
    return(
      <div className = "App">
        <div id = "top">
          <Header></Header>
        </div>
        <div id = "middle">
          <div id = "Navi">
            <Navi></Navi>
          </div>
          <div id = "Main">
            <Main></Main>
          </div>
        </div>
        <div id = "bottom">
          <Footer></Footer>
        </div>
      </div>
    )
  }
}

export default App;
