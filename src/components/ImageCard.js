import React, { Component } from 'react';
import heart from '../media/heart.png';
import imageList from './ImageList.js';
import colorList from './ColorList.js';

class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            mode: "black",
            color: "black",
            image: ""
        };
    }

    random() {
        if (this.state.mode === "black") {
            //black --> photo
            this.randomFace();
        } else if (this.state.mode === "photo") {
            //photo --> solid
            this.randomColor();
        } else {
            this.randomFace();
        }
    }

    randomFace() {
        var face;

        const min=0;
        const max=127;
        const random = Math.round(Math.random() * (+max - +min) + +min);
        face = imageList[random].img;

        this.setState({
            image: face,
            mode: "photo"
        });
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
        let {color, mode} = this.state;

        const imageCardStyle = {
            background: color
        }

        const imageStyle = {
            opacity: mode === "photo" ? 0 : 1
        }

        return (
            <div className="image-card"
                style={imageCardStyle}
                onMouseOver={() => this.random()}
                onClick={() => this.random()}>
                <img src={this.state.image} style={imageStyle} alt=""/>
            </div>
        );
    }
}

export default ImageCard;
