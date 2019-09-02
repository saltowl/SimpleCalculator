import React from 'react';

class Key extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <button id={this.props.id} className={'key ' + this.props.class}>{this.props.name}</button>
        );
    }
}

export default Key;