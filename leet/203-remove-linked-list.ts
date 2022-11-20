// https://leetcode.cn/problems/remove-linked-list-elements/

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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  // if (head && head.val === val) {
  //   return head || head.next;
  // };
  // let pre = null;
  // let cur = head;
  // while (cur) {
  //   if (cur.val === val) {
  //     pre.next = cur.next;
  //   }
  //   cur = cur.next;
  //   pre = cur;
  // }
  // return head;
  if (head === null) {
    return head;
  }
  head.next = removeElements(head.next, val);
  return head.val === val ? head.next : head;
};

export default removeElements;
