import React from 'react';

export default function RuleRow({ name, description, score, doScore }) {
  return (
    <tr onClick={doScore}>
      <td>{name}</td>
      <td>{description}</td>
      <td>{score}</td>
    </tr>
  );
}
