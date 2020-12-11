type ICoordinates = [number, number];
type IVisibleCoordinates = ICoordinates[][];

export const copy = (arr: string[][]):string[][] => [...arr.map(i => [...i])];

export const print = (arr: string[][]): string => arr.map(line => line.join('')).join('\n');

export const countSymbols = (matrix: string[][], char: string) => matrix
  .reduce((res, line) => res.concat(line.filter(i => i === char)), []).length

export const getAdjacentIndexes = (i: number, j: number) => [
  [i - 1, j - 1],
  [i - 1, j],
  [i - 1, j + 1],
  [i, j - 1],
  [i, j + 1],
  [i + 1, j - 1],
  [i + 1, j],
  [i + 1, j + 1]
].filter(([i, j]) => i >= 0 && j >= 0);

export const getAdjacentSeatsCreator = (curr: string[][]) => (i: number, j: number) =>
  getAdjacentIndexes(i, j).map(([i, j])=> curr[i] && curr[i][j]);

const end = (curr: number, sign: number, max: number): boolean => sign > 0 ? curr >= max : curr < 0;

export const getSeatsCreator = (max1: number, max2: number) =>
  (i: number, j: number, sign1: number, sign2: number): [number, number][] => {
    let res = [];
    let k = 0;

    while (true) {
      i = i + sign1;
      j = j + sign2;
      if (end(i, sign1, max1) || end(j, sign2, max2)) break;
      res[k] = [i, j];
      k++;
    }

    return res;
  }

const getFirstSeatForDirection = (currMap: string[][]) => (res: string, [i, j]: ICoordinates): string =>
  res ? res : ['#', 'L'].includes(currMap[i] && currMap[i][j]) ? currMap[i][j] : ''

const getVisibleIndexes = (memo: IVisibleCoordinates[][], lineSize: number, linesCount: number) =>
  (i: number, j: number): IVisibleCoordinates => {
    if (memo[i] && memo[i][j]) return memo[i][j];
    const getSeats = getSeatsCreator(linesCount, lineSize);

    const visibleIndexes = [
      getSeats(i, j, -1, -1),
      getSeats(i, j, -1, 0),
      getSeats(i, j, -1, 1),
      getSeats(i, j, 0, -1),
      getSeats(i, j, 0, 1),
      getSeats(i, j, 1, -1),
      getSeats(i, j, 1, 0),
      getSeats(i, j, 1, 1)
    ];

    if (!memo[i]) {
      memo[i] = [];
    }
    memo[i][j] = visibleIndexes;

    return visibleIndexes;
  }

export const getVisibleSeatsCreator = (memo: IVisibleCoordinates[][], lineSize: number, linesCount: number) =>
  (curr: string[][]) =>
  (i: number, j: number): string[] => {
    const visibleIndexes = getVisibleIndexes(memo, lineSize, linesCount)(i, j);
    
    return visibleIndexes.reduce((visibleSeats: string[], direction: ICoordinates[]) => {
      const firstSeatForDirection = direction.reduce(getFirstSeatForDirection(curr), '');

      return [...visibleSeats, firstSeatForDirection ];
    }, []);
  }
