
// 新建一个 Promise 类

const Pending = 'pending'
const Fulfilled = 'resolved'
const Rejected = 'rejected'

class MyPromise {

  constructor(executor) {
    executor(this.resolve, this.reject);
  }

  status = Pending;
  value = null;
  reason = null;
  onFulfilledCallback = [];
  onRejectedCallback = [];

  resolve = (value) => {
    if (this.status === Pending) {
      this.status = Fulfilled;
      this.value = value;
      // this.onFulfilledCallback && this.onFulfilledCallback(value);
      while (this.onFulfilledCallback.length) {
        this.onFulfilledCallback.shift()(value);
      }
    }
  };

  reject = (reason) => {
    if (this.status === Pending) {
      this.status = Rejected;
      this.reason = reason;
      // this.onRejectedCallback && this.onRejectedCallback(reason);
      while (this.onRejectedCallback.length) {
        this.onRejectedCallback.shift()(reason);
      }
    }
  };

  then(onFulfilled, onRejected) {

    const promise2 = new MyPromise((resolve, reject) => {
      if (this.status === Fulfilled) {
        const x = onFulfilled(this.value);
        resolve(x);
      }

      else if (this.status === Rejected) {
        const x = onRejected(this.reason);
        reject(x);
      }

      else if (this.status === Pending) {
        // this.onFulfilledCallback = onFulfilled;
        // this.onRejectedCallback = onRejected;
        this.onRejectedCallback.push(onRejected);
        this.onFulfilledCallback.push(onFulfilled);
      }
    });
    return promise2;
  }
}

let promise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('success');
  }, 2000)
  // resolve('success');
});

promise.then(value => {
  console.log('value', value);
}, reason => {
  console.log('reason', reason);
})

promise.then(value => {
  console.log('value 2', value);
}, reason => {
  console.log('reason 2', reason);
})

promise.then(value => {
  console.log('value 3', value);
}, reason => {
  console.log('reason 3', reason);
}).then(value => {
  console.log('value 3 then', value);
})