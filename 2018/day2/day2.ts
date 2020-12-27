const dataPreparator = (str: string) => {
  return str.split('\n');
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let twice = 0;
  let threeTimes = 0;

  prepared.forEach(n => {
    const letters = {};
    for (let letter of n) letters[letter] = (letters[letter] || 0) + 1;
    const contains = (s) => Object.keys(letters).filter(k => letters[k] === s).length;
    if (contains(2)) twice = twice + 1;
    if (contains(3)) threeTimes = threeTimes + 1;
  });

  return twice * threeTimes;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let result: string;
  for (let i = 0; i < prepared[0].length; i++) {
    let omitByIndex = prepared
      .map(a => [...a.slice(0,i), ...a.slice(i + 1)].join(''))
      .reduce((res, n) => {
        if(res[n]) res.duplicates = n;
        res[n] = true;
        return res;
      }, { duplicates: '' });

    if (omitByIndex.duplicates) {
      result = omitByIndex.duplicates;
      break;
    }
  }
  return result;
}