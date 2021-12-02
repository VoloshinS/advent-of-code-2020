const dataPreparator = (str: string) => {
  return str.split('\n')
  .map(i => i.split(' '))
  .map(([command, val]) => ({ command, val: parseInt(val) }));
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const res = prepared.reduce((acc, { command, val }) => {
    if (command == 'up') acc.d = acc.d - val;
    if (command == 'down') acc.d = acc.d + val;
    if (command == 'forward') acc.w = acc.w + val;

    return acc;
  }, { w: 0, d: 0 });

  return res.w * res.d;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const res = prepared.reduce((acc, {command, val}) => {
    if (command == 'up') acc.aim = acc.aim - val;
    if (command == 'down') acc.aim = acc.aim + val;
    if (command == 'forward') {
      acc.w = acc.w + val;
      acc.d = acc.d + acc.aim * val;
    }

    return acc;
  }, { w: 0, d: 0, aim: 0 });

  return res.w * res.d;
}