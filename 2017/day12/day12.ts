interface IRawNode {
  value: number,
  children: number[],
}

interface INode extends IRawNode {
  nodes: INode[],
  inTree: number[]
}

const dataPreparator = (str: string): IRawNode[] => {
  return str.split('\n').map(line => {
    const [ value, children ] = line.split(' <-> ');

    return {
      value: +value,
      children: children.split(', ').map(e => +e)
    }
  });
};

const toTree = (root: INode, arr: IRawNode[], inTree: number[] = []): INode => {
  if (inTree.includes(root.value)) return root;

  inTree.push(root.value);

  root.nodes = root.children.reduce((res, child) => {
    if (inTree.includes(child)) return res;
    const nextRoot = arr.find(e => e.value === child);
    return [ ...res, toTree(nextRoot as INode, arr, inTree)];
  }, [])

  root.inTree = inTree;

  return root;
}

let traverse = (node: INode): number => {
  if (!node.nodes.length) return 1;

  return 1 + node.nodes.reduce((res, n) => res + traverse(n), 0);
}

// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);

  const tree = toTree(prepared[0] as INode, prepared);
  return traverse(tree);
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  let count = 0;
  let copied = [...prepared];
  while (copied.length) {
    const tree = toTree(copied[0] as INode, prepared);
    copied = copied.filter(e => !tree.inTree.includes(e.value));
    count++;
  }

  return count;
}