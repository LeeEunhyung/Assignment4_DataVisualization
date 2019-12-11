import React, { Component } from 'react';

import './App.css';

import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import Navi from './components/Navi';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clickedDB: "korea",
      clickedSubMenu: ""
    };
  }

  componentDidMount() {
  }

  ChangeDB = (_clickedDB) => {
    if (_clickedDB === "korea") {
      this.setState({
        clickedDB: _clickedDB,
        clickedSubMenu: ""
      });
    } else if (_clickedDB === "chicago") {
        this.setState({
          clickedDB: _clickedDB,
          clickedSubMenu: ""
        });
    }
  }

  ChangeSubMenu = (_clickedSubMenu) => {
    this.setState({
      clickedSubMenu: _clickedSubMenu
    });
  }

  render() {
    return(
      <div className = "App">
        <div id = "top">
          <Header ChangeDB = {this.ChangeDB}></Header>
        </div>
        <div id = "middle">
          <div id = "Navi">
            <Navi clickedDB = {this.state.clickedDB} ChangeSubMenu = {this.ChangeSubMenu}></Navi>
          </div>
          <div id = "Main">
            <Main clickedSubMenu = {this.state.clickedSubMenu}></Main>
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
