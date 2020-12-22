const dataPreparator = (str: string) => {
  return str.split('\n\n').map(p => {
    const [_, ...turns] = p.split('\n')
    return turns.map(a => +a)
  });
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let win;
  let i = 0;

  while (true) {
    const [ pl1, pl2 ] = prepared;
    const card1 = pl1.shift();
    const card2 = pl2.shift();

    if(card1 > card2) {
      pl1.push(card1, card2);
    }

    if(card1 < card2) {
      pl2.push(card2, card1);
    }

    if(pl1.length === 0) {
      win = pl2;
      break;
    }
  
    if(pl2.length === 0) {
      win = pl1;
      break;
    }
  }

  return win.reduce((res, card, i) => {
    return res + (card * (win.length - i));
  }, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  return;
}