import React, { Component } from 'react';

class FadeInBox extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    render() {
        const min=2;
        const max=10;
        const random = Math.round(Math.random() * (+max - +min) + +min) / 10;

        let {letter, num} = this.props;

        let fadeInBox = {
            animationDelay: `${random}s`
        }

        return(
            <div className="fade-in-box" style={fadeInBox}/>
        );
    }
}

class PixelBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

        return (
            <div className="done">
                <div className="done-row">
                    { arr.map(i => i === 1 || i === 10 ? "" : <FadeInBox num={i}/>) }
                </div>
                <div className="done-row">
                    { arr.map(i => <FadeInBox/>) }
                </div>
                <div className="done-row">
                    { arr.map(i => <FadeInBox/>) }
                </div>
                <div className="done-row">
                    { arr.map(i => i === 1 || i === 10 ? "" : <FadeInBox/>) }
                </div>
                <p>You Made It</p>
            </div>
        );
    }
}

export default PixelBox;
