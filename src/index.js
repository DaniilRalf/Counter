import React from "react";
import ReactDOM  from "react-dom";

// import {Component} from 'react';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: this.props.counter
    }
  }
  
  numInc = () => {
    if(this.state.number >= 10){}else{
        this.setState({
        number: this.state.number + 1,
      })
    }  
  }
  numDec = () => {
    if(this.state.number <= -10){}else{
        this.setState({
        number: this.state.number - 1,
      })
    }
  }
  Reset = () => {
    this.setState({
      number: this.props.counter
    })
  }
  Rnd = () =>{
    // max = Math.ceil(11);
    // min = Math.ceil(-10);
    this.setState({
      number: Math.ceil(Math.random() * (10 - (-11)) + (-11)),
    })
  }
  
  
  

  render() {
    // const {counter} = this.props;
    return (
      <div class="app">
        <div class="counter">{this.state.number}</div>
        <div class="controls">
          <button onClick={this.numInc}>INC</button>
          <button onClick={this.numDec}>DEC</button>
          <button onClick={this.Rnd}>RND</button>
          <button onClick={this.Reset}>RESET</button>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App counter={0}/>, document.getElementById('app'));

