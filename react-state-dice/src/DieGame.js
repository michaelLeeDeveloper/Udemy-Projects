import React, { Component } from 'react'
import "./DieGame.css"
import Dice from "./Dice"

class DieGame extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1: 1,
            die2: 1,
            isRolling: false
        }
        this.rollDice = this.rollDice.bind(this);
    }

    rollDice() {
        this.setState({
            isRolling: true
        });
        setTimeout(() => {
            this.setState({
                die1: Math.floor(Math.random() * 6) + 1,
                die2: Math.floor(Math.random() * 6) + 1,
                isRolling: false
            });
        }, 1000)
    }

    render() {
        return (
            <div>
                <div className={this.state.isRolling ? "Dice-Rolling Dice-Game" : "Dice-Game"}>
                    <Dice number={this.state.die1} />
                    <Dice number={this.state.die2} />
                </div>
                <div>
                    <button className="Dice-Button" onClick={this.rollDice} disabled={this.state.isRolling}>{this.state.isRolling ? "Rolling..." : "Roll Die"}</button>
                </div>
            </div>
        );
    }
}

export default DieGame;