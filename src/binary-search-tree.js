const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }
  root() {
    return this.rootNode;
  }

  add(data) {
    const addData = function (node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (node.data > data) {
        node.left = addData(node.left, data);
      } else node.right = addData(node.right, data);
      return node;
    };
    this.rootNode = addData(this.rootNode, data);
  }

  has(data) {}

  find(data) {}

  remove(data) {}

  min() {}

  max() {}
}

module.exports = {
  BinarySearchTree,
};
