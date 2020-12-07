const dataPreparator = (str: string): string[][] => {
  return str.split('\n\n').map(el => el.split(''));
};

// Puzzle 1
// sum the number of questions to which anyone answered "yes"
export const sumAnyoneRespondYes = (input: string): number => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, i) =>
    (new Set(i.filter(a => a !== '\n'))).size + res
  , 0);
}

// Puzzle 2
// sum the number of questions to which everyone answered "yes"
export const sumEveryoneRespondYes = (input: string): number => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, i) => {
    const groupSize = i.filter(a => a === '\n').length + 1;
    const mapAnswers = i.filter(a => a !== '\n').reduce((ansMap, next) => {
      ansMap[next] = ansMap[next] ? ansMap[next] + 1 : 1;

      return ansMap;
    }, {});
    const sameAnswersInGroup = Object.entries(mapAnswers)
      .filter(ans => ans[1] === groupSize).length;

    return res + sameAnswersInGroup;
  }, 0);
}