const rotateMatrix = function(matrix: any[][]) {
  flipMajorDiagonal(matrix);
  reverseEachRow(matrix);
  return matrix;
}

const flipMajorDiagonal = function(matrix: any[][]) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}

const reverseEachRow = function(matrix: any[][]) {
    for (let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
    return matrix;
}

const dataPreparator = (str: string) => {
  return str.split('\n\n').reduce((acc, l, i) => {
    if (!i) {
      acc.numbs = l.split(',');
    } else {
      const board = l
        .replace(/  /g, ' ')
        .split('\n')
        .map(ll => ` ${ll.trim()} `)
        .join('\n');
      const rotatedBoard = rotateMatrix(
        board
          .split('\n')
          .map(ll => ll.trim().split(' '))
      )
        .map((ll) => ` ${ll.join(' ')} `)
        .join('\n');

      acc.boards = acc.boards.concat(board);
      acc.rotatedBoards = acc.rotatedBoards.concat(rotatedBoard);
    }

    return acc;
  }, { numbs: [], boards: [], rotatedBoards: []});
};

const calculateScores = (boards, rotatedBoards, numbs, countForWinnerNumber) => {
  let win;
  let alreadyWin = [];

  for (let i = 0; i < numbs.length; i++) {
    for (let j = 0; j < boards.length; j++) {
      if (!alreadyWin.includes(j)) {
        boards[j] = boards[j].replace(` ${numbs[i]} `, ' # ')
        rotatedBoards[j] = rotatedBoards[j].replace(` ${numbs[i]} `, ' # ')

        if (boards[j].indexOf('# # # # #') >= 0) {
          if (alreadyWin.length === countForWinnerNumber) {
            win = { winNum: numbs[i], j, board: boards[j], rotatedBoard: rotatedBoards[j]};
            break;
          } else {
            alreadyWin.push(j);
          }
        } else if (rotatedBoards[j].indexOf('# # # # #') >= 0) {
          if (alreadyWin.length === countForWinnerNumber) {
            win = { winNum: numbs[i], j, board: rotatedBoards[j], rotatedBoard: boards[j]};
            break;
          } else {
            alreadyWin.push(j);
          }
        }
      }
    }

    if (win) {
      break;
    }
  }
  const line = win.board
    .replace(/ \#/img, '')
    .replace(/\n/img, '')
    .replace(/  /img, ' ')
    .trim()
    .split(' ');

  return parseInt(win.winNum) * line.reduce((a, n) => a + parseInt(n || '0'), 0);
}

// Puzzle 1
export const func1 = (input: string) => {
  const { boards, rotatedBoards, numbs } = dataPreparator(input);

  return calculateScores(boards, rotatedBoards, numbs, 0);
}

// Puzzle 2
export const func2 = (input: string) => {
  const { boards, rotatedBoards, numbs } = dataPreparator(input);
  const countForWinnerNumber = boards.length - 1;

  return calculateScores(boards, rotatedBoards, numbs, countForWinnerNumber);
}