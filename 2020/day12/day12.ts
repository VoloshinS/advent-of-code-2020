import { mapDir, mapDegToDir, mapDirToDeg } from './day12.constants';

const dataPreparator = (str: string) => {
  return str.split('\n').map(([command, ...value]) => ({
    command,
    value: parseInt(value.join(''))
  }));
};

const fixDeg = (deg: number) => deg >= 360 ? deg - 360 : deg < 0 ? 360 + deg : deg;
// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let dir = 'E';
  const position = { x: 0, y: 0 };

  for (let i = 0; i < prepared.length; i++) {
    const { command, value } = prepared[i];

    if (command === 'F') {
      const { axis, sign } = mapDir[dir];
      position[axis] = position[axis] + sign * value;
    }

    if (command === 'R') {
      dir = mapDegToDir[fixDeg(mapDirToDeg[dir] + value)];
    }

    if (command === 'L') {
      dir = mapDegToDir[fixDeg(mapDirToDeg[dir] - value)];
    }

    if (['N', 'S', 'W', 'E'].includes(command)) {
      const { axis, sign } = mapDir[command];
      position[axis] = position[axis] + sign * value;
    }
  }
  return Math.abs(position.x) + Math.abs(position.y);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const shipPosition = { x: 0, y: 0 };
  let waypointPosition = { x: 10, y: 1 };

  for (let i = 0; i < prepared.length; i++) {
    const { command, value } = prepared[i];

    if (command === 'F') {
      shipPosition.x = shipPosition.x + waypointPosition.x * value;
      shipPosition.y = shipPosition.y + waypointPosition.y * value;
    }

    if (command === 'R') {
      const { x, y } = waypointPosition;
      waypointPosition = {
        x: value === 90 ? y : value === 270 ? -y : value === 180 ? -x : x,
        y: value === 90 ? -x : value === 270 ? x : value === 180 ? -y : y
      };
    }

    if (command === 'L') {
      const { x, y } = waypointPosition;
      waypointPosition = {
        x: value === 90 ? -y : value === 270 ? y : value === 180 ? -x : x,
        y: value === 90 ? x : value === 270 ? -x : value === 180 ? -y : y
      }
    }

    if (['N', 'S', 'W', 'E'].includes(command)) {
      const { axis, sign } = mapDir[command];
      waypointPosition[axis] = waypointPosition[axis] + sign * value;
    }
  }

  return Math.abs(shipPosition.x) + Math.abs(shipPosition.y);
}