import React, { Component } from 'react';

class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                {this.props.clickedSubMenu}
            </div>
        );
    }
}

export default Main;