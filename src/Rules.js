class Rule {
    constructor(params) {
        // puts all properties in params on instance
        Object.assign(this, params);
    }

    sum(dice) {
        // sum of all dice
        return dice.reduce((prev, curr) => prev + curr);
    }

    freq(dice) {
        // frequencies of dice values
        const freqs = new Map();
        for (let d of dice) freqs.set(d, (freqs.get(d) || 0) + 1);
        return Array.from(freqs.values());
    }

    count(dice, val) {
        // number of times val appears in dice
        return dice.filter(d => d === val).length;
    }
}

// when the val is passed, this returns the sum of all dice with this value
// 1,1,1,2,3 and if val=1, this returns 3 (which is 1+!+1)
class TotalOneNumber extends Rule {
    evaluateRoll = dice => {
        return this.val * this.count(dice, this.val);
    };
}


// given a required number of same dice, 
// returns sum of all dice 
// e.g. 3-of-kind
class SumDistro extends Rule {
    evalRoll = dice => {
        // do any of the counts meet of exceed this distro?
        return this.freq(dice).some(c => c >= this.count) ? this.sum(dice) : 0;
    };
}


// checks for a full house (3-of-kind and 2-of-kind)
class FullHouse extends Rule {
    evalRoll = dice => {
        let isFullHouse = false;
        if (this.freq(dice).length === 2 && (this.freq(dice)[0] === 2 || this.freq(dice)[0] === 3)) {
            isFullHouse = true;
        }
        return (isFullHouse ? this.score : 0);
    }
}


// checks for small straights 
// e.g. 1,2,3,4 OR 2,3,4,5 OR 3,4,5,6
class SmallStraight extends Rule {
    evalRoll = dice => {
        const d = new Set(dice);
        if (d.has(2) && d.has(3) && d.has(4) && (d.has(1) || d.has(5))) {
            return this.score;
        } else if (d.has(3) && d.has(4) && d.has(5) &&  d.has(6)) {
            return this.score;
        } else {
            return 0;
        }
    }
}

// checks for large straights
// e.g. 1,2,3,4,5 OR 2,3,4,5,6 
class LargeStraight extends Rule {
    evalRoll = dice => {
        const d = new Set(dice);
        return (d.has(2) && d.has(3) && d.has(4) && d.has(5) && (d.has(1) || d.has(6))) ? this.score : 0;
    };
}

// checks for yahtzee
class Yahtzee extends Rule {
    evalRoll = dice => {
        return this.freq(dice)[0] === 5 ? this.score : 0;
    };
}

// ones, twos, threes, etc score as sum of that value in dice
const ones = new TotalOneNumber({ val: 1, description: "1 point per 1" });
const twos = new TotalOneNumber({ val: 2, description: "2 points per 2" });
const threes = new TotalOneNumber({ val: 3, description: "3 points per 3" });
const fours = new TotalOneNumber({ val: 4, description: "4 points per 4" });
const fives = new TotalOneNumber({ val: 5, description: "5 points per 5" });
const sixes = new TotalOneNumber({ val: 6, description: "6 points per 6" });

// 3-of-kind/4-of-kind score as sum of all dice
const threeOfKind = new SumDistro({ count: 3, description: "Sum all dice if 3 are the same" });
const fourOfKind = new SumDistro({ count: 4, description: "Sum all dice if 4 are the same" });

// full house scores 25 pts
const fullHouse = new FullHouse({ score: 25, description: "25 points for a full house" });

// small straights earn 30 pts, large straights earn 40 pts
const smallStraight = new SmallStraight({ score: 30, description: "30 points for a small straight" });
const largeStraight = new LargeStraight({ score: 40, description: "40 points for a large straight" });

// yahtzee scores 50 pts
const yahtzee = new Yahtzee({ score: 50, description: "50 points for yahtzee" });

// for chance, sums all the vals of dice
const chance = new SumDistro({ count: 0, description: "Sum of all current dice" });

export {
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
    chance
};