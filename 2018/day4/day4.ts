const getMinutes = (str) =>
  parseInt(str.substring(9,11));

const dataPreparator = (str: string) => {
  const sorted = str.split('\n').map(a => ({
    compare: Date.parse(a.substring(1,17).replace('1518', '2020')),
    original: a
  })).sort((a, b) => a.compare - b.compare).map(a => a.original).join('\n');
  return sorted.split('Guard #').reduce((result, shift) => {
    if (shift.startsWith('[1518')) return result;
    let id = parseInt(shift.substring(0, 4))
    let logs = shift.split('[1518-');
    let i = 0;
    let intervals = logs.reduce((res, log) => {
      if (log.includes('falls asleep')) {
        res[i] = [];
        res[i][0] = getMinutes(log);
      }
      if (log.includes('wakes up')) {
        !res[i] && console.log(i, res, logs)
        res[i][1] = getMinutes(log);
        i++;
      }
      return res;
    }, []);
    result[id] = result[id] || [];
    result[id] = [...result[id], ...intervals];
    return result;
  }, {});
};

const getEmptyMinutes = () => Array.from(new Array(60)).map(a => 0);
const sumIntervals = (intervals: [number, number][]) =>
  intervals.reduce((res, [start, end]) => res + (end - start), 0);

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const minutes = getEmptyMinutes();
  const guard = Object.keys(prepared).map(id => ({
    id,
    minutes: sumIntervals(prepared[id])
  }))
  .sort((a, b) => b.minutes - a.minutes)[0];

  prepared[guard.id].forEach(([s, e]) => {
    for(let i = s; i < e; i++) minutes[i] = minutes[i] + 1;
  })

  return parseInt(guard.id) * minutes.indexOf(Math.max(...minutes));
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const guard = Object.keys(prepared).map(id => {
    const minutes = getEmptyMinutes();
    prepared[id].forEach(([s, e]) => {
      for(let i = s; i < e; i++) minutes[i] = minutes[i] + 1;
    });

    return ({
      id,
      minutes,
      maxOverlap: Math.max(...minutes)
    })
  })
  .sort((a, b) => b.maxOverlap - a.maxOverlap)[0];

  return parseInt(guard.id) * guard.minutes.indexOf(guard.maxOverlap);
}