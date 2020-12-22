export interface ITile {
  id: number,
  top: string,
  right: string,
  bottom: string,
  left: string,
  image: string[][],
  edges?: {
    top: string[],
    right: string[],
    bottom: string[],
    left: string[],
  }
}

const nothing = (tile: ITile) => tile;

const rotate = (tile: ITile): ITile => {
  return {
    ...tile,
    top: tile.left,
    right: tile.top,
    bottom: tile.right,
    left: tile.bottom,
  };
}

const flipVertically = (tile: ITile): ITile => {
  return {
    ...tile,
    top: tile.bottom,
    right: tile.right.split('').reverse().join(''),
    bottom: tile.top,
    left: tile.left.split('').reverse().join(''),
  };
}
const flipHorizontally = (tile: ITile): ITile => {
  return {
    ...tile,
    top: tile.top.split('').reverse().join(''),
    right: tile.left,
    bottom: tile.bottom.split('').reverse().join(''),
    left: tile.right,
  };
}

export const addAllPossibleEdges = (tile: ITile): ITile => {
  const rotates = [ [rotate],[rotate, rotate],[rotate, rotate, rotate] ];
  const flipsVertRotates = [ [flipVertically],[flipVertically, rotate],[flipVertically, rotate, rotate],[flipVertically, rotate, rotate, rotate] ];
  const flipsHorRotates = [ [flipHorizontally],[flipHorizontally, rotate],[flipHorizontally, rotate, rotate],[flipHorizontally, rotate, rotate, rotate] ];
  const operations = [[nothing], ...rotates, ...flipsVertRotates, ...flipsHorRotates]
  let allEdges = {
    top: [],
    right: [],
    bottom: [],
    left: []
  }
  operations.forEach((ops, i) => {
    let opTile = ops.reduce((res, op) => op(res), tile);

    allEdges.top.push(opTile.top);
    allEdges.right.push(opTile.right);
    allEdges.bottom.push(opTile.bottom);
    allEdges.left.push(opTile.left);
  });

  return {
    ...tile,
    edges: allEdges
  };
}
