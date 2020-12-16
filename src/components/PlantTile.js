import React, { Component } from 'react';
import Plant from './Plant.js';

import colorList from './ColorList.js';

class PlantTile extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stage: 0,
            color: "black",
            image: ""
        };
    }

    random() {
        if (this.state.stage === 4) {
            this.props.countUp();
        }
        if (this.state.color === "black") {
            this.randomColor();
        }
        this.setState({
            stage: this.state.stage + 1
        })
    }

    randomColor() {
        const min=0;
        const max=46;
        const random = Math.round(Math.random() * (+max - +min) + +min);
        var color = colorList[random].color;

        this.setState({
            color: color,
            mode: "solid"
        });
    }

    render() {
        let {color, stage} = this.state;

        const plantTileStyle = {
            opacity: stage === 0 ? 0 : 1
        }

        const plantTileColor = {
            background: color
        }

        return (
            <div className="image-card"
                style={plantTileStyle}
                onMouseEnter={() => this.random()}
                onClick={() => this.random()}>

                <div className="box front"/>
                <div className="box right"/>
                <div className="box top"
                    style={plantTileColor}/>

                {stage === 0 || stage === 1 ? "" : <Plant stage={stage}/>}
            </div>
        );
    }
}

export default PlantTile;
