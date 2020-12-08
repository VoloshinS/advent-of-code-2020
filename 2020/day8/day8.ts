type Operation = 'acc' | 'jmp' | 'nop';

interface Instruction {
  operation: Operation;
  argument: number;
  index: number;
}

interface IInstrMap {
  [index: string]: boolean
}

const dataPreparator = (str: string): Instruction[] => {
  return str.split('\n').map((s, index) => {
    const [ op, value ] = s.split(' ');
    const argument = parseInt(value);
    const operation = op as Operation;

    return { operation, argument, index };
  });
};


// Puzzle 1

const executeProgram = (
  { operation, argument, index }: Instruction,
  arr: Instruction[],
  acc: number,
  instrMap: IInstrMap
) => {
  if (instrMap[index]) return acc;
  
  instrMap[index] = true;

  if (operation === 'nop') {
    return executeProgram(arr[index + 1], arr, acc, instrMap);
  }

  if (operation === 'acc') {
    return executeProgram(arr[index + 1], arr, acc + argument, instrMap);
  }

  if (operation === 'jmp') {
    return executeProgram(arr[index + argument], arr, acc, instrMap);
  }
}

export const getProgramResult = (input: string) => {
  const prepared = dataPreparator(input);

  return executeProgram(prepared[0], prepared, 0, {});
}


// Puzzle 2
// What is the value of the accumulator after the program terminates?

const getNextInstr = (i: number, arr: Instruction[]) =>
  i === arr.length ? 'end' : arr[i];

const executeFixedProgram = (
  instruction: (Instruction  | 'end'),
  arr: Instruction[],
  acc: number,
  instrMap: IInstrMap
) => {
  if (instruction === 'end') return acc;
  if (!instruction || instrMap[instruction.index]) return null;

  const { operation, argument, index } = instruction;
  
  instrMap[index] = true;

  if (operation === 'nop') {
    return executeFixedProgram(getNextInstr(index + 1, arr), arr, acc, instrMap);
  }

  if (operation === 'acc') {
    return executeFixedProgram(getNextInstr(index + 1, arr), arr, acc + argument, instrMap);
  }

  if (operation === 'jmp') {
    return executeFixedProgram(getNextInstr(index + argument, arr), arr, acc, instrMap);
  }
}

export const getTerminatedProgramResult = (input: string) => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, next, i) => {
    if (res) return res;
    const updatedInstruction: Instruction = {
      ...next,
      operation: next.operation === 'nop' && next.argument ? 'jmp' : (next.operation === 'jmp' ? 'nop' : next.operation)
    }

    const updatedProgram = [...prepared.slice(0, i), updatedInstruction, ...prepared.slice(i + 1)];
    const acc = executeFixedProgram(updatedProgram[0], updatedProgram, 0, {});

    return acc;
  }, null);
}

