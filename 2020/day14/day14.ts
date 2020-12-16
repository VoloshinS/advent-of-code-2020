const dataPreparator = (str: string) => {
  const lines = str.split('\n');
  let lastMask = '';
  let i = 0;
  return lines.reduce((res, line) => {
    if(line.match('mask = ')) {
      lastMask = line.substring(7);
      return res;
    }
    const [_, a] = line.split('[');
    const [index, id] = a.split('] = ');

    return res.concat({
      index: +index,
      id: (+id).toString(2),
      mask: lastMask
    });
  }, [])
};

export const func1 = (input: string) => {
  const mems = dataPreparator(input);
  let res = [];

  for (let i = 0; i < mems.length; i++) {
    const { id, index, mask } = mems[i];
    const idReversed = id.split('').reverse().join('');
    const shortMask = mask.replace(/^X*/g, '');
    const reversedMask = shortMask.split('').reverse().join('');
    let j = 0;
    res[index] = '';

    while(true) {
      if(idReversed[j] === undefined && j > shortMask.length) {
        break;
      }
      res[index] = res[index] + (reversedMask[j] === 'X' ? idReversed[j] || '0' : reversedMask[j] || '0');

      j++;
    }
  }

  return res.reduce((res, n) => (res + parseInt(n.split('').reverse().join(''), 2)), 0);
}
