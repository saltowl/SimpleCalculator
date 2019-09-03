import React from 'react';

class Key extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.name !== '=') {
            this.props.handleClick(this.props.name);
        } else {
            this.props.handleClick();
        }
    }

    render() {
        return (
            <button id={this.props.id} className={'key ' + this.props.class} onClick={this.handleClick}>{this.props.name}</button>
        );
    }
}

export default Key;