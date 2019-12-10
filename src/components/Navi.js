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
            _title = <div id = "title"><p>Traffic Accident in Korea</p></div>;
        } else if (this.props.clickedDB === 'chicago') {
            _title = <div id = "title"><p>Chicago Crimes</p></div>;
        }

        return _title;
    }

    SetSubMenu = () => {
        var _subMenu = '';

        if(this.props.clickedDB === 'korea') {
            _subMenu = 
                <div id = "subMenu">
                    <input type = "button" id = "line1" value = "교통사고 발생건수와 사상자수" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" id = "bar2" value = "사고유형별 발생건수" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" id = "pie1" value = "사고유형별 사상자수 세부 구성" onClick = {this.ChangeSubMenu}></input>
                    <input type = "button" id = "scatter_plot1" value = "지역별 사상자 발생률" onClick = {this.ChangeSubMenu}></input>
                </div>;
        } else if (this.props.clickedDB === 'chicago') {
            _subMenu = 
                <div id = "subMenu">
                    <input type = "button" id = "DataLoad" value = "DataLoad" onClick = {this.ChangeSubMenu}></input>
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