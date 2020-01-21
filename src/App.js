import React, { Component } from 'react';
import './css/App.css';

import one from "./Media/1.png";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <div className="App">
                <div>
                <img className="test-square" src={one}/>
                    Blank State
                </div>
            </div>
        );
    }
}

export default App;
