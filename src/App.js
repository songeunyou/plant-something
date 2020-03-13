import React, { Component } from 'react';

import PlantTile from './components/PlantTile.js';

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

        var tileArray = new Array(36).fill(0, 0);

        return (
            <div className="App">
                {this.state.count >= 36 ?
                    <div className="love-it-container">
                        <div className="love-it-move-box">
                            <div className="love-it">I LOVE IT</div>
                            <div className="love-it">I LOVE IT</div>
                        </div>
                    </div>
                    :
                    ""}

                <div className="hover-section"/>

                <div className="image-section">
                    {tileArray.map(tile => <PlantTile countUp={this.countUp.bind(this)}/>)}
                </div>


                <div className="move-around">
                    PLANT SOMETHING
                </div>

                <div className="hover-around">
                    hover around
                </div>

                {this.state.count >= 36 ?
                    <div className="light-container">
                        <div className="light"/>
                        <div className="gradient-left"/>
                        <div className="gradient-right"/>
                    </div>
                    :
                    ""}
            </div>
        );
    }
}

export default App;
