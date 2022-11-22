// https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/description/?favorite=xb9nqhhg

// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）

// 时间复杂度空间复杂度无要求
// 思路：先输出值再反转数组

function reversePrint(head: ListNode | null): number[] {
  let res = [];
  let cur = head;
  while (cur) {
    res.unshift(cur.val);
    cur = cur.next;
  };
  return res;
};


function reversePrintFn(head: ListNode | null): number[] {
  let res = [];
  let cur = head;
  let pre = null;
  while (cur) {
    console.log('cur', cur?.val)
    res.unshift(cur?.val);
    const temp = cur.next;
    cur.next = pre;
    pre = cur;
    cur = temp;
  }
  return res;
}


// 思路：先反转链表再输出值