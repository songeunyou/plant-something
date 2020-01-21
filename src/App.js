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
                {/*<div id="text" className="text-section">
                    <h1>Full Face</h1>
                    <p>
                        Do you know the thing you do with your eyes when you squint so your vision becomes blurry? You have to try that.
                    </p>
                    <p>
                        Her eyes become just Eyes.
                    </p>
                    <p>
                        Her mouth becomes just a Mouth.
                    </p>
                    <p>
                        Her face is no longer Her. It's a pile of mismatched pieces that somehow come together.
                    </p>
                    <p>
                        These pieces never hurt you. Her eyes never hurt you, her nose never hurt you, her smile never hurt you, her body never hurt you. The glue that put these pieces together and made them a person hurt you, because you were never hurt by her beauty, you were hurt by her worth. You were hurt by the thing that you felt stole away your own worth. You were hurt by the magnetic power that draws eyes away from you and towards her. You were hurt by the glue, the incomprehensible Something that makes beauty compelling and poisonous, the Something that means you see a person rather than a vessel. This is the thing that makes you compare the glowing, confident, powerful person inside your  body to her.
                    </p>
                </div>*/}

                <div className="image-section">
                    {ImageList.map(image => <ImageCard image={image.img}/>)}
                </div>
            </div>
        );
    }
}

export default App;
