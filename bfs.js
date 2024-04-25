const input = document.getElementById("input");
const innerDiv = document.getElementById("bfs");

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function createArrayOfChars(value) {
  const array = [];
  for (let i = 0; i < value.length; i++) {
    array.push(value[i]);
  }
  return array;
}

function createTreeNode(value) {
  const nodeArray = value.map((item) => new Node(item));
  for (let i = 0; i < nodeArray.length; i++) {
    const leftIndex = 2 * i + 1;
    const rightIndex = 2 * i + 2;
    if (leftIndex < nodeArray.length) {
      nodeArray[i].left = nodeArray[leftIndex];
    }
    if (rightIndex < nodeArray.length) {
      nodeArray[i].right = nodeArray[rightIndex];
    }
  }

  return nodeArray[0];
}

function bfs(value) {
  const queue = [value];
  const out = [];

  while (queue.length) {
    let queueSize = queue.length;
    const levelValues = [];
    while (queueSize) {
      const node = queue.shift();
      if (node) {
        levelValues.push(node.value);
        node.left && queue.push(node.left);
        node.right && queue.push(node.right);
      }
      queueSize--;
    }
    out.push(levelValues);
  }
  return out;
}

function createHtml(value) {
  innerDiv.innerHTML = "";
  console.log(value);
  for (let i = 0; i < value.length; i++) {
    let innerHtml = "";
    for (let j = 0; j < value[i].length; j++) {
      innerHtml += `<span>${value[i][j]}</span>`;
    }
    innerDiv.innerHTML += `<div>${innerHtml}</div>`;
  }
}

function handleInput() {
  const inputValue = input.value;
  const arrayOfChars = createArrayOfChars(inputValue);
  const treeNode = createTreeNode(arrayOfChars);
  const bfsValue = bfs(treeNode);
  createHtml(bfsValue);
}
