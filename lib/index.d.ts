export interface Config {
    maxDepth: number;
    minChildren: number;
    maxChildren: number;
    rootNumber: number;
}
export interface TreeNode {
    id: number;
    children?: TreeNode[];
}
export declare function generateRandomTreeData(config?: Partial<Config>): TreeNode[];
