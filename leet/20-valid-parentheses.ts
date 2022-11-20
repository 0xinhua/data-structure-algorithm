// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。 每个右括号都有一个对应的相同类型的左括号。

// 输入：s = "()"
// 输出：true

// 输入：s = "()[]{}"
// 输出：true

// 输入：s = "(]"
// 输出：false

// 思路：
// 使用堆栈来解决，如果是左边符合则放入栈中，与之对应的如果是右半边则取出栈中看是否匹配

function isValid(s: string): boolean {
  let stack = [], length = s.length;
  if (length % 2) return false;
  for (let str of s) {
    switch (str) {
      case '{':
      case '(':
      case '[':
        stack.push(str);
        break;
      case '}':
        if (stack.pop() !== '{') return false;
        break;
      case ']':
        if (stack.pop() !== '[') return false;
        break;
      case ')':
        if (stack.pop() !== '(') return false;
        break;
    }
  }
  return !stack.length
};

export default isValid;
