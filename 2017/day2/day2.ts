const dataPreparator = (str: string) => {
  return str.split('\n').map(i => i.split(/\s/g).map(i => +i));
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  return prepared.reduce((res, line) => {
    return res + (Math.max(...line) - Math.min(...line));
  }, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, line) => {
    const sorted = line.sort((a,b) => b - a);
    let lineRes = 0;
    for (let i = 0; i < line.length; i++) {
      for (let j = line.length - 1; j >= 0; j--) {
        if (i !== j && sorted[i] % sorted[j] === 0) {
          lineRes = sorted[i] / sorted[j];
          break;
        }
      }
      if (lineRes) break;
    }
    return res + lineRes;
  }, 0);
}