import React from 'react';
import './index.css';

export class Square extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: null
        }
    }

    render() {
        return (
            <button className="square"
                    onClick={(event) => this.setState({value: 'X'})}>
                {this.state.value}
            </button>
        );
    }
}
