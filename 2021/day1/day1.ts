
const dataPreparator = (inputStr: string): number[] =>
  inputStr.split('\n').map(i => parseInt(i));

// Puzzle 1
//Find the two entries that sum to 2020
// and then multiply those two numbers together
export const find2021increaseNumber = (input: string): (number | null) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((acc, next, i, arr) => (next > arr[i-1] ? acc + 1 : acc), 0);
}

  // Puzzle 2
  //Find the three entries that sum to 2020
  // and then multiply those three numbers together
export const find2021increaseNumberTriple = (input: string): (number | null) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((acc, next, i, arr) => {
    const triple = (arr: any[], i: number) => parseInt(arr[i] + arr[i+1] + arr[i+2]);
    const currTrip = triple(arr, i);
    const nextTrip = triple(arr, i+1);
    
    if (!nextTrip) return acc;
    
    return currTrip < nextTrip ? acc + 1 : acc;
  }, 0);
};