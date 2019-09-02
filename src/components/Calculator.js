import React from 'react';
import Key from './Key';
import Display from './Display';
import {keyboard} from "../constants";

class Calculator extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const keyboardComponent = keyboard.map((obj, index) => {
            return (<Key name={obj.name} id={obj.id} class={obj.className} key={index}/>);
        });

        return (
            <div className={'container'} id={'calculator'}>
                <div>
                    <Display currentString={this.props.currentString} result={this.props.result}/>
                    <input onChange={this.handleChange} value={this.props.result}/>
                    {keyboardComponent}
                </div>
            </div>
        );
    }
}

export default Calculator;