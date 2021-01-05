const dataPreparator = (str: string) => {
  return +str;
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let i = 1;
  let closestOctagonal: number;
  let min: number;

  while (true) {
    let octagonalNumber = 4 * i * i - 4 * i + 1;
    if (octagonalNumber > prepared) {
      min = i - 1;
      closestOctagonal = octagonalNumber;
      break;
    }
    i++;
  }
  let position = min;
  let corner = false;
  while (true) {
    if ((closestOctagonal - position - prepared) < min) {
      const diff = closestOctagonal - position - prepared;
      position = corner ? min - diff : diff;
      break;
    }
    corner = !corner;
    position = position + min;
  }

  return min + position;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  return;
}