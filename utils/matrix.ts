/** 
 * Wrap matrix with symbol of your choice%
 *   wrapMatrix([[1,1,1],[1,1,1],[1,1,1]], '*');
 *          *****
 *  111     *111*
 *  111  => *111*
 *  111     *111*
 *          *****
 * */ 

 export const wrapMatrix = (matrix: any[][], fillWith: any) => {
  const wrapped = matrix.map(l => [fillWith, ...l, fillWith]);
  const emptyLine = [...wrapped[0]].fill(fillWith);
  return [emptyLine, ...wrapped, emptyLine];
}

/** 
 * Selects neighbor of current element and map through them
 *   mapNeighbor(1,1, (a) => a  +  1)
 *
 *  111     222
 *  111  => 212
 *  111     222
 * */ 

 export const mapNeighbor = (
   y: number,
   x: number,
   mapper: (coords: [x: number, y: number], index?: number, arr?: number[][]
) => any) => {
  return [
    [y - 1, x - 1],
    [y - 1, x],
    [y - 1, x + 1],
    [y, x - 1],
    [y, x + 1],
    [y + 1, x - 1],
    [y + 1, x],
    [y + 1, x + 1],
  ].map(([x,y], index, arr) => mapper([x,y], index, arr))
}