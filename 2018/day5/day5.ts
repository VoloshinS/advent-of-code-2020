const dataPreparator = (str: string) => {
  return str.split('');
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let currArr = prepared;
  let finalResult: string[];
  let rounds = 0;
  while(true) {
    let result = [];
    let reactionTookPlace = false;
    for (let i = 0; i < currArr.length; i++) {
      const curr = currArr[i];
      const prev = currArr[i - 1];
      if (prev && curr !== prev && curr.toUpperCase() === prev.toUpperCase() && prev === result.slice(-1)[0]) {
        reactionTookPlace = true;
        result.pop();
        continue;
      }
      result.push(curr);
    }
    if (!reactionTookPlace) {
      finalResult = result;
      break;
    }
    currArr = result;
    rounds++;
  }
  return finalResult.length;
}

// Puzzle 2
export const func2 = (input: string) => {
  const letters = Array.from(new Set(input.toLowerCase().split('')));
  const polymerLengths = letters.map(letter => {
    const regex = new RegExp(letter, 'gmi');
    return func1(input.replace(regex, ''));
  })
  return Math.min(...polymerLengths);
}