// 实现一个发布订阅方法
// 类似 EventEmitter 中的 on 和 emit 方法
var MyEvenEmiter = /** @class */ (function () {
    function MyEvenEmiter() {
        this.fn = new Map();
    }
    MyEvenEmiter.prototype.on = function (name, cb) {
        this.fn.set(name, cb);
    };
    ;
    MyEvenEmiter.prototype.emit = function (name, args) {
        if (this.fn.has(name)) {
            this.fn.get(name)(args);
        }
    };
    ;
    return MyEvenEmiter;
}());
var em = new MyEvenEmiter();
em.on('ab', function (a) { return console.log('ab' + a); });
console.log(em.emit('ab', 3));
