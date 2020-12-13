const dataPreparator = (str: string): { ids: number[], time: number } => {
  const [ time, idsStr ] = str.split('\n');
  const ids = idsStr.split(',').map(a => parseInt(a)).filter(a => !!a);
  
  return {
    time: parseInt(time),
    ids,
  };
};

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let ids = prepared.ids.map(id => ({
    wait: (id * Math.ceil(prepared.time / id)) - prepared.time,
    id
  })).sort((a,b) => a.wait - b.wait);

  return ids[0].wait * ids[0].id;
}

const parse = (str: string) =>
  str.split('\n')[1].split(',').map((a, delta) =>
    (parseInt(a) && { id: parseInt(a), delta })
  ).filter(a => !!a);

export const func2 = (inputStr: string) => {
  const prepared = parse(inputStr);
  let increment = prepared[0].id;
  let result = 0;
  for (let i = 1; i < prepared.length; i++) {
    const { id, delta } = prepared[i];
    while(true) {
      if((result + delta) % id === 0) {
        increment = increment * id;
        break;
      }
      result = result + increment;
    }
  }

  return result;
}
