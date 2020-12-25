const dataPreparator = (str: string) => {
  return str.split('\n').map(a => +a);
};

const divider = 20201227;

const findLoopSize = (initial: number, toFind: number) => {
  let found = initial;
  let i = 0;

  while(found !== toFind) {
    found = (initial * found) % divider;
    i++;
  }

  return i;
}

// Puzzle 1
export const func1 = (input: string) => {
  const [door, card] = dataPreparator(input);
  let loopSize = findLoopSize(7, card);
  let subjectNum = door;
  let privateKey = subjectNum;
  while (loopSize > 0) {
    privateKey = (privateKey * subjectNum) % divider;
    loopSize--;
  }
  return privateKey;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  return;
}