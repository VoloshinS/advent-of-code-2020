const dataPreparator = (str: string) => {
  return str.split('\n\n').map(p => {
    const [_, ...turns] = p.split('\n')
    return turns.map(a => +a)
  });
};

const playGame = ([ pl1, pl2 ]: number[][]) => {
  let result;
  while (true) {
    const card1 = pl1.shift();
    const card2 = pl2.shift();

    if(card1 > card2) {
      pl1.push(card1, card2);
    }

    if(card1 < card2) {
      pl2.push(card2, card1);
    }

    if(pl1.length === 0) {
      result = pl2;
      break;
    }
  
    if(pl2.length === 0) {
      result = pl1;
      break;
    }
  }
  return result;
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let result = playGame(prepared);

  return result.reduce((res, card, i) => {
    return res + (card * (result.length - i));
  }, 0);
}

const playRecursiveGame = ([ pl1, pl2 ]: number[][], game = 0) => {
  let states = {};
  let result;

  while (true) {
    const state = pl1.concat([0, ...pl2]).join('');
    if (states[state]) {
      result = { winner: 1 };
      break;
    }
    states[state] = true;
    const card1 = pl1.shift();
    const card2 = pl2.shift();

    if (card1 <= pl1.length && card2 <= pl2.length) {
      const { winner, deck } = playRecursiveGame([pl1.slice(0, card1), pl2.slice(0, card2)], game + 1);
      winner === 1 ? pl1.push(card1, card2) : pl2.push(card2, card1);
      continue;
    }

    if(card1 > card2) {
      pl1.push(card1, card2);
    }

    if(card1 < card2) {
      pl2.push(card2, card1);
    }

    if(pl1.length === 0) {
      result = {
        deck: pl2,
        winner: 2
      };
      break;
    }
  
    if(pl2.length === 0) {
      result = {
        deck: pl1,
        winner: 1
      };
      break;
    }
  }

  return result;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let { deck } = playRecursiveGame(prepared);

  return deck.reduce((res, card, i) => {
    return res + (card * (deck.length - i));
  }, 0);
}