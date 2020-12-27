const dataPreparator = (str: string) => {
  return str.split('\n').map(a => parseInt(a));
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  return prepared.reduce((res, n) => res + n, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let i = 0;
  let answer: number;
  let freq = 0;
  let freqMemo = {};
  while(true) {
    const nextFreq = freq + prepared[i];
    if (freqMemo[nextFreq]) {
      answer = nextFreq;
      break;
    }
    freqMemo[nextFreq] = true;
    freq = nextFreq;
    i = i < prepared.length - 1 ? i + 1 : 0;
  }
  return answer;
}