import { createExecuteOp, Operations } from './day5.utils';

const dataPreparator = (str: string) => {
  return str.split(',').map(i => parseInt(i));
};

// Puzzle 1
export const func1 = (inputStr: string, inputNumber: number) => {
  const prepared = dataPreparator(inputStr);
  let outputNumber = 0;
  const executeOp = createExecuteOp(inputNumber, [
    Operations.sum,
    Operations.multi,
    Operations.input,
    Operations.output
  ]);

  for (let i = 0; i < prepared.length;) {
    [i, outputNumber] = executeOp(i, prepared, outputNumber);
 
    if (prepared[i] === 99 || !prepared[i]) break;
  }

  return outputNumber;
}

// Puzzle 2
export const func2 = (inputStr: string, inputNumber: number) => {
  const prepared = dataPreparator(inputStr);
  let outputNumber = 0;
  const executeOp = createExecuteOp(inputNumber, [
    Operations.sum,
    Operations.multi,
    Operations.input,
    Operations.output,
    Operations.jumpIfFalse,
    Operations.jumpIfTrue,
    Operations.lessThan,
    Operations.equals
  ]);

  for (let i = 0; i < prepared.length;) {
    [i, outputNumber] = executeOp(i, prepared, outputNumber);

    if (prepared[i] === 99 || !prepared[i]) break;
  }

  return outputNumber;
}