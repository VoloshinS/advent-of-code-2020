const dataPreparator = (str: string) => {
  return str.split('\n').map(l => l.split('-'));
};

 
const buildGraph = (vertexes: string[][], graph = {}) => {
  for (let i = 0; i < vertexes.length; i++) {
    const [s,e] = vertexes[i];
    if (s === 'start' || e === 'end') {
      graph[s] = [ ...(graph[s] || []), e]
    } else {
      graph[s] = [ ...(graph[s] || []), e]
      graph[e] = [ ...(graph[e] || []), s]
    }
  }

  return graph;
}

const getPaths = (
    el: string,
    graph: { [k: string]: string[] },
    paths: { [k: string]: boolean },
    visitStrategy: (el: string, path: string) => boolean,
    start = el
  ) => {
  return graph[el].reduce((acc, key) => {
    const newStart = `${start},${key}`;

    if (key === 'end') acc[newStart] = true;
    if (key === 'end' || visitStrategy(key, start)) return acc;

    return getPaths(key, graph, acc, visitStrategy, newStart);
  }, paths);
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const graph = buildGraph(prepared);
  const visitStrategy = (key: string, path: string) =>
    (key === key.toLowerCase() && path.includes(key));
  const paths = getPaths('start', graph, {}, visitStrategy);
  return Object.keys(paths).length;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const graph = buildGraph(prepared);
  const visitStrategy = (key: string, path: string) => {
    if (key !== key.toLowerCase()) return false;
    if (key === 'start') return path.includes(key);
    const mapPath = path
      .split(',')
      .reduce((a, e) => ({ ...a,[e]: (a[e] ||0) + 1 }),{});
    let res = false;

    Object.keys(mapPath).forEach(e => {
      if(e === e.toLowerCase() && mapPath[e] === 2) {
        res = path.includes(key);
      }
    })

    return res;
  }

  const paths = getPaths('start', graph, {}, visitStrategy);

  return Object.keys(paths).length;
}