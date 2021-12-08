const dataPreparator = (str: string) => {
  return str.split('\n').map(l => l.split(' | ')[1].split(' '));
};

const dataPreparator2 = (str: string) => {
  return str.split('\n').map(l => {
    const [signals, digits] = l.split(' | ');

    return {
      signals: signals.split(' ').map(e => e.split('').sort().join('')).sort((a,b) => a.length - b.length),
      digits: digits.split(' ').map(e => e.split('').sort().join(''))
    }
  });
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  
  const filtered = prepared
    .map(l => l.map(e => e.length).filter(e => [2,3,4,7].includes(e)));

  return filtered.reduce((a,l) => a + l.reduce((a,e) => a + 1, 0),0)
}

const isLike = (element, digit, determined) => {
  if(!determined[digit]) {
    throw new Error(`"${digit} is not determined yet`);
  }
  return determined[digit].split('').every(d => element.includes(d));
}
const isNotLike = (element, digit, determined) => {
  if(!determined[digit]) {
    throw new Error(`"${digit} is not determined yet`);
  }

  return determined[digit].split('').some(d => !element.includes(d));
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator2(input);

  let rules = [
    { result: 1, rule: (e) => e.length === 2 },
    { result: 7, rule: (e) => e.length === 3 },
    { result: 4, rule: (e) => e.length === 4 },
    { result: 8, rule: (e) => e.length === 7 },
    { result: 9, rule: (e, determined) => e.length === 6 && isLike(e, 4, determined) },
    { result: 0, rule: (e, determined) => e.length === 6 && isLike(e, 7, determined) && isNotLike(e, 4,determined)  },
    { result: 6, rule: (e, determined) => e.length === 6 && isNotLike(e, 7, determined) && isNotLike(e, 1, determined) },
    { result: 3, rule: (e, determined) => e.length === 5 && isLike(e, 7, determined) && isLike(e, 1, determined) },
    { result: 2, rule: (e, determined) => e.length === 5 && isNotLike(e, 7, determined) && isNotLike(determined[9], 2, {[2]: e}) },
    { result: 5, rule: (e, determined) => e.length === 5 && isNotLike(e, 7, determined) && isLike(determined[9], 2, {[2]: e}) }
  ]

  const res = prepared.map(e => {
    let determined = [];
    rules.map(({rule, result}, i) => {
      const found = e.signals.find((e) => rule(e, determined));
      determined[result] = found;
    });
  
    return e.digits.map((e) => determined.indexOf(e))
  });

  return res.reduce((acc, e) => acc + parseInt(e.join('')), 0);
}