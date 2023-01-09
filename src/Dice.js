import React, { Component } from 'react';
import Die from './Die';

class Dice extends Component {
  renderedDice() {
    const dice = this.props.dice.map((d, i) => <Die val={d} />);
    return dice;
  }

  render() {
    return <div>{this.renderedDice()}</div>;
  }
}

export default Dice;
