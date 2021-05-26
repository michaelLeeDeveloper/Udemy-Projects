import React, { Component } from 'react'
import "./Dice.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from "@fortawesome/free-solid-svg-icons"

class Dice extends Component {

    render() {
        return (
            <span>
                {this.props.number === 1
                    ? <FontAwesomeIcon icon={faDiceOne} className="Dice" />
                    : this.props.number === 2
                        ? <FontAwesomeIcon icon={faDiceTwo} className="Dice" />
                        : this.props.number === 3
                            ? <FontAwesomeIcon icon={faDiceThree} className="Dice" />
                            : this.props.number === 4
                                ? <FontAwesomeIcon icon={faDiceFour} className="Dice" />
                                : this.props.number === 5
                                    ? <FontAwesomeIcon icon={faDiceFive} className="Dice" />
                                    : this.props.number === 6
                                        ? <FontAwesomeIcon icon={faDiceSix} className="Dice" />
                                        : <div></div>
                }
            </span>
        )
    }
}

export default Dice;