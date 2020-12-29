const dataPreparator = (str: string) => {
  return str.split('\n').map((l, i) => {
    const [x, y] = l.split(', ');
    return [parseInt(x), parseInt(y), i];
  });
};

const getGrid = (width: number, height: number) =>
  Array.from(new Array(height + 2)).map(i => Array.from(new Array(width + 2)));

const getGridEdges = <T extends any>(grid: T[][]) => grid.reduce((res, l, i) => {
  const lineEdges = (i === 0 || i === grid.length - 1) ? l : [l[0], l[l.length - 1]];

  return res.concat(lineEdges);
}, []);

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const width = Math.max(...prepared.map(c => c[0]));
  const height = Math.max(...prepared.map(c => c[1]));
  const grid = getGrid(width, height);

  prepared.forEach(([x, y]) => grid[y][x] = [x, y].join('_'));

  for (let dot of prepared) {
    for(let y = 0; y < grid.length; y++) {
      for(let x = 0; x < grid[0].length; x++) {
        const distance = (Math.abs(x - dot[0]) + Math.abs(y - dot[1]));
        if (grid[y][x] && grid[y][x].distance === distance) {
          grid[y][x] = {
            distance,
            value: '.'
          }
        }
        if (!grid[y][x] || grid[y][x].distance > distance) {
          grid[y][x] = {
            distance,
            value: dot.join('_')
          }
        }
      }
    }
  }

  let gridEdges = getGridEdges(grid).map(i => i.value);
  let notInfiniteDots = prepared.reduce((res, dot) => {
    const id = dot.join('_');
    return [ ...res, ...(gridEdges.includes(id) ? [] : [id])];
  }, []);

  let closestCounts = {};
  for(let y = 0; y < grid.length; y++) for(let x = 0; x < grid[0].length; x++) {
    let curr = grid[y][x]?.value;
    if (curr) {
      closestCounts[curr] = (closestCounts[curr] || 1) + 1;
    }
  }

  return Math.max(...notInfiniteDots.map(l => closestCounts[l]));
}

export const func2 = (input: string, limit = 32) => {
  const prepared = dataPreparator(input);
  const width = Math.max(...prepared.map(c => c[0]));
  const height = Math.max(...prepared.map(c => c[1]));
  const grid = getGrid(width, height);
  
  for(let y = 0; y < grid.length; y++) {
    for(let x = 0; x < grid[0].length; x++) {
      const totalDistance = prepared.reduce((res, dot) => {
        return res + (Math.abs(x - dot[0]) + Math.abs(y - dot[1]))
      }, 0);
      grid[y][x] = totalDistance >= limit ? undefined : '#';
    }
  }

  let regionCount = 0;
  for(let y = 0; y < grid.length; y++) for(let x = 0; x < grid[0].length; x++) {
    if (grid[y][x]) regionCount++;
  }

  return regionCount;
}
