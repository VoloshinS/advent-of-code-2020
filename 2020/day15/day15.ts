const dataPreparator = (str: string) => {
  return str.split(',').map(a => +a)
};

// Puzzle 1
export const func1 = (input: string,  lastStep = 2020) => {
  const arr = dataPreparator(input);
  let res = 0;
  let i = 1;
  const count = {};
  let curr: number;
  let next: number;
  const len = arr.length;

  while (true) {
    if (curr === undefined) {
      curr = arr[i - 1];
    }

    if(count[curr] !== undefined) {
      count[curr] = { c: count[curr].c + 1, l: i, b: count[curr].l };
      next = count[curr].l - count[curr].b;
    } else {
      count[curr] = { c: 1, l: i, b: 0 };
      next = i >= len ? 0 : (arr[i] === undefined ? arr[0] : arr[i]);
    }

    if (i === lastStep) {
      res = curr;
      break;
    }

    curr = next;
    i++;
  }

  return res;
}

// Puzzle 2
export const func2 = (input: string, turns = 30000000) => {
  const prepared = dataPreparator(input);
  const lastSpokenPairs = new Uint32Array(turns * 2);
  let turn = prepared.length;
  let lastSpoken = prepared[turn - 1];
  let prev: number;
  let last: number;

  for (let i = 0; i < turn; i++) {
    lastSpokenPairs[prepared[i] * 2] = i + 1;
  }

  while(true) {
    turn = turn + 1;
    prev = lastSpokenPairs[lastSpoken * 2];
    last = lastSpokenPairs[lastSpoken * 2 + 1];
    lastSpoken = last === 0 ? 0 : Math.abs(prev - last);
    prev = lastSpokenPairs[lastSpoken * 2];
    last = lastSpokenPairs[lastSpoken * 2 + 1];
    lastSpokenPairs[lastSpoken * 2 + (prev > last ? 1 : 0)] = turn;

    if (turn >= turns) break;
  }
  return lastSpoken;
}
