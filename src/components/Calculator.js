import React from 'react';
import Key from './Key';
import {keyboard} from "../constants";

class Calculator extends React.Component {
    constructor(props) {
        super(props);

        this.solve = this.solve.bind(this);
    }

    componentDidMount() {
        document.addEventListener('keydown', this.props.handleKeyPress);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.props.handleKeyPress);
    }

    solve() {
        this.props.solve(this.props.formula);
    }

    render() {
        const keyboardComponent = keyboard.map((obj, index) => {
            const handleClick = obj.name !== '=' ? this.props.handleClick : this.solve;
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
            <div className={'container'} id={'calculator'}>
                <div>
                    <div id={'formula'}>{this.props.formula}</div>
                    <div id={'display'}>{this.props.input}</div>
                    {keyboardComponent}
                </div>
            </div>
        );
    }
}

export default Calculator;