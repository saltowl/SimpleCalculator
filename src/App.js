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
          <Calculator currentString={this.props.currentString} result={this.props.result}/>
        </div>
    );
  }
}

export default App;
