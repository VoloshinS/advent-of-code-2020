import {
  getAdjacentSeatsCreator,
  getVisibleSeatsCreator,
  getAdjacentIndexes,
  copy,
  print,
  countSymbols
} from './day11.utils';

const dataPreparator = (str: string): string[][] => {
  return str.split('\n').map(i => i.split(''));
};

const completeStep = (
  curr: string[][],
  next: string[][],
  getSeatsToCheck: (i: number, j: number) => string[],
  limitBeforeLeaving: number
) => {
  for(let i = 0; i < curr.length; i++) {
    for(let j = 0; j < curr[0].length; j++) {
      const seatsToCheck = getSeatsToCheck(i, j);

      if (curr[i][j] === 'L' &&  seatsToCheck.every(s => s !== '#')) {
        next[i][j] = '#';
      }

      if (curr[i][j] === '#' && seatsToCheck.filter(s => s === '#').length > limitBeforeLeaving) {
        next[i][j] = 'L';
      }
    }
  }
}

// Puzzle 1
export const func1 = (input: string) => {
  const seats = dataPreparator(input);
  let curr = copy(seats);
  let next = copy(seats);

  while (true) {
    const getAdjacentSeats = getAdjacentSeatsCreator(curr);
    completeStep(
      curr,
      next,
      getAdjacentSeats,
      3
    )

    if (steps > 100) {
      console.error('Infinite steps');
      break;
    }

    if (print(curr) === print(next)) {
      break;
    };

    curr = copy(next);
  }
  
  return countSymbols(curr, '#');
}

  // Puzzle 2
let steps = 0;
export const func2 = (input: string) => {
  const seats = dataPreparator(input);
  let curr = copy(seats);
  let next = copy(seats);
  const createGetVisibleSeats = getVisibleSeatsCreator([], curr[0].length, curr.length);

  while (true) {
    const getVisibleSeats = createGetVisibleSeats(curr);
    completeStep(curr, next, getVisibleSeats, 4);

    if (steps > 100) {
      console.error('Infinite steps');
      break;
    }

    if (print(curr) === print(next)) {
      break;
    };

    curr = copy(next);
    steps++;
  }
  
  return countSymbols(curr, '#');
}