const dataPreparator = (str: string) => {
  return str.split('\n').map(a => +a);
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let steps = 0;
  let currIndex = 0;
  let nextIndex;

  while (true) {
    nextIndex = prepared[currIndex];
    prepared[currIndex] = prepared[currIndex] + 1;
    currIndex = currIndex + nextIndex;
    steps++;

    if (currIndex >= prepared.length) {
      break;
    }
  }
  return steps;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let steps = 0;
  let currIndex = 0;
  let nextIndex;

  while (true) {
    nextIndex = prepared[currIndex];
    prepared[currIndex] = prepared[currIndex] + (nextIndex >= 3 ? -1 : 1);
    currIndex = currIndex + nextIndex;
    steps++;

    if (currIndex >= prepared.length) {
      break;
    }
  }
  return steps;
}