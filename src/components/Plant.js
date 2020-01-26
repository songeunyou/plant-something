import React, { Component } from 'react';

import '../css/Plant.css';


class Plant1 extends Component {
    render() {
        return(
            <div className="plant plant1">
                <div className="stem"/>
                <div className="leaf"/>
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
                <div className="leaf"/>
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
            <div className="plant plant3"/>
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
        const max=2;
        const random = Math.round(Math.random() * (+max - +min) + +min);

        if (random === 0) {
            return <Plant1/>
        } else if (random === 1) {
            return <Plant2/>
        } else if (random === 2) {
            return <Plant3/>
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
