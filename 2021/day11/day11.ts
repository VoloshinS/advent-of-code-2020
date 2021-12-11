import { wrapMatrix, mapNeighbor } from '../../utils/matrix';

const dataPreparator = (str: string) => {
  return str.split('\n').map(l => l.split('').map(e => parseInt(e)));
};

const flashOctopus = (y: number,x: number, arr: any[][], flashed = {}) => {
  if (arr[y][x] === 9) {
    flashed[`${y}_${x}`] = true;
    arr[y][x] = 0;
    mapNeighbor(y,x, ([y,x]) => flashOctopus(y, x, arr, flashed))
  } else if (arr[y][x] === '*') {
    //nothing
  } else if (arr[y][x] < 9 && !(arr[y][x] === 0 && flashed[`${y}_${x}`])) {
    arr[y][x]++;
  }

  return flashed;
}

const doStep = (arr: any[][], flashedContainer: {[key: string]: boolean }) => {
  for (let y = 1; y < arr.length - 1; y++) {
    for (let x = 1; x < arr[y].length - 1; x++) {
      const e = arr[y][x];
      if (e === 9) {
        flashOctopus(y, x, arr, flashedContainer);
      } else if (!flashedContainer[`${y}_${x}`] && typeof e === 'number'){
        arr[y][x] = e + 1;
      }
    }
  }
}
// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const toWork = wrapMatrix(prepared, '*');
  let flashed = 0;
  for (let step = 0; step < 100; step++) {
    let flashedContainer = {};
    doStep(toWork, flashedContainer);
    flashed = flashed + Object.keys(flashedContainer).length;
  }

  return flashed;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const toWork = wrapMatrix(prepared, '*');
  let flashed = 0;
  let step = 0;
  while (flashed < prepared.length * prepared[0].length) {
    let flashedContainer = {};
    doStep(toWork, flashedContainer);
    flashed = Object.keys(flashedContainer).length;
    step++;
  }

  return step;
}