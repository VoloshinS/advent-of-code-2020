const dataPreparator = (str: string) => {
  return str.split('');
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let res = 0;
  for (let i = 0; i < prepared.length; i++) {
    res = prepared[i] === '(' ? res + 1 : res - 1;
  }
  return res;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let acc = 0;
  let res = 0;
  for (let i = 0; i < prepared.length; i++) {
    acc = prepared[i] === '(' ? acc + 1 : acc - 1;
    if (acc === -1) {
      res = i + 1;
      break;
    }
  }
  return res;
}