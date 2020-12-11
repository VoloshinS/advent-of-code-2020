const getOp = (i: number, arr: number[]) => ({
  opType: arr[i],
  param1: arr[i + 1],
  param2: arr[i + 2],
  param3: arr[i + 3]
});

export enum Operations {
  sum,
  multi,
  input,
  output,
  lessThan,
  equals,
  jumpIfFalse,
  jumpIfTrue
}

export const createExecuteOp = (inputNumber: number, supportedOps: Operations[]) =>
  (i: number, prepared: number[], outputNumber: number) => {
    const { opType, param1, param2, param3 } = getOp(i, prepared);

    if (supportedOps.includes(Operations.sum) && [1, 1101, 1001, 101].includes(opType)) {
      const term1 = [1101, 101].includes(opType) ? param1 : prepared[param1];
      const term2 = [1101, 1001].includes(opType) ? param2 : prepared[param2];
      prepared[param3] = term1 + term2;
      i = i + 4;
    }

    if (supportedOps.includes(Operations.multi) && [2, 1102, 1002, 102].includes(opType)) {
      const term1 = [1102, 102].includes(opType) ? param1 : prepared[param1];
      const term2 = [1102, 1002].includes(opType) ? param2 : prepared[param2];
      prepared[param3] = term1 * term2;
      i = i + 4;
    }

    if (supportedOps.includes(Operations.input) && opType === 3) {
      prepared[param1] = inputNumber;
      i = i + 2;
    }

    if (supportedOps.includes(Operations.output) && opType === 4 || opType === 104) {
      const outputIndex = opType === 4 ? param1 : i + 1;
      outputNumber = prepared[outputIndex];
      i = i + 2;
    }

    if (supportedOps.includes(Operations.jumpIfTrue) && [5, 1105, 1005, 105].includes(opType)) {
      const term1 = [1105, 105].includes(opType) ? param1 : prepared[param1];
      const term2 = [1105, 1005].includes(opType) ? param2 : prepared[param2];
      const shouldJump = !!term1;
      i = shouldJump ? term2 : i + 3;
    }

    if (supportedOps.includes(Operations.jumpIfFalse) && [6, 1106, 1006, 106].includes(opType)) {
      const term1 = [1106, 106].includes(opType) ? param1 : prepared[param1];
      const term2 = [1106, 1006].includes(opType) ? param2 : prepared[param2];
      const shouldJump = !term1;
      i = shouldJump ? term2 : i + 3;
    }

    if (supportedOps.includes(Operations.lessThan) && [7, 1107, 1007, 107].includes(opType)) {
      const term1 = [1107, 107].includes(opType) ? param1 : prepared[param1];
      const term2 = [1107, 1007].includes(opType) ? param2 : prepared[param2];
      prepared[param3] = term1 < term2 ? 1 : 0;
      i = i + 4;
    }

    if (supportedOps.includes(Operations.equals) && [8, 1108, 1008, 108].includes(opType)) {
      const term1 = [1108, 108].includes(opType) ? param1 : prepared[param1];
      const term2 = [1108, 1008].includes(opType) ? param2 : prepared[param2];
      prepared[param3] = term1 === term2 ? 1 : 0;
      i = i + 4;
    }

    return [i, outputNumber];
  }
