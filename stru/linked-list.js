// linked list node implement js example

class LNode {
  constructor(val) {
    this.data = val;
    this.next = null;
  }
}

function linkedList () {

  this.head = null;
  this.length = 0;

  /**
   * append node 
   * @param {*} val 
   */
  this.append = (val) => {
    let node = new LNode(val);
    let currentNode;
    if (this.head === null) {
      this.head = node;
    } else {
      currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  /**
   * unshift node and return the length of linkedlist
   */

  this.unshift = (val) => {
    let node = new LNode(val);
    if (!this.head) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.length++;
  }

  /**
   * console node data
   */
  this.log = () => {
    let item = this.head;
    while(item != null) {
      console.log('node data', item)
      item = item.next
    }
  }

}

let l = new linkedList();
l.append(1);
l.append(2);
l.append(3);
l.unshift(0)
console.log('l', l);
l.log();
