import { IBagInfo, IBag } from './day7.interfaces';

const DEFAULT_COLOR = 'shiny gold';

const dataPreparator = (str: string): IBag[] => {
  return str
    .split('\n')
    .reduce((bagsInfoAccumulator, line) => {
      const [bag, containedBags] = line.split('contain');
      const bagColor = bag.trim().replace(/bags?$/, '').trim();
      const strToBagInfo = (bagStr: string): (IBagInfo | null) => {
        const [bagsCount, ...color] = bagStr.trim().replace(/bags?\.?$/, '');

        return !parseInt(bagsCount) ? null : {
          color: color.join('').trim(),
          bagsCount: parseInt(bagsCount)
        };
      };

      return [
        ...bagsInfoAccumulator, {
          [bagColor]: containedBags.split(', ').map(strToBagInfo)
        }
      ];
    }, []);
};

// Puzzle 1
// How many bag colors can eventually contain at least one "shiny gold" bag
// according to rules in input?

// recursively check if "bag info" or its "sub bag info"s contain selected color
const isContainSelectedColor = (info: IBag, initial: IBag[], colorToCheck: string): boolean => {
  const [[_, colors]] = Object.entries(info);

  if (!colors[0]) return false;

  const hasSelectedColor = colors.map(({ color }) => color).includes(colorToCheck);

  if (hasSelectedColor) return true;

  return colors.reduce((hasSelectedColor, { color }) => {
    if (hasSelectedColor) return true;

    const nextBagInfo = initial.find(bagInfo => !!bagInfo[color]);

    return nextBagInfo ? isContainSelectedColor(nextBagInfo, initial, colorToCheck) : false;
  }, false);
}

export const sumOfColorsContainingSelectedColor = (input: string, colorToCheck = DEFAULT_COLOR): number => {
  const prepared = dataPreparator(input);

  return prepared.reduce((res, i) => {
    const isValid = isContainSelectedColor(i, prepared, colorToCheck);

    return isValid ? res + 1 : res;
  }, 0);
}

// Puzzle 2
// How many individual bags are required inside your single "shiny gold" bag
// according to rules in input?

// recursively sum number of bags which fit into bag of selected color
const sumBagsOfSelectedColor = (info: IBag, initial: IBag[]): number => {
  const [[_, colors]] = Object.entries(info);

  if (!colors[0]) return 1;

  return colors.reduce((res, { color, bagsCount }) => {
    const next = initial.find(el => !!el[color]);

    return res + (next ? sumBagsOfSelectedColor(next, initial) * bagsCount : bagsCount);
  }, 0) + 1;
}

export const countBagsInSelectedBag = (input: string, colorToCheck = DEFAULT_COLOR): number => {
  const prepared = dataPreparator(input);
  const requiredInfo = prepared.find(e => !!e[colorToCheck]);

  return sumBagsOfSelectedColor(requiredInfo, prepared) - 1;
}