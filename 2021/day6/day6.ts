const dataPreparator = (str: string) => {
  return str.split(',').map(i => parseInt(i));
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let state = [...prepared];
  let newState = [];
  let newFishes = []
  for (var i = 0; i < 80; i++) {
    for (var j = 0; j < state.length; j++) {
      if (state[j] === 0) {
        newState[j] = 6;
        newFishes.push(8);
      } else {
        newState[j] = state[j] - 1
      }
    }
    state = newState.concat(newFishes);
    newState = [];
    newFishes = [];
  }
  return state.length;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let state = [];
  for (let i = 0; i < prepared.length; i++) {
    state[prepared[i]] = (state[prepared[i]] || 0) + 1;
  }

  let newState = [];
  for (let i = 0; i < 256; i++) {
    for (let j = 8; j >= 0; j--) {
      if (j === 0) {
        newState[6] = (state[j] || 0) + (state[7] || 0);
        newState[8] = state[j] || 0;
      } else {
        newState[j-1] = state[j] || 0;
      }
    }
    state = [...newState];
    newState = [];
  }
  
  return state.reduce((acc, n) => acc + n, 0);
}