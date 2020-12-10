const dataPreparator = (str: string) => {
  return str.split('\n').map(i => parseInt(i)).sort((a, b) => a - b);
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const differences = { 1: 0, 3: 0, 2: 0 };
  let nextJolt = 0; 
  for (let i = 0; i < prepared.length; i++) {
    differences[prepared[i] - nextJolt]++;
    nextJolt = prepared[i];
  }

  return differences[1] * (differences[3] + 1);
}

// Puzzle 2
export const func2 = (input: string) => {
  const p = dataPreparator(input);
  const prepared = [0, ...p];
  let prevJolt = 0;
  let prevSlice = 0;
  let parts = []

  for (let i = 0; i < prepared.length; i++) {
    if (prepared[i] - prevJolt === 3) {
      parts.push(prepared.slice(prevSlice, i))
      prevSlice = i;
    }
    if (i === prepared.length - 1) {
      parts.push(prepared.slice(prevSlice))
    }
    prevJolt = prepared[i];
  }

  return parts.reduce((res, n) => {
    if (n.length === 1 || n.length === 2) return res;
    if (n.length === 3) return res * 2;
    if (n.length > 3) {
      const combinations = (n.length - 2) + (n.length - 3) * 2;
      return res * combinations;
    }
  }, 1);
}
