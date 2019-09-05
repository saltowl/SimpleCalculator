import React from 'react';
import './App.css';
import Calculator from './components/Calculator';
import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
        <div className="App">
          <Calculator
              formula={this.props.formula}
              input={this.props.input}
              handleClick={this.props.handleClick}
              solve={this.props.solve}
              handleKeyPress={this.props.handleKeyPress}
          />
        </div>
    );
  }
}

export default App;
