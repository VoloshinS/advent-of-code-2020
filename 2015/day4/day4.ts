import crypto from 'crypto-js';
import md5 from 'crypto-js/md5';

const dataPreparator = (str: string) => {
  return str;
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let step = 0;
  while(step < 1000000) {
    if (md5(prepared + step).toString().startsWith('00000')) {
      break;
    }
    step++;
  }
  return step;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let step = 0;
  while(step < 10000000) {
    if (md5(prepared + step).toString().startsWith('000000')) {
      break;
    }
    step++;
  }
  return step;
}