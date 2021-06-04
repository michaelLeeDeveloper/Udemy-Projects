import React, { Component } from 'react'
import "./box.css"


class Box extends Component {
    static defaultProps = {
        allColors: [
            "purple", "magenta", "pink", "lavender", "blueViolet", "darkMagenta", "darkViolet", "darkOrchid", "orchid"
        ]
    }

    constructor(props) {
        super(props);
        this.state = {
            color: "purple"
        };
        this.handleClick = this.handleClick.bind(this);
    }

    random(arr) {
        let index = Math.floor(Math.random() * arr.length);
        return arr[index];
    }

    changeColor() {
        let newColor = this.random(this.props.allColors);
        do {
            this.setState({
                color: newColor
            })
        } while (
            newColor === this.state.color
        )
    }

    handleClick() {
        this.changeColor();
    }

    render() {
        return (
            <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}></div>
        );
    }
}

export default Box;