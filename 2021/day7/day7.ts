const dataPreparator = (str: string) => {
  return str.split(',').map(i => parseInt(i));
};

let f = [];
function memoizedFuel(n: number) {
  if (n == 0 || n == 1) return 1;
  if (f[n] > 0) return f[n];
  return f[n] = memoizedFuel(n - 1) + n;
}

const countFuel = (arr: number[], calcFunc: (i: number, currPos: number) => number) => {
  let minFuel = Number.MAX_SAFE_INTEGER;
  const min = arr.reduce((acc, n) => acc > n ? n : acc, 0);
  const max = arr.reduce((acc, n) => acc < n ? n : acc, 0);

  for (let i = min; i < max; i++) {
    const fuel = arr.reduce((acc, n) => acc + calcFunc(n, i), 0);
    if (fuel < minFuel) {
      minFuel = fuel
    }
  }

  return minFuel;
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
 
  return countFuel(prepared, (n, i) => Math.abs(n - i));
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);

  return countFuel(prepared, (n, i) => memoizedFuel(Math.abs(n - i)));
}