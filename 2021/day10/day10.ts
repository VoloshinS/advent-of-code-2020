const dataPreparator = (str: string) => {
  return str.split('\n');
};

const analyzeLines = (arr: string[]) => {
  const mapSignals = {
    ')': '(',
    ']': '[',
    '}': '{',
    '>': '<',
  };
  let allErrors = [];
  const incomplete = [];
  arr.forEach((l) => {
    const errors = [];
    const res = [];
    for(let i = 0; i < l.length; i++) {
      if(['(','[', '{', '<'].includes(l[i])) {
        res.push(l[i]);
      } else if (res[res.length - 1] === mapSignals[l[i]]) {
        res.pop();
      } else {
        errors.push(l[i]);
        allErrors = allErrors.concat(errors);
        break;
      }
    }
    if (!errors.length) {
      incomplete.push(res);
    }
  });

  return { allErrors, incomplete };
}
// Puzzle 1
export const func1 = (input: string) => {
  const mapRes = {
    ')': 3,
    ']': 57,
    '}': 1197,
    '>': 25137
  };
  const prepared = dataPreparator(input);
  const { allErrors } = analyzeLines(prepared);

  return allErrors.reduce((a, n) => a + mapRes[n], 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const { incomplete } = analyzeLines(prepared);
  const mapSignals = {
    '(': ')',
    '[': ']',
    '{': '}',
    '<': '>',
  };
  const mapRes = {
    ')': 1,
    ']': 2,
    '}': 3,
    '>': 4
  };

  const results = incomplete.map((l) => l.reverse().map(e => mapSignals[e]).reduce((acc, e) => {
    return acc * 5 + mapRes[e];
  }, 0)).sort((a, b) => a - b);

  return results[(results.length - 1)/2];
}