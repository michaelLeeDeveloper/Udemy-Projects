import React, { Component } from 'react';
import Box from "./box";
import "./BoxContainer.css"


class BoxContainer extends Component {
    static defaultProps = {
        numBoxes: 6
    }



    render() {
        const boxes = Array.from({ length: this.props.numBoxes }).map(() => {
            return <Box />
        })

        return (
            <div className="BoxContainer" >
                { boxes}
            </div>
        )
    }
}


export default BoxContainer;