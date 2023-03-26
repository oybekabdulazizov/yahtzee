import React from 'react';

export default function RuleRow({ name, description, score, doScore }) {
  return (
    <tr onClick={score === undefined ? doScore : null}>
      <td>{name}</td>
      <td>{description}</td>
      <td>{score}</td>
    </tr>
  );
}
