const dataPreparator = (str: string) => {
  return str.split('\n').map(a => a.split(' '));
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  return prepared.reduce((res, n) => {
    const mapWords = {};
    let invalid = false;
    for (let i = 0; i < n.length; i++) {
      const element = n[i];
      if (mapWords[element]) {
        invalid = true;
        break;
      }
      mapWords[element] = true;
    }
    return res + (invalid ? 0 : 1);
  }, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, n) => {
    const mapWords = {};
    let invalid = false;
    for (let i = 0; i < n.length; i++) {
      const element = n[i].split('').sort().join('');

      if (mapWords[element]) {
        invalid = true;
        break;
      }
      mapWords[element] = true;
    }
    return res + (invalid ? 0 : 1);
  }, 0);
}