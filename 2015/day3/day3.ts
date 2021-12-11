const dataPreparator = (str: string) => {
  return str.split('');
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let current = [0, 0];
  let visited = { '0_0': true };

  for (let i = 0; i < prepared.length; i++) {
    const e = prepared[i];
    if (e === '^') {
      current = [current[0],current[1]-1];
    } else if (e === 'v') {
      current = [current[0],current[1]+1];
    } else if (e === '>') {
      current = [current[0]+1,current[1]];
    } else if (e === '<') {
      current = [current[0]-1,current[1]];
    }
    visited[`${current[0]}_${current[1]}`] = true;
  }

  return Object.keys(visited).length;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let current = {
    santa: [0, 0],
    robot: [0, 0]
  };
  let visited = { '0_0': true };

  for (let i = 0; i < prepared.length; i++) {
    const e = prepared[i];
    const who = i % 2 ? 'santa' : 'robot';
    if (e === '^') {
      current[who] = [current[who][0],current[who][1]-1];
    } else if (e === 'v') {
      current[who] = [current[who][0],current[who][1]+1];
    } else if (e === '>') {
      current[who] = [current[who][0]+1,current[who][1]];
    } else if (e === '<') {
      current[who] = [current[who][0]-1,current[who][1]];
    }

    visited[`${current[who][0]}_${current[who][1]}`] = true;
  }

  return Object.keys(visited).length;
}