import React, { useContext } from 'react';
import { FunctionsContext, StateContext } from './contexts/game.context';

import './ScoreTable.css';

import RuleRow from './RuleRow';
import {
  ones,
  twos,
  threes,
  fours,
  fives,
  sixes,
  threeOfKind,
  fourOfKind,
  fullHouse,
  smallStraight,
  largeStraight,
  yahtzee,
  chance,
} from './Rules';

export default function ScoreTable() {
  const { scores } = useContext(StateContext);
  const { doScore } = useContext(FunctionsContext);

  let totalScore = 0;
  for (const key in scores) {
    let validScore = scores[key];
    if (validScore) {
      totalScore += validScore;
    }
  }

  return (
    <div className='ScoreTable'>
      <section className='ScoreTable-section'>
        <h2 className='ScoreTable-section-header'>Upper</h2>
        <table className='ScoreTable-table'>
          <tbody>
            <RuleRow
              description={ones.description}
              name='Ones'
              score={scores.ones}
              doScore={(evt) => doScore('ones', ones.evaluateRoll)}
            />
            <RuleRow
              description={twos.description}
              name='Twos'
              score={scores.twos}
              doScore={(evt) => doScore('twos', twos.evaluateRoll)}
            />
            <RuleRow
              description={threes.description}
              name='Threes'
              score={scores.threes}
              doScore={(evt) => doScore('threes', threes.evaluateRoll)}
            />
            <RuleRow
              description={fours.description}
              name='Fours'
              score={scores.fours}
              doScore={(evt) => doScore('fours', fours.evaluateRoll)}
            />
            <RuleRow
              description={fives.description}
              name='Fives'
              score={scores.fives}
              doScore={(evt) => doScore('fives', fives.evaluateRoll)}
            />
            <RuleRow
              description={sixes.description}
              name='Sixes'
              score={scores.sixes}
              doScore={(evt) => doScore('sixes', sixes.evaluateRoll)}
            />
          </tbody>
        </table>
      </section>
      <section className='ScoreTable-section'>
        <h2 className='ScoreTable-section-header'>Lower</h2>
        <table className='ScoreTable-table'>
          <tbody>
            <RuleRow
              description={threeOfKind.description}
              name='Three of Kind'
              score={scores.threeOfKind}
              doScore={(evt) =>
                doScore('threeOfKind', threeOfKind.evaluateRoll)
              }
            />
            <RuleRow
              description={fourOfKind.description}
              name='Four of Kind'
              score={scores.fourOfKind}
              doScore={(evt) => doScore('fourOfKind', fourOfKind.evaluateRoll)}
            />
            <RuleRow
              description={fullHouse.description}
              name='Full House'
              score={scores.fullHouse}
              doScore={(evt) => doScore('fullHouse', fullHouse.evaluateRoll)}
            />
            <RuleRow
              description={smallStraight.description}
              name='Small Straight'
              score={scores.smallStraight}
              doScore={(evt) =>
                doScore('smallStraight', smallStraight.evaluateRoll)
              }
            />
            <RuleRow
              description={largeStraight.description}
              name='Large Straight'
              score={scores.largeStraight}
              doScore={(evt) =>
                doScore('largeStraight', largeStraight.evaluateRoll)
              }
            />
            <RuleRow
              description={yahtzee.description}
              name='Yahtzee'
              score={scores.yahtzee}
              doScore={(evt) => doScore('yahtzee', yahtzee.evaluateRoll)}
            />
            <RuleRow
              description={chance.description}
              name='Chance'
              score={scores.chance}
              doScore={(evt) => doScore('chance', chance.evaluateRoll)}
            />
          </tbody>
        </table>
        <table>
          <tbody>
            <tr className='total-score'>
              <td>Total Score:</td>
              <td>{totalScore}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
}
