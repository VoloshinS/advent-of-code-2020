const dataPreparator = (str: string) => {
  return str.split('\n').map(l => {
    const [ key, incOrDec, increment, _, conditionLeft, conditionOperator, conditionRight ] = l.split(' ');

    return {
      key,
      sign: incOrDec === 'inc' ? +1 : -1,
      increment: +increment,
      conditionLeft,
      conditionRight,
      conditionOperator
    }
  });
};

const checkCondition = (res, { conditionLeft, conditionRight, conditionOperator }) => {
  const left = res[conditionLeft] || 0;
  if (conditionOperator === '==') return left == conditionRight;
  if (conditionOperator === '<') return left < conditionRight;
  if (conditionOperator === '>') return left > conditionRight;
  if (conditionOperator === '!=') return left != conditionRight;
  if (conditionOperator === '>=') return left >= conditionRight;
  if (conditionOperator === '<=') return left <= conditionRight;
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const result = {};
  prepared.forEach(n => {
    if(checkCondition(result, n)) {
      result[n.key] = (result[n.key] || 0) + n.sign * n.increment;
    }
  });

  return Math.max(...Object.values(result) as number[]);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const result = {};
  let max = 0;
  prepared.forEach(n => {
    if (checkCondition(result, n)) {
      result[n.key] = (result[n.key] || 0) + n.sign * n.increment;
    }
    if (result[n.key] > max) max = result[n.key];
  });

  return max;
}