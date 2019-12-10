import React, { Component } from 'react';

import './css/Header.css';
import logo from './img/logo.png';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
          clickedDB: 'korea',
          click1: 'select',
          click2: 'nonselect'
        };
      }
    
      componentDidMount() {
      }
      
      ChangeDB = (e) => {
        if(e.currentTarget.value === "korea") {
            this.setState({
                clickedDB: 'korea',
                click1: 'select',
                click2: 'nonselect'
            });
        } else if (e.currentTarget.value === "chicago") {
            this.setState({
                clickedDB: 'chicago',
                click1: 'nonselect',
                click2: 'select'
            });
        }
        
        this.props.ChangeDB(this.state.clickedDB);
      }

      render() {
        return (
            <div className = "Header">
                <div id = "logo">
                    <img src = {logo} alt = "logo"></img>
                </div>
                <div id = "header_menu">
                    <button type="button" id={this.state.click1} value="korea" onClick = {this.ChangeDB}>Traffic Accidents in Korea</button>
                    <button type="button" id={this.state.click2} value="chicago" onClick = {this.ChangeDB}>Chicago Crimes</button>
                </div>
            </div>
        );
    }
}

export default Header;