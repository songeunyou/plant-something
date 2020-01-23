import React, { Component } from 'react';

import ImageCard from './components/ImageCard.js';
import ImageList from './components/ImageList.js';
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

        var title = {
            opacity: this.state.count >= 240 ? 1 : 0
        }

        console.log(this.state.count);

        return (
            <div className="App">
                {this.state.count >= 80 ?
                    <div className="done" style={title}>
                        <p>You Made It</p>
                    </div>
                    :
                    ""}

                <div className="image-section">
                    {ImageList.map(image => <ImageCard key={image.img} countUp={this.countUp.bind(this)}/>)}
                    {ImageList.map(image => <ImageCard key={image.img} countUp={this.countUp.bind(this)}/>)}
                </div>

                <div className="move-around">
                    FILL ME UP
                </div>
            </div>
        );
    }
}

export default App;
