import React, { Component } from 'react';

import ImageCard from './components/ImageCard.js';
import ImageList from './components/ImageList.js';
import PixelBox from './components/PixelBox.js';

import './css/App.css';

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    countUp() {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {

        var tileArray = new Array(225).fill(0, 0);

        return (
            <div className="App">
                {/*{this.state.count >= 150 ?
                    <PixelBox/>
                    :
                    ""}*/}

                <div className="image-section">
                    {tileArray.map(tile => <ImageCard countUp={this.countUp.bind(this)}/>)}
                </div>

                <div className="move-around">
                    FILL ME UP
                </div>
            </div>
        );
    }
}

export default App;
