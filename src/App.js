import React, { Component } from 'react';

import ImageCard from './components/ImageCard.js';
import ImageList from './components/ImageList.js';
import './css/App.css';

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
                {ImageList.map(image => <ImageCard image={image.img}/>)}
                    Blank State
                </div>
            </div>
        );
    }
}

export default App;
