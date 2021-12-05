const dataPreparator = (str: string) => {
  let maxX = 0, maxY = 0;
  const lines = str.split('\n').map(l => l.split(' -> ')).map(([s,e]) => {
    const [x,y] = s.split(',');
    const [xx,yy] = e.split(',');
    const x1 = parseInt(x);
    const y1 = parseInt(y);
    const x2 = parseInt(xx);
    const y2 = parseInt(yy);
    if (x1 > maxX) maxX = x1;
    if (x2 > maxX) maxX = x2;
    if (y1 > maxY) maxY = y1;
    if (y2 > maxY) maxY = y2;
    return {
      x1: parseInt(x),
      y1: parseInt(y),
      x2: parseInt(xx),
      y2: parseInt(yy)
    }
  });

  return {
    max: { x: maxX + 1, y: maxY + 1},
    lines
  }
};

const buildField = (xLength: number, yLength: number) => {
  return Array(yLength)
    .fill([], 0, yLength)
    .map(()=> Array(xLength).fill(0, 0, xLength))
}

type line = { x1: number, x2: number, y1: number, y2: number };

const countOverlaps = (field: number[][], lines: line[], drawDiagonals?: boolean) => {
  let res = [];
  for (let k = 0; k < lines.length; k++) {
    const { x1, x2, y1, y2 } = lines[k];
    if (x1 === x2) {
      let [s,e] = y1 > y2 ? [y2,y1] : [y1,y2];
      for (let i = s; i <= e; i++) {
        field[i][x1] = field[i][x1]+1;
        if (field[i][x1] >=2 && !res.includes(`${i},${x1}`)) {
          res.push(`${i},${x1}`);
        }
      }
    } else if (y1 === y2) {
      let [s,e] = x1 > x2 ? [x2,x1] : [x1,x2];
      for (let i = s; i <= e; i++) {
        field[y1][i] = field[y1][i]+1;
        if (field[y1][i] >=2 && !res.includes(`${y1},${i}`)) {
          res.push(`${y1},${i}`);
        }
      }
    } else if (drawDiagonals) {
      let [sx, sy, ex, ey] = x1 > x2 ? [x2,y2,x1,y1] : [x1,y1,x2,y2];
      let delta = ey > sy ? +1 : -1;
      for (let j = sy,i = sx; i <= ex; i++) {
        field[j][i] = field[j][i]+1;
        if (field[j][i] >=2 && !res.includes(`${j},${i}`)) {
          res.push(`${j},${i}`);
        }
        j = j + delta;
      }
    }
  }

  return res.length;
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const field = buildField(prepared.max.x, prepared.max.y);

  return countOverlaps(field, prepared.lines);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const field = buildField(prepared.max.x, prepared.max.y);

  return countOverlaps(field, prepared.lines, true);
}