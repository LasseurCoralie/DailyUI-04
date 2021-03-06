import React, { Component } from 'react';
import { evaluate } from 'mathjs';

import './App.css';

import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: ""
    };
  };

  addToInput = (val) => {
    // on dit que la valeur de l'input est égale à la valeur initiale + la valeur entrée
    this.setState({input: this.state.input + val});
  };

  handleEqual = () => {
    this.setState({input: evaluate(this.state.input)})
  };

  render(){
    return (
      <div className="app">
        <div className="wrapper">
          <div className="title">
            <h1 className="title">calculator</h1>
          </div>
          <div className="calc-wrapper">
            <Input input={this.state.input} />
            <div className="btn-zn">
              <div className="btn">
                <div className="row">
                  <ClearButton handleClear={() => this.setState({input: ''})}>AC</ClearButton>
                  <Button handleClick={this.addToInput}>/</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>7</Button>
                  <Button handleClick={this.addToInput}>8</Button>
                  <Button handleClick={this.addToInput}>9</Button>
                  <Button handleClick={this.addToInput}>*</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>4</Button>
                  <Button handleClick={this.addToInput}>5</Button>
                  <Button handleClick={this.addToInput}>6</Button>
                  <Button handleClick={this.addToInput}>-</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput}>1</Button>
                  <Button handleClick={this.addToInput}>2</Button>
                  <Button handleClick={this.addToInput}>3</Button>
                  <Button handleClick={this.addToInput}>+</Button>
                </div>
                <div className="row">
                  <Button handleClick={this.addToInput} typeClass="zero-btn">0</Button>
                  <Button handleClick={this.addToInput}>.</Button>
                  <Button handleClick={() => this.handleEqual()} typeClass="equal-btn">=</Button>
                </div>
              </div>
              <div className="background-zn"></div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
