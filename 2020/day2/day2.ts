type passwordIsValid = <T>(arg: number | string, entry?: string) => boolean;

type ruleCreator = (first: number, last: number) => passwordIsValid;

interface IPolicy {
  entry: string;
  passwordIsValid: passwordIsValid;
}

interface IPasswordData {
  password: string;
  policy: IPolicy;
}

const dataPreparator = (str: string, ruleCreator: ruleCreator): IPasswordData[] => {
  return str.split('\n').map(i => {
    const [policy, password] = i.split(': ');
    const [range, entry] = policy.split(' ');
    const [min, max] = range.split('-');
    const first = parseInt(min);
    const last = parseInt(max);
  
    return {
        password,
        policy: {
          entry,
          passwordIsValid: ruleCreator(first, last)
        }
    }
  });
};

// Puzzle 1
//Find number of valid passwords policy: character should be in range;
export const findNumberOfValidPasswords = (inputString: string): number => {
  const ruleCreator = (first: number, last: number) => (count: number) => count >= first && count <= last;
  const prepared = dataPreparator(inputString, ruleCreator);

  return prepared.reduce((res, { password, policy }) => {
    const passwordEntriesCounts = password.split('').reduce((countMap, nextLetter) => {
      countMap[nextLetter] = countMap[nextLetter] ? countMap[nextLetter] + 1 : 1;
      
      return countMap;
    }, {});
 
    const entryCount = passwordEntriesCounts[policy.entry];

    return entryCount && policy.passwordIsValid(entryCount) ? res + 1 : res; 
  }, 0)
}

// Puzzle 2
//Find number of valid passwords policy: character should be only on one of two positions;
export const findNumberOfValidPasswords2 = (inputString: string): number => {
  const ruleCreator = (first: number, last: number) => (password: number, entry: string) =>
    (password[first - 1] === entry && password[last - 1] !== entry)
    || (password[first - 1] !== entry && password[last - 1] === entry);
  const prepared = dataPreparator(inputString, ruleCreator);

  return prepared.reduce((res, { password, policy }) => {
    return policy.passwordIsValid(password, policy.entry) ? res + 1 : res; 
  }, 0)
}
