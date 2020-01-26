import React, { Component } from 'react';
import Plant from './Plant.js';

import heart from '../media/heart.png';
import imageList from './ImageList.js';
import colorList from './ColorList.js';

class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            stage: 0,
            color: "black",
            image: ""
        };
    }

    random() {
        this.props.countUp();
        this.randomColor();
        this.setState({
            stage: this.state.stage + 1
        })
    }

    randomColor() {
        const min=0;
        const max=52;
        const random = Math.round(Math.random() * (+max - +min) + +min);
        var color = colorList[random].color;

        this.setState({
            color: color,
            mode: "solid"
        });
    }

    render() {
        let {color, stage} = this.state;

        const imageCardStyle = {
            opacity: stage === 0 ? 0 : 1
        }

        const imageCardColor = {
            background: color
        }

        return (
            <div className="image-card"
                style={imageCardStyle}
                onMouseEnter={() => this.random()}
                onClick={() => this.random()}>
                
                <Plant/>

                <div className="box front"/>
                <div className="box right"/>
                <div className="box top"
                    style={imageCardColor}/>
            </div>
        );
    }
}

export default ImageCard;
