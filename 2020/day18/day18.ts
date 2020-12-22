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

let sum = (arr) => {
  let signIndx = arr.indexOf('+');

  if (signIndx < 0) return arr;

  let beforeSum = arr.slice(0, signIndx - 1);
  let afterSum = arr.slice(signIndx + 2);

  return sum([...beforeSum, arr[signIndx - 1] + arr[signIndx + 1], ...afterSum]);
}

const operation2 = (arr: any[]): number => {
  return operation(sum(arr));
}

const findCorrespondingCloseBracket = (arr) => {
  let brackets = [];
  return arr.reduce((res, n, i) => {
    if (res && i !== 0) return res;
    if (n === '(') brackets.push('(')
    if (n === ')') brackets.pop();
    return !brackets.length ? i : null;
  }, null);
}

const calc = (arr: (string | number)[], opFunc = operation): number => {
  let indxOpn = arr.indexOf('(');
  
  if (indxOpn < 0) return opFunc(arr);

  let indxCls = findCorrespondingCloseBracket(arr.slice(indxOpn)) + indxOpn;
  let before = arr.slice(0, indxOpn);
  let inside = arr.slice(indxOpn + 1, indxCls);
  let after = arr.slice(indxCls + 1);
  
  return calc([...before, calc(inside, opFunc), ...after], opFunc);
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  
  return prepared
    .map(l => calc(l))
    .reduce((res, i) => res + i, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared
    .map(l => calc(l, operation2))
    .reduce((res, i) => res + i, 0);
}