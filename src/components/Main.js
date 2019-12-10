import React, { Component } from 'react';
import axios from 'axios';
import * as d3 from 'd3';
import * as d3g from 'd3-geo';
import logo from './img/logo.png';

class Main extends Component {
    constructor(props) {
        super(props)
    }

    ArrestLine = (data) => {
        d3.selectAll('svg').remove()
        var svg = d3.select(".line1")
            .append("svg")
            .attr("width", 930)
            .attr("height", 400)
            .attr('transform', 'translate(70,50)')
        svg.append("line")
            .attr("x1", 50)
            .attr("y1", 300)
            .attr("x2", 1000)
            .attr("y2", 300)
            .style("stroke", "black")
            .style("stroke-width", 0.6)

        svg.append("line")
            .attr("x1", 50)
            .attr("y1", 300)
            .attr("x2", 50)
            .attr("y2", 30)
            .style("stroke", "black")
            .style("stroke-width", 0.6)

        for (var i = 0; i < 6; i++) {
            svg.append("line") // y 눈금
                .attr("x1", 50)
                .attr("y1", 300 - i * 45)
                .attr("x2", 55)
                .attr("y2", 300 - i * 45)
                .style("stroke", "black")
                .style("stroke-width", 0.6)
                .attr('transform', 'translate(0,-25)')
        }

        for (var i = 0; i < 3; i++) {

            svg.append("line") // y 눈금
                .attr("x1", 55)
                .attr("y1", 255 - i * 90)
                .attr("x2", 60)
                .attr("y2", 255 - i * 90)
                .style("stroke", "black")
                .style("stroke-width", 0.6)
                .attr('transform', 'translate(0,-25)')
        }

        svg.append('text')
            .attr('x', 900)
            .attr('y', 320)
            .text("Year")
            .style('font-size', '14px')
            .attr("font-family", "sans-serif")
            .attr("fill", "gray")

        svg.append('text')
            .attr('x', 10)
            .attr('y', 20)
            .text("Arrest Rate")
            .style('font-size', '14px')
            .attr("font-family", "sans-serif")
            .attr("fill", "gray")

        data.forEach((d, i) => {

            svg.append("line") // x 눈금
                .attr("x1", (i + 1) * 90)
                .attr("y1", 300)
                .attr("x2", (i + 1) * 90)
                .attr("y2", 290)
                .style("stroke", "black")
                .style("stroke-width", 0.6)
                .attr('transform', 'translate(50,0)')

            svg.append('text') // x 레전드 
                .attr('x', i * 90 + 45)
                .attr('y', 325)
                .text((i + 9) + "'")
                .style('font-size', '14px')
                .attr("font-family", "sans-serif")
                .attr("fill", "gray")

            svg.append('text') // y 레전드 
                .attr('x', 22)
                .attr('y', 235 - i * 90)
                .text((i + 1) * 10 + '%')
                .style('font-size', '12px')
                .attr("font-family", "sans-serif")
                .attr("fill", "gray")
        })

        svg.append("line") // 평균
            .attr("x1", 50) //25.22
            .attr("y1", 95 - 2.802)
            .attr("x2", 860)
            .attr("y2", 95 - 2.802)
            .style("stroke", "#fc7978")
            .style("stroke-width", 2)

        data.forEach((d, i) => {

            if (i == 9) {
                return;
            }

            var line = svg.append("line")
                .attr("x1", i * 90)
                .attr("y1", (300 - data[i] * 9))
                .attr("x2", (i + 1) * 90)
                .attr("y2", (300 - data[i + 1] * 9))
                .attr("transform", "translate(50,25)")
                .style("stroke", "#96d1c7")
                .style("stroke-width", 3)

            var circle = svg.append('circle')
                .attr('cx', (i + 1) * 90)
                .attr('cy', (300 - data[i + 1] * 9))
                .attr('r', 3)
                .attr("transform", "translate(50,25)")
                .style('fill', '#5eb7b7')
        })

        svg.append('rect')
            .attr('x', 90)
            .attr('y', 260)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill', '#fc7978')

        svg.append('rect')
            .attr('x', 90)
            .attr('y', 240)
            .attr('width', 10)
            .attr('height', 10)
            .style('fill', '#5eb7b7')

        svg.append('text')
            .attr('x', 110)
            .attr('y', 250)
            .text('Annual Data')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg.append('text')
            .attr('x', 110)
            .attr('y', 270)
            .text('Average')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")
    }

    AAR = async () => {

        await axios({
            url: '/aar',
            method: 'POST'
        }).then(response => response.data).then((data) => {
            var dataSet = []
            dataSet.push(data.ar09 * 100)
            dataSet.push(data.ar10 * 100)
            dataSet.push(data.ar11 * 100)
            dataSet.push(data.ar12 * 100)
            dataSet.push(data.ar13 * 100)
            dataSet.push(data.ar14 * 100)
            dataSet.push(data.ar15 * 100)
            dataSet.push(data.ar16 * 100)
            dataSet.push(data.ar17 * 100)
            dataSet.push(data.ar18 * 100)
            this.ArrestLine(dataSet);
        });
    }

    GunPie(data) {
        d3.selectAll('svg').remove()
        var sum_a = 0
        var sum_g = 0
        var data_ave = []

        for (var i = 0; i < 10; i++) {
            sum_a = sum_a + data[i][0]
            sum_g = sum_g + data[i][1]
        }

        data_ave.push(sum_a)
        data_ave.push(sum_g)

        var svg_ave = d3.select(".line1")
            .append("svg")
            .attr("width", 200)
            .attr("height", 300)
            .attr("transform", "translate(200,100)")

        var arc_ave = d3.arc().innerRadius(70).outerRadius(100);

        svg_ave.selectAll("path")
            .data(d3.pie()(data_ave))
            .enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(100,100)")
            .style("fill", function (d, i) {
                return ['#3d84a8', "#abedd8"][i];
            })
            .attr('d', arc_ave)

        svg_ave.append('text')
            .attr('x', 80)
            .attr('y', 90)
            .text('Related')
            .style('font-size', '15px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg_ave.append('rect')
            .attr('x', 60)
            .attr('y', 78)
            .attr('width', 13)
            .attr('height', 13)
            .attr("fill", "#3d84a8")

        svg_ave.append('text')
            .attr('x', 80)
            .attr('y', 120)
            .text('Unrelated')
            .style('font-size', '15px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg_ave.append('rect')
            .attr('x', 60)
            .attr('y', 108)
            .attr('width', 13)
            .attr('height', 13)
            .attr("fill", "#abedd8")

        svg_ave.append('text')
            .attr('x', 55)
            .attr('y', 220)
            .text('< Average >')
            .style('font-size', '15px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        var svg1 = d3.select(".line1")
            .append("svg")
            .attr("width", 100)
            .attr("height", 300)
            .attr("transform", "translate(200,50)")

        var arc1 = d3.arc().innerRadius(20).outerRadius(35);

        svg1.selectAll("path")
            .data(d3.pie()(data[0]))
            .enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,100)")
            .style("fill", function (d, i) {
                return ['#3d84a8', "#abedd8"][i];
            })
            .attr('d', arc1)

        svg1.data(d3.pie()([1, 0]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#abedd8')
            .attr('d', arc1)

        svg1.data(d3.pie()([data[5][0], data[5][1]]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#3d84a8')
            .attr('d', arc1)
        
        svg1.append('text')
            .attr('x', 25)
            .attr('y', 150)
            .text('< 2009 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg1.append('text')
            .attr('x', 25)
            .attr('y', 250)
            .text('< 2014 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        var svg2 = d3.select(".line1")
            .append("svg")
            .attr("width", 100)
            .attr("height", 300)
            .attr("transform", "translate(200,50)")

        svg2.selectAll("path")
            .data(d3.pie()(data[1]))
            .enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,100)")
            .style("fill", function (d, i) {
                return ['#3d84a8', "#abedd8"][i];
            })
            .attr('d', arc1)

        svg2.data(d3.pie()([1, 0]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#abedd8')
            .attr('d', arc1)

        svg2.data(d3.pie()([data[6][0], data[6][1]]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#3d84a8')
            .attr('d', arc1)
        
        svg2.append('text')
            .attr('x', 25)
            .attr('y', 150)
            .text('< 2010 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg2.append('text')
            .attr('x', 25)
            .attr('y', 250)
            .text('< 2015 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        var svg3 = d3.select(".line1")
            .append("svg")
            .attr("width", 100)
            .attr("height", 300)
            .attr("transform", "translate(200,50)")

        svg3.selectAll("path")
            .data(d3.pie()(data[2]))
            .enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,100)")
            .style("fill", function (d, i) {
                return ['#3d84a8', "#abedd8"][i];
            })
            .attr('d', arc1)

        svg3.data(d3.pie()([1, 0]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#abedd8')
            .attr('d', arc1)

        svg3.data(d3.pie()([data[7][0], data[7][1]]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#3d84a8')
            .attr('d', arc1)

        svg3.append('text')
            .attr('x', 25)
            .attr('y', 150)
            .text('< 2011 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg3.append('text')
            .attr('x', 25)
            .attr('y', 250)
            .text('< 2016 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        var svg4 = d3.select(".line1")
            .append("svg")
            .attr("width", 100)
            .attr("height", 300)
            .attr("transform", "translate(200,50)")

        svg4.selectAll("path")
            .data(d3.pie()(data[3]))
            .enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,100)")
            .style("fill", function (d, i) {
                return ['#3d84a8', "#abedd8"][i];
            })
            .attr('d', arc1)

        svg4.data(d3.pie()([1, 0]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#abedd8')
            .attr('d', arc1)

        svg4.data(d3.pie()([data[8][0], data[8][1]]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#3d84a8')
            .attr('d', arc1)

        svg4.append('text')
            .attr('x', 25)
            .attr('y', 150)
            .text('< 2012 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg4.append('text')
            .attr('x', 25)
            .attr('y', 250)
            .text('< 2017 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        var svg5 = d3.select(".line1")
            .append("svg")
            .attr("width", 100)
            .attr("height", 300)
            .attr("transform", "translate(200,50)")

        svg5.selectAll("path")
            .data(d3.pie()(data[4]))
            .enter()
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,100)")
            .style("fill", function (d, i) {
                return ['#3d84a8', "#abedd8"][i];
            })
            .attr('d', arc1)

        svg5.data(d3.pie()([1, 0]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#abedd8')
            .attr('d', arc1)

        svg5.data(d3.pie()([data[9][0], data[9][1]]))
            .append("path")
            .attr("class", "pie")
            .attr("transform", "translate(50,200)")
            .style("fill", '#3d84a8')
            .attr('d', arc1)

        svg5.append('text')
            .attr('x', 25)
            .attr('y', 150)
            .text('< 2013 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")

        svg5.append('text')
            .attr('x', 25)
            .attr('y', 250)
            .text('< 2018 >')
            .style('font-size', '12px')
            .attr("font-family", "sans-serif")
            .attr("fill", "dark gray")
    }

    GRP = async () => {

        await axios({
            url: '/grp',
            method: 'POST'
        }).then(response => response.data).then((data) => {
            var dataSet = [[], [], [], [], [], [], [], [], [], []]
            dataSet[0].push(data.gr09)
            dataSet[0].push(data.ar09)
            dataSet[1].push(data.gr10)
            dataSet[1].push(data.ar10)
            dataSet[2].push(data.gr11)
            dataSet[2].push(data.ar11)
            dataSet[3].push(data.gr12)
            dataSet[3].push(data.ar12)
            dataSet[4].push(data.gr13)
            dataSet[4].push(data.ar13)
            dataSet[5].push(data.gr14)
            dataSet[5].push(data.ar14)
            dataSet[6].push(data.gr15)
            dataSet[6].push(data.ar15)
            dataSet[7].push(data.gr16)
            dataSet[7].push(data.ar16)
            dataSet[8].push(data.gr17)
            dataSet[8].push(data.ar17)
            dataSet[9].push(data.gr18)
            dataSet[9].push(data.ar18)
            this.GunPie(dataSet);
        });
    }

    GunArrest(data) {
        d3.selectAll('svg').remove()
        var r_data = [];
        var u_data = [];

        for(var i = 0; i < 10; i++){
            r_data.push(data[i][0] / data[i][1] * 100)
            u_data.push((data[i][1] - data[i][0]) / data[i][1] * 100)
        }
        
        var svg = d3.select(".line1")
            .append("svg")
            .attr('width', 1000)
            .attr('height', 400)
            .attr("transform", "translate(160,0)")

        for (var i = 0; i < 9; i++) {
            svg.append("line")
                .attr('x1', i * 70 + 115)
                .attr('y1', (350 - u_data[9 - i] * 3))
                .attr('x2', (i + 1) * 70 + 115)
                .attr('y2', (350 - u_data[8 - i] * 3))
                .style("stroke", "#ff6464")
                .style("stroke-width", 2)

            svg.append("line")
                .attr('x1', i * 70 + 115)
                .attr('y1', (350 - r_data[9 - i] * 3))
                .attr('x2', (i + 1) * 70 + 115)
                .attr('y2', (350 - r_data[8 - i] * 3))
                .style("stroke", "#4baea0")
                .style("stroke-width", 2)

            svg.append('circle')
                .attr('cx', i * 70 + 185)
                .attr('cy', (350 - r_data[8 - i] * 3))
                .attr('r', 3)
                .style("fill", '#4baea0')

            svg.append('circle')
                .attr('cx', i * 70 + 185)
                .attr('cy', (350 - u_data[8 - i] * 3))
                .attr('r', 3)
                .style("fill", '#ff6464')
        }

        for (var i = 0; i < 10; i++) {
            svg.append('text')
                .attr('x', 110 + 70 * i)
                .attr('y', 380)
                .text((i + 9) + '\'')
                .style('font-size', '14px')
                .attr("font-family", "sans-serif")
                .attr("fill", '#black')

            svg.append("line")
                .attr("x1", 115 + 70 * i)
                .attr("y1", 350)
                .attr("x2", 115 + 70 * i)
                .attr("y2", 50)
                .style("stroke", "lightgray")
                .style("stroke-width", 0.6)
                .style("stroke-dasharray", 5)
        }

        var xAxis = svg.append("line")
            .attr("x1", 90)
            .attr("y1", 350)
            .attr("x2", 780)
            .attr("y2", 350)
            .style("stroke", "black")
            .style("stroke-width", 0.6)

        var yAxis = svg.append("line")
            .attr("x1", 90)
            .attr("y1", 350)
            .attr("x2", 90)
            .attr("y2", 30)
            .style("stroke", "black")
            .style("stroke-width", 0.6)

        for (var i = 0; i < 3; i++) {
            svg.append("line")
                .attr("x1", 90)
                .attr("y1", 320 - i * 30)
                .attr("x2", 95)
                .attr("y2", 320 - i * 30)
                .style("stroke", "black")
                .style("stroke-width", 0.6)
        }

        for (var i = 0; i < 9; i++) {
            svg.append('text')
                .attr('x', 57)
                .attr('y', 320 - i * 30)
                .text((i + 1) * 10 + "%")
                .style('font-size', '14px')
                .attr("font-family", "sans-serif")
                .attr("fill", 'gray')
        }

        svg.append('rect')
            .attr('x', 120)
            .attr('y', 305)
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', '#4baea0')

        svg.append('rect')
            .attr('x', 120)
            .attr('y', 325)
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', '#ff6464')

        svg.append('text')
            .attr('x', 135)
            .attr('y', 315)
            .text("Firearm-Related Crime")
            .style('font-size', '14px')
            .attr("font-family", "sans-serif")
            .attr("fill", 'gray')

        svg.append('text')
            .attr('x', 135)
            .attr('y', 335)
            .text("Unrelated Crime")
            .style('font-size', '14px')
            .attr("font-family", "sans-serif")
            .attr("fill", 'gray')

        svg.append('text')
            .attr('x', 760)
            .attr('y', 365)
            .text("Year")
            .style('font-size', '11px')
            .attr("font-family", "sans-serif")
            .attr("fill", "gray")

        svg.append('text')
            .attr('x', 60)
            .attr('y', 25)
            .text("Arrest Rate")
            .style('font-size', '11px')
            .attr("font-family", "sans-serif")
            .attr("fill", "gray")
    }

    GRAR = async () => {

        await axios({
            url: '/grar',
            method: 'POST'
        }).then(response => response.data).then((data) => {
            var dataSet = [[], [], [], [], [], [], [], [], [], []]
            dataSet[0].push(data.gr09)
            dataSet[0].push(data.ar09)
            dataSet[1].push(data.gr10)
            dataSet[1].push(data.ar10)
            dataSet[2].push(data.gr11)
            dataSet[2].push(data.ar11)
            dataSet[3].push(data.gr12)
            dataSet[3].push(data.ar12)
            dataSet[4].push(data.gr13)
            dataSet[4].push(data.ar13)
            dataSet[5].push(data.gr14)
            dataSet[5].push(data.ar14)
            dataSet[6].push(data.gr15)
            dataSet[6].push(data.ar15)
            dataSet[7].push(data.gr16)
            dataSet[7].push(data.ar16)
            dataSet[8].push(data.gr17)
            dataSet[8].push(data.ar17)
            dataSet[9].push(data.gr18)
            dataSet[9].push(data.ar18)
            this.GunArrest(dataSet);
        });
    }

    DCR = () => {

    }

    waiting() {
        var svg = d3.select(".line1")
            .append("svg")
            .attr("width", 930)
            .attr("height", 400)

        svg.append('text')
            .attr('x', 400)
            .attr('y', 150)
            .text("Please wait about 3 seconds...")
            .style('font-size', '20px')
            .attr("font-family", "sans-serif")
    }

    componentDidUpdate() {
        this.drawChart();
    }

    drawChart = () => {
        d3.selectAll('svg').remove()

        if (this.props.clickedSubMenu === "년도별 채포율 추이") {
            this.waiting();
            this.AAR();
        }

        if (this.props.clickedSubMenu === "총기관련 범죄 구성율") {
            this.waiting();
            this.GRP();
        }

        if (this.props.clickedSubMenu === "총기관련 범죄 채포율") {
            this.waiting();
            this.GRAR();
        }

        if (this.props.clickedSubMenu === "지역별 범죄 발생 비율 및 위험구역") {
            this.DCR();
        }
    }

    render() {
        return (
            <div>
                <div className="line1"></div>
            </div>
        );
    }
}

export default Main;