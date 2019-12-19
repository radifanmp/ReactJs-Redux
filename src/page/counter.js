import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../App.css';

// import action 
import { actionIncrement } from '../_actions/counter'

class Counter extends Component {
  render() {
    return (
      <div className="App-header">
        <h1>COUNTER</h1>
        <h2>{this.props.counter.number}</h2>
        <button onClick={() => this.props.dispatch(actionIncrement())}>Increment</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(Counter)