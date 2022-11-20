// https://leetcode.cn/problems/design-linked-list/

class LinkNode {
  val: number
  next: LinkNode | any
  constructor(val: number) {
    this.val = val
    this.next = null
  }
}

class MyLinkedList {
  header: any;
  size: number;
  constructor() {
    this.header = null;
    this.size = 0;
  }

  get(index: number): number {
    if (index >= this.size) {
      return -1;
    }
    let cur: LinkNode = this.header;
    while (index > 0) {
      cur = cur.next;
    }
    return cur.val;
  }

  addAtHead(val: number): void {
    const node = new LinkNode(val);
    node.next = this.header;
    this.header = LinkNode;
    this.size++;
  }

  addAtTail(val: number): void {
    const node = new LinkNode(val);
    if (!this.header) {
      this.header = node;
      return;
    }
    let cur = this.header;
    while (cur.next) {
      cur = cur.next;
    }
    if (cur) cur.next = node;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0) {
      this.addAtHead(val);
      return;
    }
    if (index > this.size) {
      return
    }
    if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    let cur = this.header;
    let pre = this.header;
    while (index > 0) {
      pre = cur;
      cur = cur.next;
      index--;
    }

    pre.next = new LinkNode(val);
    pre.next.next = cur;
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.header = this.header.next;
      return;
    }
    let cur = this.header;
    let pre = this.header;
    while (index > 0) {
      pre = cur;
      cur = cur.next;
      index--;
    }
    pre.next = cur.next;
  }
}

/**
* Your MyLinkedList object will be instantiated and called as such:
* var obj = new MyLinkedList()
* var param_1 = obj.get(index)
* obj.addAtHead(val)
* obj.addAtTail(val)
* obj.addAtIndex(index,val)
* obj.deleteAtIndex(index)
*/

var obj = new MyLinkedList();
console.log(obj.addAtHead(0));
console.log(obj.addAtTail(1));
console.log(obj.addAtTail(3));
console.log('obj linked list:', obj)
console.log(obj.addAtIndex(2, 2));
console.log(obj.get(1));
console.log(obj.deleteAtIndex(1));

export default MyLinkedList;