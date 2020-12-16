type IRule = [[number, number], [number, number], string];
const dataPreparator = (str: string) => {
  const [rules, myTick, ticks] = str.split('\n\n');
  
  const rls = rules.split('\n').map((i): IRule => {
    const [field, r] = i.split(': ');
    const [range1, range2] = r.split(' or ');
    const [s1, e1] = range1.split('-');
    const [s2, e2] = range2.split('-');
    return [[parseInt(s1),parseInt(e1)],[parseInt(s2),parseInt(e2)], field];
  });

  const [_, myTicket] = myTick.split('\n');
  const [__, ...tickets] = ticks.split('\n');

  return {
    rules: rls,
    ticket: myTicket.split(',').map(i => parseInt(i)),
    tickets: tickets.map(t => t.split(',').map(i => parseInt(i)))
  };
};

const isInvalid = (n: number) =>
  ([[s1, e1], [s2, e2], _]: IRule) => n < s1 || n > e2 || (n > e1 && n < s2);
const isValid = (n: number) =>
  ([[s1, e1], [s2, e2], _]: IRule) => (n >= s1 && n <= e1) || (n >= s2 && n <= e2);

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  let sum = 0;
  for (let ticket of prepared.tickets) {
    for (let i = 0; i < ticket.length; i++) {
      const n = ticket[i];
      if(prepared.rules.every(isInvalid(n))) {
        sum = sum + n;
      }
    }
  }

  return sum;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const { tickets, rules, ticket } = prepared;
  let validT: number[][] = [];
  // 1. Remove invalid tickets;
  for (let t of tickets) {
    let valid = true;
    for (let i = 0; i < t.length; i++) {
      const n = t[i];
      if(prepared.rules.every(isInvalid(n))) {
        valid = false;
        break;
      }
    }
    valid && validT.push(t);
  }

  // 2. Transpose valid tickets[] to fields[]
  const fields: number[][] = [];
  for (let i = 0; i < ticket.length; i++) {
    fields[i] = [];
    for (let t of validT) fields[i].push(t[i])
  }

  // 3. Get possible valid field name for each index
  const fieldNames = rules.map(r => r[2]);
  const names: (string[] | string)[] = [];
  for (let field of fields) {
    let possibleFs = [...fieldNames];
    for (let i = 0; i < field.length; i++) {
      for (let j = 0; j < fieldNames.length; j++) {
        if(!isValid(field[i])(rules[j])) {
          possibleFs = possibleFs.filter(f => f !== rules[j][2]);
        }
        if(possibleFs.length === 1) {
          break;
        }
      }
    }
    names.push(possibleFs);
  }

  // 4. Get exact valid field name for each index
  for (let i = 0; i < fieldNames.length; i++) {
    const [[ toRemove ]] = names.filter(p => p.length === 1);
    for (let j = 0; j < fieldNames.length; j++) {
      let ns = names[j];
      if (Array.isArray(ns)) {
        names[j] = ns.length === 1 ? toRemove : ns.filter(f => f !== toRemove);
      }
    }
  }

  // 5. Count result
  return (names as string[]).reduce((res, name, i) =>
    res * (name.startsWith('departure') ? prepared.ticket[i] : 1)
  , 1);
}