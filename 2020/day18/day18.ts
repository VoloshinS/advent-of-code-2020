const dataPreparator = (str: string) => {
  return str.split('\n').map(l => {
    const arr = l.split('').filter(i => i !== ' ');
    return arr.map(el => (parseInt(el) ? parseInt(el) : el));
  });
};

const operation = (arr: any[]): number => {
  return arr.reduce((res, n, i) => {
    if (n === '+' || n === '*') {
      let right = arr[i + 1];

      return n === '+' ? res + right : res * right;
    }
    return res;
  }, arr[0]);
}

const findCorrespondingCloseBracket = (arr: any[]): number => {
  let brackets = [];
  return arr.reduce((res, n, i) => {
    if (res && i !== 0) return res;
    if (n === '(') brackets.push('(')
    if (n === ')') brackets.pop();
    return !brackets.length ? i : null;
  }, null);
}

const calc = (arr: (string | number)[]): number => {
  let indxOpn = arr.indexOf('(');
  
  if (indxOpn < 0) operation(arr);

  let indxCls = findCorrespondingCloseBracket(arr.slice(indxOpn)) + indxOpn;
  let before = arr.slice(0, indxOpn);
  let inside = arr.slice(indxOpn + 1, indxCls);
  let after = arr.slice(indxCls + 1);
  return calc([...before, calc(inside), ...after]);
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  
  return prepared
    .map(calc)
    .reduce((res, i) => res + i, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  return;
}