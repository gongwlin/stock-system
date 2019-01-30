
let a = {
    name: 'zhangsan',
    age: 100,
    job: 'teacher'
}
// 解构赋值
const { name = 'lisi', age, job } = a;
// console.log(name,age,job);

// 正则表达式

a = 'abc';
console.log(/ab?c/.test(a));


// [] 用法

let b = {
    [name] : 'bbb'
    // name为zhangsan
};
// console.log(b)  // { zhangsan: 'bbb' }


// 数组 VS 类数组

function isArray(arr) {
    console.log('isArray:', typeof arr === 'object' && typeof arr.length === 'number' && arr.constructor === Array )
}

isArray({length: 1});


// toString()
a = 10000
console.log(a.toString(2))



// Map
a = {
    name: 'zhangsan',
    age: 100,
    job: 'student'
}
let map = new Map(
    Object.keys(a).map(key => [key, a[key]])
)
// console.log('new map:',map);


// Promise
// a = 0
// function create() {
//     return new Promise((resolve,reject)=>{
//         setTimeout(resolve('data'),1000);
//     })
// }

// 1个构造函数： new Promise
// 2个实例方法：.then 和.catch
// 4个静态方法：Promise.all、Promise.race、Promise.resolve和Promise.reject
// const p = create();
// const p1 = create()
// Promise.all([p, p1]).then(function (data) {
//     console.log(data);
// }, function(){
//     console.log('fail');
// })

// let wake = (time) => {
//     return new Promise((resolve, reject) => {
//         console.log('11111')
//         setTimeout(() => {
//             reject(`${time / 1000}秒后醒来`)
//         }, time)
//     })
// }

// let p1 = wake(3000)
// let p2 = wake(2000)
// // 成功的时候返回的是一个结果数组,而失败的时候则返回最先被reject失败状态的值。
// Promise.all([p1, p2]).then((result) => {
//     console.log(result)       // [ '3秒后醒来', '2秒后醒来' ]
// }).catch((error) => {
//     console.log(error)
// })


// 手动实现promise

function Promise(resolver) { }

Promise.prototype.then = function () { }
Promise.prototype.catch = function () { }

Promise.resolve = function () { }
Promise.reject = function () { }
Promise.all = function () { }
Promise.race = function () { }


function INTERNAL() { }
function isFunction(func) {
    return typeof func === 'function';
}
function isObject(obj) {
    return typeof obj === 'object';
}
function isArray(arr) {
    return Object.prototype.toString.call(arr) === '[object Array]';
}

var PENDING = 0;
var FULFILLED = 1;
var REJECTED = 2;

function Promise(resolver) {
    if (!isFunction(resolver)) {
        throw new TypeError('resolver must be a function');
    }
    this.state = PENDING;
    this.value = void 0;
    this.queue = [];
    if (resolver !== INTERNAL) {
        safelyResolveThen(this, resolver);
    }
}




