const dataPreparator = (str: string) => {
  return str.split('\n').map(l => {
    const [id, _, rawCoords, rawSize] = l.split(' ');
    const [x, y] = rawCoords.split(',');
    const [width, height] = rawSize.split('x');

    return {
      id: parseInt(id.substring(1)),
      x: parseInt(x),
      y: parseInt(y),
      width: parseInt(width),
      height: parseInt(height)
    };
  });
};

const countClaimsOverlaps = (claims) => claims.reduce((res, { x, y, width, height }) => {
  for (let i = x; i < width + x; i++) {
    for (let j = y; j < height + y; j++) {
      res[`${i}_${j}`] = (res[`${i}_${j}`] || 0) + 1;
    }
  }
  return res;
}, {});

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let overlaps = countClaimsOverlaps(prepared);

  return Object.values(overlaps).filter(v => v >= 2).length;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let claimWithoutOverlaps: number;
  let overlaps = countClaimsOverlaps(prepared);

  prepared.forEach(({ id, x, y, width, height }) => {
    let hasOverlap = false;
    for (let i = x; i < width + x; i++) {
      for (let j = y; j < height + y; j++) {
        if (overlaps[`${i}_${j}`] > 1) hasOverlap = true;
      }
    }
    if (!hasOverlap) { claimWithoutOverlaps = id; }
  });

  return claimWithoutOverlaps;
}