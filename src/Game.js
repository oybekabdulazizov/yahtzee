import React, { Component } from 'react';
import Dice from './Dice';
import ScoreTable from './ScoreTable';

const NUMBER_OF_DICE = 5;
const NUMBER_OF_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUMBER_OF_DICE }).fill(0),
      locked: Array.from({ length: NUMBER_OF_DICE }).fill(false),
      rollsLeft: NUMBER_OF_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined,
      },
    };
    this.roll = this.roll.bind(this);
    this.toggleLockUnlockDie = this.toggleLockUnlockDie.bind(this);
    this.doScore = this.doScore.bind(this);
  }

  roll() {
    if (this.state.rollsLeft > 0) {
      this.setState((currState) => ({
        dice: currState.dice.map((die, idx) =>
          currState.locked[idx] ? die : Math.ceil(Math.random() * 6)
        ),
        locked:
          currState.rollsLeft > 1
            ? currState.locked
            : Array.from({ length: NUMBER_OF_DICE }).fill(true),
        rollsLeft: currState.rollsLeft - 1,
      }));
    }
  }

  toggleLockUnlockDie(idx) {
    if (this.state.rollsLeft > 0 && !this.state.dice.includes(0)) {
      this.setState((currState) => ({
        locked: [
          ...currState.locked.slice(0, idx),
          !currState.locked[idx],
          ...currState.locked.slice(idx + 1),
        ],
      }));
    }
  }

  doScore(ruleName, rule) {
    this.setState((currState) => ({
      scores: { ...currState.scores, [ruleName]: rule(this.state.dice) },
      rollsLeft: NUMBER_OF_ROLLS,
      locked: Array.from({ length: NUMBER_OF_DICE }).fill(false),
    }));
    this.roll();
  }

  render() {
    return (
      <div>
        <header>
          <section>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              toggleDie={this.toggleLockUnlockDie}
            />
            <div>
              <button
                onClick={this.roll}
                disabled={this.state.locked.every((i) => i === true)}
              >
                {this.state.rollsLeft} Rerolls left
              </button>
            </div>
          </section>
        </header>
        <ScoreTable scores={this.state.scores} doScore={this.doScore} />
      </div>
    );
  }
}

export default Game;
