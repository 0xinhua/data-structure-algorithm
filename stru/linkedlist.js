;
;
var LinkNode = /** @class */ (function () {
    function LinkNode(val) {
        this.data = val;
        this.next = null;
    }
    ;
    return LinkNode;
}());
;
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.head = null;
        this.length = 0;
    }
    LinkedList.prototype.traverse = function () {
        var arr = [];
        if (!this.head) {
            return arr;
        }
        else {
            var addToArray_1 = function (node) {
                arr.push(node.data);
                return node.next ? addToArray_1(node.next) : arr;
            };
            var result = addToArray_1(this.head);
            console.log('traverse result', result);
            return result;
        }
        // throw new Error("Method not implemented.");
    };
    LinkedList.prototype.size = function () {
        throw new Error("Method not implemented.");
    };
    LinkedList.prototype.unshift = function (data) {
        throw new Error("Method not implemented.");
    };
    /**
     * console node data
     */
    LinkedList.prototype.log = function () {
        if (!this.head) {
            console.log('linked list is empty');
        }
        else {
            var item = this.head;
            while (item != null) {
                console.log('linked list node data:', item);
                item = item.next;
            }
        }
        // throw new Error("Method not implemented.");
    };
    /**
     * append a node to the tail
     * @param data
     * @returns LinkNode
     */
    LinkedList.prototype.append = function (data) {
        var node = new LinkNode(data);
        if (!this.head) {
            this.head = node;
        }
        else {
            var current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.length++;
        return node;
        // throw new Error("Method not implemented.");
    };
    ;
    return LinkedList;
}());
;
var linkedlist = new LinkedList();
linkedlist.append(0);
linkedlist.log();
linkedlist.append(1);
linkedlist.append(2);
linkedlist.log();
linkedlist.traverse();
console.log(linkedlist);
