interface IMapData {
  matrix: string[][];
  height: number;
  width: number;
}

interface ISlope {
  x: number;
  y: number;
}

const dataPreparator = (str: string): IMapData => {
  const matrix = str.split('\n').map(line => line.split(''));

  return {
    matrix,
    height: matrix.length,
    width: matrix[0].length
  };
};

// Puzzle 1
// Count trees encountered when go with selected slope on a map with repeating patter;

export const countTrees = (input: string, delta: ISlope): number => {
  const prepared = dataPreparator(input);

  let treeCount = 0;
  let j = delta.x;

  for (let i = delta.y; i < prepared.height; i = i + delta.y) {
    if(prepared.matrix[i][j] === '#') {
      treeCount = treeCount + 1;
    }
    j = (j + delta.x) < prepared.width ? j + delta.x : j + delta.x - prepared.width;
  }

  return treeCount;
}


// Puzzle 2
// Multiple trees counts encountered when go with selected slope on a map with repeating patter;
export const countTreesForSlopes = (input: string, slopes: ISlope[]): number =>
  slopes.reduce((acc: number, nextSlope: ISlope) => acc * countTrees(input, nextSlope), 1);
