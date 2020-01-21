import React, { Component } from 'react';
import heart from '../media/heart.png';

class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };
    }

    render() {
        const imageCardStyle = {
            cursor: `url(${heart}), auto`,
            opacity: this.state.visible ? 1 : 0
        }
        return (
            <div className="image-card"
                style={imageCardStyle}
                onMouseOver={() => this.setState({ visible: this.state.visible ? false : true })}>
                <img src={this.props.image}/>
            </div>
        );
    }
}

export default ImageCard;
