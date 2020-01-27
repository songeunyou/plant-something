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
            <div className="plant4">
                <div className={`plant stage-${this.props.level}`}>
                    <div className="flower flower1"/>
                    <div className="flower flower2"/>
                    <div className="flower flower3"/>
                    <div className="stem stem1"/>
                    <div className="stem stem2"/>
                    <div className="stem stem3"/>
                    <div className="stem stem4"/>
                </div>
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
            plant: 0,
            plantExist: false
        }

        this.randomPlant = this.randomPlant.bind(this);
    }

    componentDidMount() {
        this.randomPlant();
    }
    //
    // shouldComponentUpdate(nextProps, nextState) {
    //     return false;
    // }

    randomPlant() {
        const min=0;
        const max=5;
        const random = Math.round(Math.random() * (+max - +min) + +min);

        // this.setState({ plant: random, plantExist: true });
                this.setState({ plant: 3, plantExist: true });
    }

    plant() {
        let {plant} = this.state;
        let {stage} = this.props;

        var level = 0;
        if (stage === 2) {
            // seed
            level = 1;
        } else if (stage === 3) {
            // bud
            level = 2;
        } else if (stage === 4) {
            // medium
            level = 3;
        } else if (stage >= 5) {
            // full grown
            level = 4;
        }

        if (plant === 0) {
            return <Plant1/>
        } else if (plant === 1) {
            return <Plant2/>
        } else if (plant === 2) {
            return <Plant3/>
        } else if (plant === 3) {
            return <Plant4 level={level}/>
        } else if (plant === 4) {
            return <Plant5/>
        } else if (plant === 5) {
            return <Plant6/>
        }
    }

    render() {
        return(
            <div className="plant-container">
                {this.state.plantExist ? this.plant() : ""}
            </div>
        );
    }
}

export default Plant;
