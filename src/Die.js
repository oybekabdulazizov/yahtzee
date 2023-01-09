import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  constructor(props) {
    super(props);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.props.toggleDie(this.props.idx);
  }

  render() {
    let classDie = 'Die ' + (this.props.locked ? 'Die-locked' : '');
    return (
      <button onClick={this.handleToggle} className={classDie}>
        {this.props.val}
      </button>
    );
  }
}

export default Die;
