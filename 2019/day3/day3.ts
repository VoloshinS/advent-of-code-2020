interface ILine {
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  steps: number;
}

interface IIntersection {
  x: number;
  y: number;
  hasIntersection: boolean;
}

const dataPreparator = (str: string): ILine[][] => {
  return str.split('\n')
    .map(l => l.split(',')
      .reduce((res: ILine[], i) => {
        const { endX: prevEndX, endY: prevEndY } = res[res.length - 1] || { endX: 0, endY: 0 };
        const [dir, ...dist] = i;
        const distance = parseInt(dist.join(''));
        const endX = dir === 'L' ? prevEndX - distance : dir === 'R' ? prevEndX + distance : prevEndX;
        const endY = dir === 'U' ? prevEndY - distance : dir === 'D' ? prevEndY + distance : prevEndY;
        
        return [...res, { startX: prevEndX, startY: prevEndY, endX, endY, steps: distance }];
      }, [])
    );
};

function getIntersectionCoords(line1: ILine, line2: ILine): IIntersection {
  const result: IIntersection = {
    x: null,
    y: null,
    hasIntersection: false
  };
  const denominator = ((line2.endY - line2.startY) * (line1.endX - line1.startX)) - ((line2.endX - line2.startX) * (line1.endY - line1.startY));

  if (denominator == 0) return result;

  let a = line1.startY - line2.startY;
  let b = line1.startX - line2.startX;
  const numerator1 = ((line2.endX - line2.startX) * a) - ((line2.endY - line2.startY) * b);
  const numerator2 = ((line1.endX - line1.startX) * a) - ((line1.endY - line1.startY) * b);
  a = numerator1 / denominator;
  b = numerator2 / denominator;

  result.x = line1.startX + (a * (line1.endX - line1.startX));
  result.y = line1.startY + (a * (line1.endY - line1.startY));
  result.hasIntersection = (b > 0 && b < 1) && (a > 0 && a < 1);

  return result;
};

// Puzzle 1
export const getDistanceToClosestIntersection = (input: string) => {
  const [wire1, wire2] = dataPreparator(input);
  const intersections = [];

  for (let i = 0; i < wire1.length; i++) {
    for (let j = 0; j < wire2.length; j++) {
      const intersection = getIntersectionCoords(wire1[i], wire2[j]);

      if (intersection.hasIntersection) {
        intersections.push(intersection);
      }
    }
  }

  return Math.min(...intersections.map(({ x, y }) => Math.abs(x) + Math.abs(y)));
}

const stepsAccumulator = (intersection: IIntersection, i: number) => (
  res: number,
  { startY, endY, endX, steps }: ILine,
  indx: number
) => {
  if (indx > i) return res;
  if (indx === i) {
    const lastLinePart = Math.abs(endY - startY ? endY - intersection.y : endX - intersection.x);

    return res + steps - lastLinePart;
  }

  return res + steps;
}

// Puzzle 2
export const getWiresLengthToFirstIntersection = (input: string) => {
  const [wire1, wire2] = dataPreparator(input);
  const intersections = [];

  for (let i = 0; i < wire1.length; i++) {
    for (let j = 0; j < wire2.length; j++) {
      const intersection = getIntersectionCoords(wire1[i], wire2[j]);

      if (intersection.hasIntersection) {
        const steps1 = wire1.reduce(stepsAccumulator(intersection, i), 0);
        const steps2 = wire2.reduce(stepsAccumulator(intersection, j), 0);

        intersections.push({...intersection, steps: steps1 + steps2 });
      }
    }
  }

  return Math.min(...intersections.map(({ steps }) => steps));
}

