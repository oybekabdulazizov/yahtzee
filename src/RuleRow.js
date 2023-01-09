import React, { Component } from 'react';

class RuleRow extends Component {
  render() {
    const { name, description, score, doScore } = this.props;
    return (
      <tr onClick={doScore}>
        <td>{name}</td>
        <td>{description}</td>
        <td>{score}</td>
      </tr>
    );
  }
}

export default RuleRow;
