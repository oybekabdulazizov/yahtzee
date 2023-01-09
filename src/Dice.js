import React, { Component } from 'react';
import Die from './Die';

class Dice extends Component {
  renderedDice() {
    return this.props.dice.map((dieVal, idx) => (
      <Die
        toggleDie={this.props.toggleDie}
        val={dieVal}
        idx={idx}
        key={idx}
        locked={this.props.locked[idx]}
      />
    ));
  }

  render() {
    return <div>{this.renderedDice()}</div>;
  }
}

export default Dice;
