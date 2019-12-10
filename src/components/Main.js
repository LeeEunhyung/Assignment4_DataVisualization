import React, { Component } from 'react';
import * as d3 from 'd3'

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
        var svg = d3.select(".aaaa")
            .append("svg")
            .attr("width", 500)
            .attr("height", 500)

        svg.append("rect")
            .attr('x', 10)
            .attr('y', 10)
            .attr('width', 10)
            .attr('height', 10)
    }

    render() {
        return (
            <div className = 'aaaa'>
                {this.props.clickedSubMenu}
            </div>
        );
    }
}

export default Main;