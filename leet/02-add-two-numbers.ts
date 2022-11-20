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

// 遍历获取data -> 数组 -> 反转并相加 -> 转换成  

// function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
//   class ListNode {
//        val: number
//        next: ListNode | null
//        constructor(val?: number, next?: ListNode | null) {
//            this.val = (val===undefined ? 0 : val)
//            this.next = (next===undefined ? null : next)
//        }
//    }
//   function getValue (listnode) {
//     let node = listnode;
//     let i = 0;
//     let arr = [];
//     while (listnode.next) {
//       arr[i] = listnode.val;
//       node = listnode.next;
//       i++;
//     }
//   }
//   function addTwoArr (arr1, arr2) {
//     if (arr1.length) {
//       arr1 = arr1.reverse()
//     }
//     if (arr2.length) {
//       arr2 = arr2.reverse()
//     }
//     return Number(arr1.join('')) + Number(arr2.join(''))
//   }
//   const arr1 = getValue(l1);
//   const arr2 = getValue(l2);
//   let result = addTwoArr(arr1, arr2);

//   let arr3 = (result + '').split('').reverse().map(i => Number(i));
//   let arr4 = arr3.map(i => new ListNode(Number(arr3[i])));
//   arr3.forEach(i => arr4[i].next = arr4[i + 1].next);
//   return arr4[0];
// };

var addTwoNumbers = function (l1, l2) {
  let addOne = 0 // 进位符
  let sum = new ListNode(0) // 创建一个头保存结果
  let head = sum
  while (addOne || l1 || l2) {
    let val1 = l1 !== null ? l1.val : 0
    let val2 = l2 !== null ? l2.val : 0
    let r1 = val1 + val2 + addOne
    addOne = r1 >= 10 ? 1 : 0  // 如果求和结果>=10，那么进位为1，否则为0
    sum.next = new ListNode(r1 % 10)
    sum = sum.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return head.next
};