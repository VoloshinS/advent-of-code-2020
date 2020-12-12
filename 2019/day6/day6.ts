interface INode {
  id: string;
  parentId?: string | null;
  rootId?: string;
  children?: INode[];
  isSearchedParent?: number;
}

const id1 = 'id1';
const id2 = 'id2';

const isRoot = (parentId: string) => parentId === 'COM';

const dataPreparator = (str: string): INode[] => {
  return str.split('\n').map((i, index): INode => {
    const [parentId, id] = i.split(')');
    return {
      ...(isRoot(parentId) && { rootId: parentId }),
      ...(!isRoot(parentId) && { parentId }),
      id,
    };
  });
};

const createTree = (arr: INode[]) => {
  const idMapping = arr.reduce((acc, { id }, i) => {
    acc[id] = i;
    return acc;
  }, {});

  let root: INode;
  arr.forEach(el => {
    if (!el.parentId) {
      root = el;
      return;
    }
    const parentEl = arr[idMapping[el.parentId]];
    parentEl.children = [...(parentEl.children || []), el];
  });

  return root;
}

const getOrbitsNumber = (node: INode, depth = 1) => {
  if (!node.children) return depth;

  return depth + node.children.reduce((res, child) =>
    res + getOrbitsNumber(child, depth + 1)
  , 0);
}
// Puzzle 1
export const func1 = (input: string) => {
  const prepared = dataPreparator(input);
  const tree = createTree(prepared);

  return getOrbitsNumber(tree);
}

const getPathBetweenNodes = (node: INode, nodeId1: string, nodeId2: string): string[] => {
  if (node.id === nodeId1) return [id1];
  if (node.id === nodeId2) return [id2];
  if (!node.children) return [];

  const childRes = node.children.reduce((res, child) =>
    res.concat(getPathBetweenNodes(child, nodeId1, nodeId2)), []);
  const isId1Parent = childRes.includes(id1);
  const isId2Parent = childRes.includes(id2);
  const isBothParent = isId1Parent && isId2Parent;
  const id1orId2Parent = isBothParent ? null : isId2Parent ? id2 : isId1Parent ? id1 : null;

  return id1orId2Parent ? childRes.concat(id1orId2Parent) : childRes;
}

// Puzzle 2
export const func2 = (input: string) => {
  const prepared = dataPreparator(input);
  const tree = createTree(prepared);
  const res = getPathBetweenNodes(tree, 'YOU', 'SAN');

  return res.length - 2;
}