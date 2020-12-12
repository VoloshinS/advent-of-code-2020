export const mapDir = {
  E: { axis: 'x', sign: 1 },
  W: { axis: 'x', sign: -1 },
  N: { axis: 'y', sign: 1 },
  S: { axis: 'y', sign: -1 }
};

export const mapDirToDeg = {
  N: 0,
  E: 90,
  S: 180,
  W: 270,
};

export const mapDegToDir = {
  0: 'N',
  90: 'E',
  180: 'S',
  270: 'W'
};
