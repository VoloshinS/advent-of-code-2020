import { wrapMatrix } from "../../utils/matrix";

const dataPreparator = (str: string) => {
  return str.split('\n').map(e => e.split('').map(e => parseInt(e)));
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let riskLevels = 0;
  const toWork = wrapMatrix(prepared, 9)

  for (let i = 1; i < toWork.length - 1; i++) {
    for (let j = 1; j < toWork[0].length - 1; j++) {
      if(toWork[i][j] < toWork[i-1][j]
        && toWork[i][j] < toWork[i+1][j]
        && toWork[i][j] < toWork[i][j-1]
        && toWork[i][j] < toWork[i][j+1]) {
          riskLevels = riskLevels + (toWork[i][j]+1)
        }
    }  
  }

  return riskLevels;
}

const getBasinSize = (i: number, j: number, field: (string|number)[][], alreadyChecked) => {
  let basinSize = 0;
  const countNeighborSize = (x, y, field, alreadyChecked) => {
    if(!alreadyChecked[`${x}_${y}`] && field[x][y] === '#') {
      alreadyChecked[`${x}_${y}`] = true;
      basinSize = basinSize + 1 + getBasinSize(x, y, field, alreadyChecked);
    }
  }

  countNeighborSize(i-1, j, field, alreadyChecked);
  countNeighborSize(i+1, j, field, alreadyChecked);
  countNeighborSize(i, j-1, field, alreadyChecked);
  countNeighborSize(i, j+1, field, alreadyChecked);

  return basinSize;
}
// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const toWork = wrapMatrix(prepared.map(l => ['.', ...l.map(e => e === 9 ? '.' : '#'), '.']), '.')
  let basins = [];
  let alreadyChecked = {};

  for (let i = 1; i < toWork.length - 1; i++) {
    for (let j = 1; j < toWork[0].length - 1; j++) {
      const basinSize = getBasinSize(i, j, toWork, alreadyChecked);
      alreadyChecked[`${i}_${j}`] = true;
      if (basinSize) basins.push(basinSize);
    }  
  }

  const [a,b,c] = basins.sort((a, b) => b - a);

  return [a,b,c].reduce((a, n) => a * n, 1);
}
