interface INode {
  value: string;
  weight: number;
  children: null | string[];
}

interface ITreeNode {
  value: string;
  weight: number;
  children: null | ITreeNode[];
}

const dataPreparator = (str: string): INode[] => {
  return str.split('\n').map(l => {
    const [line, rawChildren] = l.split(' -> ');
    const [value, rawWeight] = line.split(' (');

    return {
      weight: parseInt(rawWeight),
      value,
      children: rawChildren ? rawChildren.split(', ') : null
    }
  });
};

const findRoot = (array: INode[]) => {
  return array.find(e => e.children && array.every((el) => !el.children || !el.children.includes(e.value)))
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);

  return findRoot(prepared).value;
}

const toTree = (root: INode, array: INode[]): ITreeNode[] => {
  if (!root.children) return null;
  
  return root.children.map(value => {
    const child = array.find(e => e.value === value);

    return {
      value,
      weight: child.weight,
      children: toTree(child, array)
    };
  });
}


const traverse = (node: ITreeNode, result: { value: number | null }) => {
  if (!node.children) return node.weight;

  const weights = node.children.map((child) => traverse(child, result));
  const uniqueWeights = Array.from(new Set(weights));

  if (uniqueWeights.length > 1 && !result.value) {
    let [first, second, ...rest] = [...weights].sort((a, b) => a - b);
    let correctWeight = first === second ? first : rest[rest.length - 1];
    let wrongWeight = first === second ? rest[rest.length - 1] : first;
    let diff = wrongWeight - correctWeight;
    let index = weights.indexOf(wrongWeight);

    result.value = (node.children[index].weight - diff);
  }

  return node.weight + node.children.reduce((res, child) => res + traverse(child, result), 0);
}
// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const root = findRoot(prepared);
  const result = { value: null };

  traverse({
    ...root,
    children: toTree(root, prepared)
  }, result);

  return result.value;
}