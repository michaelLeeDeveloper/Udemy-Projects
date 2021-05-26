import React, { Component } from 'react';


class Clicker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: 1
        }
        this.randNum = this.randNum.bind(this);
    }

    randNum() {
        this.setState({
            num: Math.floor(Math.random() * 10) + 1
        })
    }

    render() {
        return (
            <div>
                <h1>Your number is {this.state.num}</h1>
                {this.state.num === 7
                    ? <h2>YOU WIN!!!</h2>
                    : <button onClick={this.randNum}>Generate Random Number</button>
                }
            </div>
        );
    }
}

export default Clicker;