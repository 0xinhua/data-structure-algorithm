// https://leetcode.cn/problems/min-stack/description/?languageTags=javascript

// 设计一个支持 push ，pop ，top 操作，并能在常数时间内检索到最小元素的栈。

// 实现 MinStack 类:

// MinStack() 初始化堆栈对象。
// void push(int val) 将元素val推入堆栈。
// void pop() 删除堆栈顶部的元素。
// int top() 获取堆栈顶部的元素。
// int getMin() 获取堆栈中的最小元素。

class MinStack {
  stack;
  minStack;
  constructor() {
    this.stack = [];
    this.minStack = [Infinity];
  }

  push(val: number): void {
    this.stack.push(val);
    this.minStack.push(Math.min(this.getMin(), val));
  }

  pop(): void {
    this.stack.pop();
    this.minStack.pop();
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minStack[this.minStack.length - 1];
  }
}

export default MinStack;
