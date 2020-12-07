const dataPreparator = (str: string) => str.split('\n');

const getHalf = (array: number[], isFirst: boolean): number[] =>
  isFirst ? array.splice(0, array.length / 2) : array.splice(array.length / 2);

const arrayOfIndexes = (maxIndex: number): number[] => Array.from(Array(maxIndex).keys());

const getId = (input: string, rows = arrayOfIndexes(128), columns = arrayOfIndexes(8)): number => {
  if(!input) return rows[0] * 8 + columns[0];

  if (input.length <= 3) {
    return getId(input.slice(1), rows, getHalf(columns, input[0] === 'L'));
  }

  return getId(input.slice(1), getHalf(rows, input[0] === 'F'), columns);
}

// Puzzle 1
// Find max seat number
export const getMaxSeat = (input: string): number => {
  return Math.max(...dataPreparator(input).map(i => getId(i)));
}

// Puzzle 2
// Find empty seat
export const getEmptySeat = (input: string): (number | null) => {
  return dataPreparator(input)
    .map(i => getId(i))
    .sort((a, b) => a - b)
    .reduce((res, n, i, arr) => arr[i] - arr[i - 1] > 1 ? n - 1 : res, null);
}