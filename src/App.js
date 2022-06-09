import './App.css';
import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    num1: '',
    num2: '',
    total: '',
    operator: ''
  }

  //helper methods
  handleSetNum = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleCalculate = (e) => {
    e.preventDefault()
    let num1 = Number(this.state.num1)
    let num2 = Number(this.state.num2)
    console.log(num1)
    // let sum = num1 + num2
    if (this.state.operator === '+') {
      this.setState({ total: num1 + num2 })
    } else if (this.state.operator === '-') {
      this.setState({ total: num1 - num2 })
    } else if (this.state.operator === '/') {
      this.setState({ total: num1 / num2 })
    } else if (this.state.operator === '*') {
      this.setState({ total: num1 * num2 })
    }
  }

  render() {
    return (
      <div className="caclulator">
        <h1>Calculate with React!</h1>

        <form onSubmit={this.handleCalculate}>
          <input type="number"
            name="num1"
            value={this.state.num1}
            onChange={this.handleSetNum}
          />
          <button
            onClick={() => {
              this.setState({ operator: '+' })
            }}
          >
            +
          </button>

          <button
            onClick={() => {
              this.setState({ operator: "-" })
            }}
          >
            -
          </button>

          <button
            onClick={() => {
              this.setState({ operator: "/" })
            }}
          >
            /
          </button>

          <button
            onClick={() => {
              this.setState({ operator: "*" })
            }}
          >
            *
          </button>

          <input type="number"
            name="num2"
            value={this.state.num2}
            onChange={this.handleSetNum}
          />
          <button>=</button>
          <h3>{this.state.total}</h3>
        </form>
      </div>
    );
  }

}

export default Calculator;
