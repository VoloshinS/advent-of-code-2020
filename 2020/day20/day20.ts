import { addAllPossibleEdges } from './day20.utils';

const dataPreparator = (str: string) => {
  const rawTiles = str.split('\n\n');
  
  return rawTiles.map(t => {
    const [ rawId, ...lines ] = t.split('\n');
    const id = parseInt(rawId.substring(5, 9));
    const image = []; //lines.map(p => p.split(''));

    return {
      id,
      image,
      top: lines[0],
      right: lines.map(p => p[p.length - 1]).join(''),
      bottom: lines[lines.length - 1],
      left: lines.map(p => p[0]).join(''),
    };
  })
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input).map(addAllPossibleEdges);
  let multi = 1;

  for (let currImg of prepared) {
    let restImages = prepared.filter(i => i.id !== currImg.id);
    let countNeighbors = 0;

    for (let { edges } of restImages) {
      edges.bottom.includes(currImg.top) && countNeighbors++;
      edges.left.includes(currImg.right) && countNeighbors++;
      edges.top.includes(currImg.bottom) && countNeighbors++;
      edges.right.includes(currImg.left) && countNeighbors++;
    }
    const isCorner = countNeighbors === 2;
    multi = multi * (isCorner ? currImg.id : 1);
  }

  return multi;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  return;
}