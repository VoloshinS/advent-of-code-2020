const dataPreparator = (str: string) => {
  const lines = str.split('\n')
  const directions = ['se', 'sw', 'nw', 'ne']; // e/w
  
  return lines.map(l => {
    const arr = [];
    const i = 1;
    while(l.length) {
      if (directions.includes(l.substring(0,2))) {
        arr.push(l.substring(0,2));
        l = l.substring(2);
      } else {
        arr.push(l.substring(0,1));
        l = l.substring(1);
      }
    }
    return arr;
  });
};

let dirToCoords = (dir: string) => {
  if (dir === 'e') return [1, 0];
  if (dir === 'se') return [0, 1];
  if (dir === 'ne') return [1, -1];
  if (dir === 'w') return [-1, 0];
  if (dir === 'sw') return [-1, 1];
  if (dir === 'nw') return [0, -1];
  console.error('Wrong dir!!!');
}

const fillGrid = (arr: string[][], size: number): string[][] => {
  const grid = Array.from(new Array(size)).map(e => Array.from(new Array(size)).map(() => 'w'))
  let startX = size/2;
  let startY = size/2;
  
  for (let tile of arr) {
    const [x, y] = tile.map(dirToCoords).reduce((res, n) => {
      res[0] = res[0] + n[0];
      res[1] = res[1] + n[1];
      return res;
    }, [0, 0]);

    let check = grid[startX + x][startY + y];

    if (!check || check === 'w') {
      grid[startX + x][startY + y] = 'b'
    }
    if (check === 'b') {
      grid[startX + x][startY + y] = 'w'
    }
  }

  return grid;
}

const copy = (arr: string[][]):string[][] => [...arr.map(i => [...i])];

const countSymbols = (matrix: string[][], symbol: string): number => matrix
  .reduce((res, line) => 
    res + line.reduce((res, e) => e === symbol ? res + 1 : res, 0)
  , 0)


// Puzzle 1
export const func1 = (input: string, gridSize = 38) => {
  const prepared = dataPreparator(input);
  const grid = fillGrid(prepared, gridSize);

  return countSymbols(grid, 'b');
}

export const getAdjacentIndexes = ([x, y]) =>
  ['se', 'sw', 'nw', 'ne', 'e', 'w']
    .map(dirToCoords)
    .map(coords => [coords[0] + x, coords[1] + y])
    .filter(([i, j]) => i >= 0 && j >= 0);

// Puzzle 2
export const func2 = (input: string, gridSize = 38) => {
  const prepared = dataPreparator(input);
  let grid = fillGrid(prepared, gridSize);
  
  for (let i = 0; i < 100; i++) {
    let nextGrid = copy(grid);
    for(let y = 0; y < grid.length; y++) {
      for(let x = 0; x < grid[0].length; x++) {
        const curr = grid[y][x];
        const adjs = getAdjacentIndexes([x, y]);
        const toAdjValue = ([xx, yy]) => grid[yy] && grid[yy][xx];
  
        if (curr === 'b') {
          const count = adjs.map(toAdjValue).filter(e => e == 'b').length;
          if (count === 0 || count > 2) nextGrid[y][x] = 'w';
        }
        if (curr === 'w') {
          const count = adjs.map(toAdjValue).filter(e => e == 'b').length;
          if(count === 2) nextGrid[y][x] = 'b';
        }
      }
    }
    grid = nextGrid;
  }

  return countSymbols(grid, 'b');
}