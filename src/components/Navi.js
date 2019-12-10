import React, { Component } from 'react';

import './css/Navi.css';

class Navi extends Component {

    constructor(props) {
        super(props)
        this.state = {
        }
    }

    componentDidMount() {
    }

    ChangeSubMenu = (e) => {
        this.props.ChangeSubMenu(e.currentTarget.value);
    }

    SetTitle = () => {
        var _title = '';

        if(this.props.clickedDB === 'korea') {
            _title = <div id = "title">Traffic Accident in Korea</div>;
        } else if (this.props.clickedDB === 'chicago') {
            _title = <div id = "title">Chicago Crimes</div>;
        }

        return _title;
    }

    SetSubMenu = () => {
        var _subMenu = '';

        if(this.props.clickedDB === 'korea') {
            _subMenu = 
                <div id = "subMenu">
                    <input type = "button" value = "DataLoad" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "BarChart" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "LineChart" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "PieChart" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "MapChart" onClick = {this.ChangeSubMenu}></input>
                </div>;
        } else if (this.props.clickedDB === 'chicago') {
            _subMenu = 
                <div id = "subMenu">
                    <input type = "button" value = "DataLoad" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "BarChart" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "LineChart" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "PieChart" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" value = "MapChart" onClick = {this.ChangeSubMenu}></input>
                </div>;
        }

        return _subMenu;
    }

    render() {
        var _title = this.SetTitle();
        var _subMenu = this.SetSubMenu();
        return (
            <div className = "Navi">
                {_title}
                {_subMenu}
            </div>
        );
    }
}

export default Navi;