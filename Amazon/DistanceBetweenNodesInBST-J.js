
//Strategy
//1. a: small b: larger
//2. if both are greater than the node, (root.right,a,b)
//3. if both are smaller than the node, (root.left,a,b)
//4. if in between, distanceFromRoot(root, a) + distanceFromRoot(root, b)
//5. DistanceFromRoot, if equal return 0, smaller than node recur(root.left, x) + 1, larger than node recur(root.right, x) + 1

class Node {
    constructor(value){
      this.left = null;
      this.right = null;
      this.value = value;
    }
  }
  
  class BinarySearchTree {
    constructor(){
      this.root = null;
    }
    insert(value){
      const newNode = new Node(value);
      if (this.root === null) {
        this.root = newNode;
      } else {
        let currentNode = this.root;
        while(true){
          if(value < currentNode.value){
            //Left
            if(!currentNode.left){
              currentNode.left = newNode;
              return this;
            }
            currentNode = currentNode.left;
          } else {
            //Right
            if(!currentNode.right){
              currentNode.right = newNode;
              return this;
            } 
            currentNode = currentNode.right;
          }
        }
      }
    }
    lookup(value){
      //Code here
    }
    // remove
  }
  
  const distanceBetween2 = (root, a, b) => {
    if(a > b) {
      let temp = a
      a = b
      b = temp
    }
  
    return distanceBetween2traverse(root, a, b)
  }
  
  const distanceBetween2traverse = (root, a, b) => {
    if(root = null) return 0
  
    if (root.value > a && root.value > b)
      return distanceBetween2traverse(root.right, a, b)
    
    if (root.value < a && root.value < b)
      return distanceBetween2traverse(root.left, a, b)
  
    if (root.value >= a && root.value <= b)
      return distanceFromRoot(root, a) + distanceFromRoot(root,b)
  }
  
  const distanceFromRoot = (root, x) => {
    if (root.value === x)
      return 0
    else if (root.value > x)
      return distanceFromRoot(root.left, x) + 1
    return distanceFromRoot(root.right, x) + 1
  }
  
  const tree = new BinarySearchTree();
  tree.insert(10)
  tree.insert(5)
  tree.insert(15)
  tree.insert(30)
  tree.insert(25)
  tree.insert(35)
  JSON.stringify(traverse(tree.root))
  distanceBetween2(tree.root, 5, 35)
  
  function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left === null ? null : traverse(node.left);
    tree.right = node.right === null ? null : traverse(node.right);
    return tree;
  }
  