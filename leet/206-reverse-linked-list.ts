// https://leetcode.cn/problems/reverse-linked-list/

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  let curr = head;
  let pre = null;
  while (curr) {
    let temp = curr.next;
    curr.next = pre;
    pre = curr;
    curr = temp;
  }
};

export default reverseList;
