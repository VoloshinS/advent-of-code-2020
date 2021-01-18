const dataPreparator = (str: string) => {
  return str.split(' ').map(a => +a);
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let count = 0;
  let mems = {};

  while(true) {
    const key = prepared.join('');
    if (mems[key]) break;
    mems[key] = true;
    let max = Math.max(...prepared);
    let indexOfMax = prepared.indexOf(max);
    prepared[indexOfMax] = 0;
    let nextI = indexOfMax + 1 === prepared.length ? 0 : indexOfMax + 1;
    for (let i = 1; i <= max; i++) {
      prepared[nextI] = prepared[nextI] + 1;
      nextI = nextI + 1 === prepared.length ? 0 : nextI + 1;
    }
    count++;
  }

  return count;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let count = 0;
  let mems = {};
  let result = null;

  while(true) {
    const key = prepared.join('');
    if (mems[key]) {
      result = count - mems[key];
      break;
    }
    mems[key] = count;
    let max = Math.max(...prepared);
    let indexOfMax = prepared.indexOf(max);
    prepared[indexOfMax] = 0;
    let nextI = indexOfMax + 1 === prepared.length ? 0 : indexOfMax + 1;
    for (let i = 1; i <= max; i++) {
      prepared[nextI] = prepared[nextI] + 1;
      nextI = nextI + 1 === prepared.length ? 0 : nextI + 1;
    }
    count++;
  }

  return result;
}