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

  has(data) {
    const hasData = function (node, data) {
      if (!node) return false;
      if (node.data === data) return true;
      if (node.data > data) return hasData(node.left, data);
      if (node.data < data) return hasData(node.right, data);
    };
    return hasData(this.rootNode, data);
  }

  find(data) {
    const findData = function (node, data) {
      if (!node) return null;
      if (node.data === data) return node;
      if (node.data > data) {
        return findData(node.left, data);
      } else return findData(node.right, data);
    };
    return findData(this.rootNode, data);
  }

  remove(data) {
    const removeData = function (node, data) {
      if (!node) return false;
      if (node.data > data) {
        node.left = removeData(node.left, data);
        return node;
      } else if (node.data < data) {
        node.right = removeData(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) return false;
        if (!node.left) return node.right;
        if (!node.right) return node.left;
        let minRight = node.right;
        while (minRight.left) {
          minRight = minRight.left;
        }
        node.data = minRight.data;
        node.right = removeData(node.right, minRight.data);
        return node;
      }
    };
    this.rootNode = removeData(this.rootNode, data);
  }

  min() {
    if (!this.root) return false;
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.root) return false;
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
