const dataPreparator = (str: string) => {
  return str.split('').map(n => +n);
};

const getIndx = (i, arr) => i <= (arr.length - 1) ? i : i % (arr.length);

const findNextOne = (el, arr: number[]) => {
  let toFind = el - 1;
  while(true) {
    if (toFind < 1) {
      return Math.max(...arr);
    }

    const a = arr.find(el => el === toFind);

    if (a) return a;

    toFind = toFind - 1;
  }

}
// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let i = 0;
  let arr = [...prepared];

  while(i < 100) {
    let currIndx = getIndx(i, arr);
    let curr = arr[currIndx];
    let indexesToPick = [getIndx(i + 1, arr), getIndx(i + 2, arr), getIndx(i + 3, arr)];
    let insert = indexesToPick.map(i => arr[i]);
    let toSearch = arr.filter((el, i) => !indexesToPick.includes(i));
    let found = findNextOne(curr, toSearch);
    let foundIndx = toSearch.indexOf(found);
    let unprepared = [...toSearch.slice(0, foundIndx + 1), ...insert, ...toSearch.slice(foundIndx + 1)];
    let newCurrIndx = unprepared.indexOf(curr);
    let delta = newCurrIndx - currIndx;
    arr = !delta ? unprepared : [ ...unprepared.slice(delta), ...unprepared.slice(0, delta) ]
    i++;
  }

  const oneIndx = arr.indexOf(1);

  return [...arr.slice(oneIndx + 1), ...arr.slice(0, oneIndx)].join('');
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  return;
}