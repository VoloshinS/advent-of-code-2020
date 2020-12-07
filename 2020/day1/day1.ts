
const dataPreparator = (inputStr: string): number[] =>
  inputStr.split('\n').map(i => parseInt(i));

// Puzzle 1
//Find the two entries that sum to 2020
// and then multiply those two numbers together
export const find2020sumTwoEntries = (input: string): (number | null) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((result, i) => {
    if (result) return result;

    const j = prepared.find(j => j + i === 2020);

    return j ? j * i : result;
  }, null);
}

  // Puzzle 2
  //Find the three entries that sum to 2020
  // and then multiply those three numbers together
export const find2020sumThreeEntries = (input: string): (number | null) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((result, i) =>
    result ? result : prepared.reduce((result, j) => {
      if (result) return result;

      const k = prepared.find(k => k + j + i === 2020);

      return k ? k * j * i : result;
    }, null)
  , null);
};