const dataPreparator = (str: string): number[] => {
  return str.split(',').map(i => parseInt(i));
};


// Puzzle 1
// find it, individually calculate the fuel needed for the mass of each module 
// (your puzzle input), then add together all the fuel values.
export const executeOpcodes = (input: string | number[], inp1 = 12, inp2 = 2) => {
  const prepared = Array.isArray(input) ? [...input] : dataPreparator(input);
  prepared[1] = inp1;
  prepared[2] = inp2;

  for (let i = 0; i < prepared.length - 4; i = i + 4) {
    const opType = prepared[i];
    const indx1 = prepared[i + 1];
    const indx2 = prepared[i + 2];
    const insertIndex = prepared[i + 3];
    if (opType === 99) break;

    prepared[insertIndex] = opType === 1 ? prepared[indx1] + prepared[indx2] : prepared[indx1] * prepared[indx2];
  }

  return prepared[0];
}


// Puzzle 2
// Find inputs which will produce expectedResult after opts from input;
export const guessInputValues = (input: string, expectedResult = 19690720) => {
  const prepared = dataPreparator(input);
  let result: { noun: number, verb: number };

  for (let noun = 1;  noun <= 99; noun++) {
    for (let verb = 1;  verb <= 99; verb++) {
      if (executeOpcodes(input, noun, verb) === expectedResult) {
        result = { noun, verb };
        break
      }
    }
  }

  return 100 * result.noun + result.verb;
}