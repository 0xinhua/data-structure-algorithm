// 实现一个发布订阅方法
// 类似 EventEmitter 中的 on 和 emit 方法


class MyEvenEmiter {

  fn = new Map();
  constructor() {
  }

  on(name: string, cb) {
    this.fn.set(name, cb)
  };

  emit(name: string, args): void {
    if (this.fn.has(name)) {
      this.fn.get(name)(args)
    }
  };

}

const em = new MyEvenEmiter();
em.on('ab', (a, b) => console.log('ab', a + b))
console.log(em.emit('ab', 3));