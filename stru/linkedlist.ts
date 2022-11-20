interface ILinkNode {
  data: any;
  next: null | ILinkNode;
};

interface ILinkedList {
  size(): number;
  append(data: any): void;
  unshift(data: any): void;
  traverse(): Array<any>;
  log(): void;
};

class LinkNode implements ILinkNode{
  data: any;
  next: null | LinkNode;
  constructor(val) {
    this.data = val;
    this.next = null;
  };
};

class LinkedList implements ILinkedList {

  head: null | LinkNode;
  length: number;
  constructor() {
    this.head = null;
    this.length = 0;
  }

  traverse() {
    const arr = [];
    if (!this.head) {
      return arr;
    } else {
      const addToArray = (node: ILinkNode) => {
        arr.push(node.data);
        return node.next ? addToArray(node.next) : arr;
      }
      const result =  addToArray(this.head);
      console.log('traverse result', result);
      return result;
    }
    // throw new Error("Method not implemented.");
  }

  size(): number {
    throw new Error("Method not implemented.");
  }

  unshift(data: any): void {
    throw new Error("Method not implemented.");
  }

  /**
   * console node data
   */
  log(): void {
    if (!this.head) {
      console.log('linked list is empty')
    } else {
      let item: null | LinkNode = this.head;
      while(item != null) {
        console.log('linked list node data:', item);
        item = item.next;
      }
    }
    // throw new Error("Method not implemented.");
  }

  /**
   * append a node to the tail
   * @param data 
   * @returns LinkNode
   */
  public append(data: any): LinkNode {
    let node = new LinkNode(data);
    if (!this.head) {
      this.head = node;
    } else {
      let current: LinkNode = this.head;
      while (current.next) {
        current = current.next
      }
      current.next = node;
    }
    this.length++;
    return node;
    // throw new Error("Method not implemented.");
  };
};

let linkedlist = new LinkedList();
linkedlist.append(0);
linkedlist.log();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.log();
linkedlist.traverse();
console.log(linkedlist);
