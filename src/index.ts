export interface Config {
  maxDepth: number;
  minChildren: number;
  maxChildren: number;
  rootNumber: number;
}

const defaultConfig: Config = {
  maxDepth: 3,
  minChildren: 1,
  maxChildren: 3,
  rootNumber: 3
};

export interface TreeNode {
  id: number;
  children?: TreeNode[];
}

export function generateRandomTreeData(
  config: Partial<Config> = {}
): TreeNode[] {
  const { maxDepth, minChildren, maxChildren, rootNumber } = {
    ...config,
    ...defaultConfig
  };
  let id = -1;
  function genTree(level: number): TreeNode {
    id += 1;
    if (level === maxDepth) {
      return {
        id
      };
    }
    const childrenNumber = Math.floor(
      Math.random() * (maxChildren - minChildren + 1) + minChildren
    );
    return {
      id,
      children: new Array(childrenNumber)
        .fill(null)
        .map(() => genTree(level + 1))
    };
  }
  return new Array(rootNumber).fill(null).map(() => genTree(1));
}
