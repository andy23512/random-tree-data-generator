"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const defaultConfig = {
    maxDepth: 3,
    minChildren: 1,
    maxChildren: 3,
    rootNumber: 3
};
function generateRandomTreeData(config = {}) {
    const { maxDepth, minChildren, maxChildren, rootNumber } = Object.assign(Object.assign({}, config), defaultConfig);
    let id = -1;
    function genTree(level) {
        id += 1;
        if (level === maxDepth) {
            return {
                id
            };
        }
        const childrenNumber = Math.floor(Math.random() * (maxChildren - minChildren + 1) + minChildren);
        return {
            id,
            children: new Array(childrenNumber)
                .fill(null)
                .map(() => genTree(level + 1))
        };
    }
    return new Array(rootNumber).fill(null).map(() => genTree(1));
}
exports.generateRandomTreeData = generateRandomTreeData;
