import React, { Component } from 'react';

import '../css/Plant.css';


class Plant1 extends Component {
    render() {
        return(
            <div className="plant plant1">
                <div className="stem"/>
                <div className="leaf leaf1"/>
                <div className="leaf leaf2"/>
                <div className="flower">
                    <div className="petal1"/>
                    <div className="petal2"/>
                </div>
            </div>
        );
    }
}

class Plant2 extends Component {
    render() {
        return(
            <div className="plant plant2">
                <div className="stem"/>
                <div className="leaf leaf1"/>
                <div className="leaf leaf2"/>
                <div className="flower">
                    <div className="petal1"/>
                    <div className="petal2"/>
                </div>
            </div>
        );
    }
}

class Plant3 extends Component {
    render() {
        return(
            <div className="plant plant3">
                <div className="stem"/>
                <div className="leaf left-leaf">
                    <div className="stripe"/>
                    <div className="stripe"/>
                    <div className="stripe"/>
                </div>
                <div className="leaf right-leaf">
                    <div className="stripe"/>
                    <div className="stripe"/>
                    <div className="stripe"/>
                </div>
                <div className="flower">
                    <div className="notch"/>
                </div>
            </div>
        );
    }
}

class Plant4 extends Component {
    render() {
        return(
            <div className="plant plant4">
                <div className="flower flower1"/>
                <div className="flower flower2"/>
                <div className="flower flower3"/>
                <div className="stem stem1"/>
                <div className="stem stem2"/>
                <div className="stem stem3"/>
                <div className="stem stem4"/>
            </div>
        );
    }
}

class Plant5 extends Component {
    render() {
        return(
            <div className="plant plant5">
                <div className="stem"/>
                <div className="leaf left-leaf">
                    <div className="stripe"/>
                    <div className="stripe"/>
                    <div className="stripe"/>
                </div>
                <div className="leaf right-leaf">
                    <div className="stripe"/>
                    <div className="stripe"/>
                    <div className="stripe"/>
                </div>
                <div className="flower">
                    <div className="petal5"/>
                    <div className="inner-petal petal3"/>
                    <div className="inner-petal petal4"/>
                    <div className="petal petal1"/>
                    <div className="petal petal2"/>
                </div>
            </div>
        );
    }
}

class Plant6 extends Component {
    render() {
        return(
            <div className="plant plant6">
                <div className="flower"/>
                <div className="leaf leaf1"/>
                <div className="leaf leaf2"/>
                <div className="leaf leaf3">
                    <div className="inner-leaf leaf1"/>
                    <div className="inner-leaf leaf2"/>
                </div>
            </div>
        );
    }
}

class Plant extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }

        this.randomPlant = this.randomPlant.bind(this);
    }


        shouldComponentUpdate(nextProps, nextState) {
            return false;
        }

    randomPlant() {
        const min=0;
        const max=5;
        const random = Math.round(Math.random() * (+max - +min) + +min);

        if (random === 0) {
            return <Plant1/>
        } else if (random === 1) {
            return <Plant2/>
        } else if (random === 2) {
            return <Plant3/>
        } else if (random === 3) {
            return <Plant4/>
        } else if (random === 4) {
            return <Plant5/>
        } else if (random === 5) {
            return <Plant6/>
        }
    }

    render() {
        return(
            <div className="plant-container">
                {this.randomPlant()}
            </div>
        );
    }
}

export default Plant;
