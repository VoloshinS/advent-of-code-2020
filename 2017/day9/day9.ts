const dataPreparator = (str: string) => {
  return str.replace(/!\S/gm, '');
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let brackets = [];
  let trash = [];
  let sum = 0;
  for (let i = 0; i < prepared.length; i++) {
    let n = prepared[i];
    if (trash.length && n === '>') {
      trash.pop();
    }

    if(!trash.length) {
      if (n === '<') {
        trash.push('<');
      }

      if (n === '{') {
        brackets.push('{');
        sum = sum + brackets.length;
      }

      if (n === '}') {
        brackets.pop();
      }
    }
  }

  return sum;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let trash = [];
  let sum = 0;
  for (let i = 0; i < prepared.length; i++) {
    let n = prepared[i];
    if (trash.length && n === '>') {
      sum = sum + (i - trash.pop() - 1);
    }

    if(!trash.length && n === '<') {
      trash.push(i);
    }
  }

  return sum;
}