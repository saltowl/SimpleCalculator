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
              result={this.props.result}
              input={this.props.input}
              handleClick={this.props.handleClick}
              solve={this.props.solve}
          />
        </div>
    );
  }
}

export default App;
