const dataPreparator = (str: string) => {
  return str.split(`\n`).map(l => l.split(''))
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let res = [];

  for (let i = 0; i < prepared.length; i++) {
    for (let j = 0; j < prepared[0].length; j++) {
      res[j] = (res[j] || 0) + parseInt(prepared[i][j]);
    }
  }

  const res2 = res.reduce((acc, n) => {
    acc.a = acc.a + (n > (prepared.length/2) ? '1' : '0');
    acc.b = acc.b + (n > (prepared.length/2) ? '0' : '1');

    return acc;
  }, { a: '', b: ''});

  return parseInt(res2.a, 2) * parseInt(res2.b, 2);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);

  const recurs = (numbs, j = 0) => {
    if (j >= prepared[0].length) return '';
    let res = 0;
    for (let i = 0; i < numbs.length; i++) {
      res = res + parseInt(numbs[i][j]);
    }
    const toReturn = res >= (numbs.length/2) ? '1' : '0'
    const newNumbs = numbs
      .filter(l => res >= (numbs.length/2) ? l[j] === '1' : l[j] === '0');

    return toReturn + recurs(newNumbs, j+1);
  }

  const recurs2 = (numbs, j = 0) => {
    if (j >= prepared[0].length) return '';
    let res = 0;

    for (let i = 0; i < numbs.length; i++) {
      res = res + parseInt(numbs[i][j]);
    }

    const newNumbs = numbs
      .filter(l => res < (numbs.length/2) ? l[j] === '1' : l[j] === '0');
    
    return newNumbs.length === 1 ? newNumbs[0].join('') : recurs2(newNumbs, j+1);
  }

  return parseInt(recurs(prepared),2) * parseInt(recurs2(prepared),2);
}