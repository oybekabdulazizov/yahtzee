import React, { Component } from 'react';
import './Die.css';

class Die extends Component {
  render() {
    return <button className='Die'>{this.props.val}</button>;
  }
}

export default Die;
