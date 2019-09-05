import React from 'react';
import Key from './Key';
import {keyboard} from "../constants";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.props.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handleKeyPress);
    }

    render() {
        const keyboardComponent = keyboard.map((obj, index) => {
            const handleClick = obj.name !== '=' ? this.props.handleClick : this.props.solve;
            let keyCode = obj.keyCode;
            keyCode += obj.additionalKey ? obj.additionalKey : '';
            return (
                <Key
                    name={obj.name}
                    id={obj.id}
                    class={obj.className}
                    key={index}
                    keyCode={keyCode}
                    handleClick={handleClick}
                />);
        });

        return (
            <div id={'calculator'}>
                <div id={'screen'}>
                    <div id={'formula'}>{this.props.formula}</div>
                    <div id={'display'}>{this.props.input}</div>
                </div>
                {keyboardComponent}
            </div>
        );
    }
}

export default Calculator;