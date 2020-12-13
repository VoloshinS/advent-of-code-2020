const dataPreparator = (str: string, width: number, height: number) => {
  const layerSize = width * height;
  const layers = [];
  for (let i = 0; i < str.length; i = i + layerSize) {
    height === 1 && console.log(i, i + layerSize)
    layers.push(str.substring(i, i + layerSize))
  }

  return layers;
};

// Puzzle 1
export const func1 = (input: string, width = 25, height = 6) => {
  const prepared = dataPreparator(input, width, height);

  const minZero = prepared.reduce((res, layerStr, i) => {
    const zeros = layerStr.match(/0/g) || [];
    const nextRes = {
      count: zeros.length,
      index: i
    }
    if (res.count === null) return nextRes;
    
    return res.count > nextRes.count ? nextRes : res;
  }, { count: null, index: undefined });

  const res = prepared[minZero.index];

  return res.match(/1/g).length * res.match(/2/g).length;
}

// Puzzle 2
export const func2 = (input: string, width = 25, height = 6) => {
  const prepared = dataPreparator(input, width, height);
  let finalLayer = [];
  for(let i = 0; i < width * height; i++) {
    for (let j = 0; j < prepared.length; j++) {
      if(prepared[j][i] === '1') {
        finalLayer.push('1')
        break;
      }
      if(prepared[j][i] === '0') {
        finalLayer.push('0')
        break;
      }
    }
  }

  return finalLayer.reduce((res, color, i) => res + color + ((i + 1) % 25 ? '' : '\n'), '').trim();
}
