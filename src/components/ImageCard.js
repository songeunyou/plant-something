import React, { Component } from 'react';

class ImageCard extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="image-card">
                <img src={this.props.image}/>
            </div>
        );
    }
}

export default ImageCard;
