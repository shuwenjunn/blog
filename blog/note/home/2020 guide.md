# 前端知识体系

## 指南

> - 一位前端小姐姐的五万字面试宝典 <https://juejin.im/post/6844904121380667399>
> - 2 万字 | 前端基础拾遗 90 问 <https://juejin.im/post/6844904116552990727> （重点）需要总结
> - 写给女朋友的中级前端面试秘籍（含详细答案，15k 级别）<https://juejin.im/post/6844904115428917255>
> - 2020 年前端面试复习必读文章【超三百篇文章/赠复习导图】 <https://juejin.im/post/6844904116339261447>（一些知识点的解析文章集合）
> - 初、中级前端应该要掌握的手写代码实现 <https://juejin.im/post/6844904052237713422>
> - 由浅入深，66 条 JavaScript 面试知识点 <https://juejin.im/post/6844904200917221389> （js 基础，搭配红宝书看很好，也是很重要的内容，dom 事件，事件冒泡事件委托等解释）
> - 一名【合格】前端工程师的自检清单 <https://juejin.im/post/6844903830887366670> （重点可用于查漏补缺）
> - JS 万字总结 重量级干货！！！ <https://juejin.im/post/6844904136161361933>
> - 2018 前端面试总结，看完弄懂，工资少说加 3K | 掘金技术征文 <https://juejin.im/post/6844903673009553416>（知识点涵盖比较齐全）
> - 中高级前端大厂面试秘籍，为你保驾护航金三银四，直通大厂(上) <https://juejin.im/post/6844903776512393224> （重点，最后总结复习用）
> - 一个合格的中级前端工程师需要掌握的 28 个 JavaScript 技巧 <https://juejin.im/post/6844903856489365518>
> - 1.5 万字概括 ES6 全部特性(已更新 ES2020) <https://juejin.im/post/6844903959283367950>
> - 2019 前端基础面试秘籍 <https://juejin.im/post/6844903828278493197>
> - 一个合格(优秀)的前端都应该阅读这些文章 <https://juejin.im/post/6844903896637259784> （一些文章 可能对混淆的知识点有比较好的解释）
> - 20 道 JS 原理题助你面试一臂之力！ <https://juejin.im/post/6844903891591495693>
> - 22 道高频 JavaScript 手写面试题及答案 <https://juejin.im/post/6844903911686406158>
> - 这儿有 20 道大厂面试题等你查收 <https://juejin.im/post/6844903874705227789>
> - 中高级前端面试 JavaScript 手写代码无敌秘籍 <https://juejin.im/post/6844903809206976520#heading-1>

## js

> - 彻底搞懂闭包，柯里化，手写代码，金九银十不再丢分！ <https://juejin.im/post/6864378349512065038>
> - 前端 10 个灵魂拷问 吃透这些你就能摆脱初级前端工程师！<https://juejin.im/post/6857800782276902919#heading-5>
> - 送你 21 道高频 JavaScript 手写面试题 <https://juejin.im/post/6855129007852093453>
> - 前端笔试&面试爬坑系列---算法 <https://juejin.im/post/6844903656865677326>

### proxy

> 学习 Vue3.0,先来了解一下 Proxy <https://juejin.im/post/6861725116389130254>

`Proxy`是`ES6`新推出的一个特性，可以用它去拦截`js`操作的方法，从而对这些方法进行代理操作。`Proxy`\*就像一个拦截器一样，它可以在读取对象的属性，修改对象的属性，获取对象属性列表，通过`for in`循环等等操作的时候，去拦截对象上面的默认行为，然后自己去自定义这些行为

### 数组扁平化

```javascript
function flat(arr) {
  let result = [];
  for (const item of arr) {
    item instanceof Array
      ? (result = result.concat(flat(item)))
      : result.push(item);
  }
  return result;
}
const array = [1, 2, 3, [4, 5, [6, 7]]];
console.log(flat(array));

function flatByReduce(array) {
  return array.reduce((pre, curr) => {
    return pre.concat(curr instanceof Array ? flatByReduce(curr) : curr);
  }, []);
}
```

### 类型判断

`Object.prototype.toString.call()`

```javascript
var toString = Object.prototype.toString;

toString.call(new Date()); // [object Date]
toString.call(new String()); // [object String]
toString.call(Math); // [object Math]
toString.call([]); // [Object Array]
toString.call(new Number()); // [object Number]
toString.call(true); // [object Boolean]
toString.call(function () {}); // [object Function]
toString.call({}); // [object Object]
toString.call(new Promise(() => {})); // [object Promise]

toString.call(new Map()); // [object Map]
toString.call(new RegExp()); // [object RegExp]
toString.call(Symbol()); // [object Symbol]
toString.call(function* a() {}); // [object GeneratorFunction]
toString.call(new DOMException()); // [object DOMException]
toString.call(new Error()); // [object Error]

toString.call(undefined); // [object Undefined]
toString.call(null); // [object Null]

// 还有 WeakMap、 WeakSet、Proxy 等
```

### Array

#### slice

用法：`arrayObject.slice(start,end)`返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法 Array.splice()。
区别于`array.splice()`，splice 方法用来操作原数组。

### 堆/栈/队列

栈：先进后出，后进先出
堆：堆数据结构是一种树状结构。它的存取数据的方式，则与书架与书非常相似。引用数据类型的值是保存在堆内存中的对象

### 作用域作用域链

> - js 作用域链详解 <http://c.biancheng.net/view/5735.html>
> - JavaScript 深入之作用域链 <https://github.com/mqyqingfeng/Blog/issues/6>

**JavaScript 作用域属于静态概念，根据词法结构来确定，而不是根据执行来确定。作用域链是 JavaScript 提供的一套解决标识符的访问机制—— JavaScript 规定每一个作用域都有一个与之相关联的作用域链。**

**作用域链用来在函数执行时求出标识符的值。该链中包含多个对象，在对标识符进行求值的过程中，会从链首的对象开始，然后依次查找后面的对象，直到在某个对象中找到与标识符名称相同的属性。如果在作用域链的顶端（全局对象）中仍然没有找到同名的属性，则返回 undefined 的属性值。**

#### 手写实现 new

1. 创建一个新对象;
2. 将构造函数的作用域赋给新对象(因此 this 就指向了这个新对象);
3. 执行构造函数中的代码(为这个新对象添加属性);
4. 返回新对象。
5. 将构造函数的 prototype 关联到实例的**proto**

```javascript
function myNew(func) {
  return function () {
    var obj = {
      __proto__: func.prototype,
    };
    func.apply(obj, arguments);
    return obj;
  };
}

function Person(name) {
  this.name = name;
}

const person1 = myNew(Person)("shuwenjun");
```

### 继承

1. 继承父类的构造函数的属性方法
2. 继承父类的原型对象

```javascript
// 寄生组合方式的继承
function Parent(name) {
  this.name = name;
}

Parent.prototype.sayName = function () {
  console.log("sayName", this.name);
  return this.name;
};

function Child() {
  Parent.apply(this, arguments);
}

Child.prototype = Object.create(Parent.prototype);

const child1 = new Child("舒文俊");
const child2 = new Child("舒文俊1");

alert(child1.sayName());
alert(child2.sayName());
```

#### 原型链继承

> 用自己的方式（图）理解 constructor、prototype、**proto**和原型链 <https://juejin.im/post/6844903837623386126>

### this

> - 我还没搞懂 JS 中 this 指向及继承，直到有人向我这样解释它 <https://juejin.im/post/6844903862306865165>
> - 简单快速理解 js 中的 this、call 和 apply <https://juejin.im/post/6844903576532172813>
> - this（他喵的）到底是什么 — 理解 JavaScript 中的 this、call、apply 和 bind <https://juejin.im/post/6844903680446038023>
> - JavaScript 基础心法 <https://github.com/axuebin/articles/issues/6>
> - 前端基础进阶（七）：全方位解读 this <https://www.jianshu.com/p/d647aa6d1ae6>

#### 为什么会有 this

在深入了解 JavaScript 中的 this 关键字之前，有必要先退一步，看一下为什么 this 关键字很重要。this 允许复用函数时使用不同的上下文。换句话说，“this” 关键字允许在调用函数或方法时决定哪个对象应该是焦点。this 指向当执行函数的执行上下文。

**this 的指向，是在函数被调用的时候确定的。**

#### 函数调用的角度进行解释

```javascript
func(p1, p2);
obj.child.method(p1, p2);
func.call(context, p1, p2); // context 可以理解为将函数的指向上下文指向context
```

一般认为函数是以第一种或第二种方式进行调用的，实际上第一种和第二种调用方式是第三种调用方式的简便写法，也就是第三种调用方式的语法糖。上面的第一种第二种函数调用方式可以等价为如下：

```javascript
func.call(undefined, p1, p2);
obj.child.method(obj.child, p1, p2);
```

- 当`call`的第一参数为 undefined 时通常指向`window`。
- `context`通常为函数的前一个对象，比如`obj.child.method(obj.child, p1, p2);`的`context`为`obj.child`。

#### 函数是否独立调用

在一个函数上下文中，this 由调用者提供，由调用函数的方式来决定。如果调用者函数，被某一个对象所拥有，那么该函数在调用时，内部的 this 指向该对象。如果函数独立调用，在严格模式该函数内部的 this，则指向 undefined。但是在非严格模式中，当 this 指向 undefined 时，它会被自动指向全局对象。

> - 全方位解读 this <https://www.jianshu.com/p/d647aa6d1ae6>

#### this 指向判断步骤

1 查看函数在哪被调用。
2 点左侧有没有对象？如果有，它就是 “this” 的引用。如果没有，继续第 3 步。
3 该函数是不是用 “call”、“apply” 或者 “bind” 调用的？如果是，它会显式地指明 “this” 的引用。如果不是，继续第 4 步。
4 该函数是不是用 “new” 调用的？如果是，“this” 指向的就是 JavaScript 解释器新创建的对象。如果不是，继续第 5 步。
5 是否在“严格模式”下？如果是，“this” 就是 undefined，如果不是，继续第 6 步。
6 JavaScript 很奇怪，“this” 会指向 “window” 对象。

#### bind

> - 源码来袭：bind 手写实现 <https://www.cnblogs.com/ZheOneAndOnly/p/10423825.html>

bind 作为构造函数调用的时候，this 是指向构造函数的创建的那个对象。

```javascript
Function.prototype.myBind = function (thisArg, ...args) {
  const self = this;
  const fBond = function () {
    self.apply(this instanceof self ? this : thisArg, args.concat(arguments)); // 如果 this 出现在 Function 的原型链上，也就意味着这里是被当做为构造函数进行调用的。
  };
  fBond.prototype = new Object(self.prototype); // 复制原函数身上的属性和方法
  return fBond;
};
```

#### call

“call” 是每个函数都有的一个方法，它允许你在调用函数时为函数指定上下文。
因为 this 的指向为谁调用就指向谁，所以使用 call 改变函数的执行上下文，可以使得目标对象拥有该方法

```javascript
Function.prototype.myCall = function (context, ...args) {// args 为剩余参数的集合
  // ...args 剩余参数
  const fn = Symbol("fn");
  context = context || window; // 非严格模式下 指向window
  context[fn] = this;// this 指向的就是函数
  const result = context[fn](...args);
  delete context[fn];
  return result;
};
```

#### 箭头函数

所有的箭头函数都没有自己的 this，都指向外层。MDN 解释为**箭头函数会捕获其所在上下文的 this 值，作为自己的 this 值。**。
箭头函数在自己的作用域内没有自己的 this，如果要使用 this ，就会指向定义时所在的作用域的 this 值。

### let、const 变量提升 块级作用域

> - 参考第 40 题 <https://juejin.im/post/6844904200917221389#heading-49>
> - es5 模拟一个 const 参考第二题 <https://juejin.im/post/6844904116552990727#heading-1>

ES5 只有全局作用域和函数作用域，没有块级作用域，块级作用域可以简单理解为包在大括号{}里面的内容, 它可以自成一个作用域，使用 let 和 const 声明的变量, 只在当前大阔号内生效, 由此构建出了 **块级作用域** 这么个东西。

变量提升的概念：函数和变量的声明会被 js 的解释器放到最上面。就是先声明后赋值。变量提升就好比是，JS 引擎用一个很小的代码起重机将所有 var 声明和 function 函数声明都举起到函数内的最高处。

var 声明的变量是全局或者整个函数块的而 let、const 声明的变量是块级的变量。var 声明的变量存在变量提升，let、const 声明的变量不存在变量提升。let 声明的变量允许重新赋值，const 声明的变量不允许重新赋值。
var、let 和 const 另外一个重要区别就是 let 和 const 只在块级作用域中有效。

```javascript
for (var i = 0; i < 10; i++) {
  doSomething(i);
}
alert(i); //10
```

对于有块级作用域的语言来说，for 语句初始化变量的表达式所定义的变量，只会存在于循环的环境之中。而对于 JavaScript 来说，由 for 语句创建的变量 i 即使在 for 循环执行结束后，也依旧会存在于循环外部的执行环境中。

```javascript
var result = new Array();
for (var i = 0; i < 10; i++) {
  result[i] = function () {
    return i;
  };
}
console.log(result[0]()); //10 i 独立调用指向window，var声明的i为全局变量，循环完毕都为10，
```

模仿块级作用域:通过自执行函数将 var 声明的变量变成了函数内部的变量，也就成了局部变量，外部是无法访问局部变量的。

```js
(function () {
  for (var i = 0; i < 10; i++) {
    alert(i);
  }
})();
alert(i); // 这里无法访问到局部变量
```

#### 手写实现一个 const

```javascript
function myConst(identifier, value) {
  Object.defineProperty(window, identifier, {
    value,
    writable: false,
  });
}
```

### instanceof

> - "instanceof 的原理是什么"？大声告诉面试官，我知道！<https://juejin.im/post/6844903821483704327>
> - 前端面试之手写一个 bind 方法 <https://blog.csdn.net/q3254421/article/details/82999718>

**instanceof 运算符用于测试构造函数的 prototype 属性是否出现在对象原型链中的任何位置**
如果 A instanceof B，那么 A 必须是一个对象，而 B 必须是一个合法的 JavaScript 函数。在这两个条件都满足的情况下：判断 B 的 prototype 属性指向的原型对象(B.prototype)是否在对象 A 的原型链上。如果在，则为 true；如果不在，则为 false。

#### 实现一个 instanceof

根据上面的概念实现一个 instanceof

```javascript
function myInstanceof(left, right) {
  const RP = right.prototype; // 构造函数的原型
  while (true) {
    if (left === null) {
      return false;
    }
    if (left === RP) {
      // 一定要严格比较
      return true;
    }
    left = left.__proto__; // 沿着原型链重新赋值
  }
}
```

### CommonJS,AMD,CMD,ES6 模块化

> - CommonJS,AMD,CMD,ES6 <https://juejin.im/post/6844903576309858318>(较好的解释文章)
> - 前端模块化详解(完整版) <https://segmentfault.com/a/1190000017466120>（作为补充文章）

#### CommonJS

Node.js 是 commonJS 规范的主要实践者，用 module.exports 定义当前模块对外输出的接口，用 require 加载模块。
commonJS 用同步的方式加载模块。在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

#### AMD，使用 require.js 实现

AMD 规范采用异步方式加载模块，模块的加载不影响它后面语句的运行。所有依赖这个模块的语句，都定义在一个回调函数中，等到加载完成之后，这个回调函数才会运行。require.js 实现了 AMD

#### CMD，使用 sea.js 实现

require.js 在申明依赖的模块时会在第一之间加载并执行模块内的代码，CMD 是另一种 js 模块化方案，它与 AMD 很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD 推崇依赖就近、延迟执行。

```javascript
/** AMD写法 **/
define(["a", "b", "c", "d", "e", "f"], function (a, b, c, d, e, f) {
  // 等于在最前面声明并初始化了要用到的所有模块
  a.doSomething();
  if (false) {
    // 即便没用到某个模块 b，但 b 还是提前执行了
    b.doSomething();
  }
});

/** CMD写法 **/
define(function (require, exports, module) {
  var a = require("./a"); //在需要时申明
  a.doSomething();
  if (false) {
    var b = require("./b");
    b.doSomething();
  }
});

/** sea.js **/
// 定义模块 math.js
define(function (require, exports, module) {
  var $ = require("jquery.js");
  var add = function (a, b) {
    return a + b;
  };
  exports.add = add;
});
// 加载模块
seajs.use(["math.js"], function (math) {
  var sum = math.add(1 + 2);
});
```

#### ES6 Module

ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，旨在成为浏览器和服务器通用的模块解决方案。其模块功能主要由两个命令构成：export 和 import。export 命令用于规定模块的对外接口，import 命令用于输入其他模块提供的功能。
ES6 的模块不是对象，import 命令会被 JavaScript 引擎静态分析，在编译时就引入模块代码，而不是在代码运行时加载，所以无法实现条件加载。也正因为这个，使得静态分析成为可能。

#### ES6 模块与 CommonJS 模块的差异

- CommonJS 模块输出的是一个值的拷贝，ES6 模块输出的是值的引用。
- CommonJS 模块是运行时加载，ES6 模块是编译时输出接口。

CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成。而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成。

#### 总结

- CommonJS 规范主要用于服务端编程，加载模块是同步的，这并不适合在浏览器环境，因为\*同步意味着阻塞加载，浏览器资源是异步加载的，因此有了 AMD CMD 解决方案。
- AMD 规范在浏览器环境中异步加载模块，而且可以并行加载多个模块。\*不过，AMD 规范开发成本高，代码的阅读和书写比较困难，模块定义方式的语义不顺畅。
- CMD 规范与 AMD 规范很相似，都用于浏览器编程，依赖就近，延迟执行，可以很容易在 Node.js 中运行。不过，依赖 SPM 打包，模块的加载逻辑偏重
- ES6 在语言标准的层面上，实现了模块功能，而且实现得相当简单，完全可以取代 CommonJS 和 AMD 规范，成为浏览器和服务器通用的模块解决方案。
- CommonJS exports 对象是模块内外的唯一关联， commonjs 输出的内容，就是 exports 对象的属性，模块运行结束，属性就确定了。

### requestAnimationFrame

> - 前端战五渣学 JavaScript——防抖、节流和 rAF <https://juejin.im/post/6844903839322079240#heading-11>

### 执行上下文和执行栈

> - 理解 JavaScript 中的执行上下文和执行栈 <https://juejin.im/post/6844903682283143181>

需要清楚的几个概念：变量对象 VO，活动对象 AO，执行上下文栈，作用域[[scope]]。

### 执行机制

> - 这一次，彻底弄懂 JavaScript 执行机制 <https://segmentfault.com/a/1190000018227028>

### 原型和原型链

> - 用自己的方式（图）理解 constructor、prototype、**proto**和原型链 <https://juejin.im/post/6844903837623386126>
> - 1.2w 字深入理解 JavaScript26 个核心概念 <https://juejin.im/post/6865184344990810126#heading-27>

### 正则

### 防抖节流

#### 防抖

> - JS 的防抖与节流 <https://mp.weixin.qq.com/s/Vkshf-nEDwo2ODUJhxgzVA>

当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。**重点在于仅执行一次**

```javascript
function debounce(fn, wait) {
  var timeout = null;
  return function () {
    if (timeout !== null) clearTimeout(timeout);
    timeout = setTimeout(fn, wait);
  };
}
// 处理函数
function handle() {
  console.log(Math.random());
}
// 滚动事件
window.addEventListener("scroll", debounce(handle, 1000));
```

#### 节流

节流：当持续触发事件时，**保证一定时间段内只调用一次事件处理函数**。

```javascript
// 简单版
function throttle(func, gutter) {
  let pre = Date.now();
  return function () {
    const context = this;
    const now = Date.now();
    if (now - pre > gutter) {
      func.apply(context, arguments);
      pre = Date.now();
    }
  };
}

var throttle = function (func, delay) {
  var timer = null;
  var startTime = Date.now();
  return function () {
    var curTime = Date.now();
    var remaining = delay - (curTime - startTime);
    var context = this;
    var args = arguments;
    clearTimeout(timer);
    if (remaining <= 0) {
      //保证第一次执行
      func.apply(context, args);
      startTime = Date.now();
    } else {
      // 保证最后一次执行
      timer = setTimeout(() => {
        func();
      }, remaining);
    }
  };
};
```

### Array.from

Array.from() 方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。

### set,map

> - ES6 的 Set 和 Map 数据结构，由你制造 <https://juejin.im/post/6844903589920374792>

JavaScript 的默认对象表示方式{}可以视为其他语言中的 Map 或 Dictionary 的数据结构，即一组键值对。但是 JavaScript 的对象有个小问题，就是键必须是字符串。但实际上 Number 或者其他数据类型作为键也是非常合理的。为了解决这个问题，最新的 ES6 规范引入了新的数据类型 Map。Map 是一组键值对的结构，具有极快的查找速度。由于一个 key 只能对应一个 value，所以，多次对一个 key 放入 value，后面的值会把前面的值替换掉，通过调用 Object.is()方法来判断重复的键。Set 和 Map 类似，也是一组 key 的集合，但不存储 value。由于 key 不能重复，所以，在 Set 中，没有重复的 key。Set 和 Map 都是可迭代的所以都可以使用`for of` 进行遍历。Set 拥有 add(value),delete(value),has(value),clear(),keys(),values(),entries,forEach(),等方法，Set 还能够求两个集合的交集并集和差集。Map 拥有 set(key, val),get(key),delete(value),has(value),clear(),keys(),values(),entries,forEach(),等方法，关于如何实现 Map 和 Set，参考<https://juejin.im/post/6844903589920374792>。

```javascript
const s = new Set();
[2, 3, 5, 4, 5, 2, 2].forEach((x) => s.add(x));
for (let i of s) {
  console.log(i); // 2 3 5 4
}
// 去除数组的重复成员
let array = [1, 2, 1, 4, 5, 3];
[...new Set(array)]; // [1, 2, 4, 5, 3]

var m = new Map(); // 空Map
m.set("Adam", 67); // 添加新的key-value
m.set("Bob", 59);
m.has("Adam"); // 是否存在key 'Adam': true
m.get("Adam"); // 67
m.delete("Adam"); // 删除key 'Adam'
m.get("Adam"); // undefined
```

#### weakSet,weakMap

> - ES6 WeakSet 和 WeakMap <https://blog.csdn.net/weixin_42695446/article/details/84439113>
> - 通过 JavaScript 垃圾回收机制来理解 WeakSet/WeakMap 中对象的弱引用 <https://www.jianshu.com/p/c99dd69a8f2c>

**什么是弱引用？**
弱引用 虽然我(Set)引用了你(实例对象)但是在下一轮垃圾回收中你(实例对象)可以被回收，强引用只要你(实例对象)被引用了，就不会被垃圾回收。所以弱引用一定会被回收。
Set 在存放对象时，实际上是存放的是对象的引用，即 Set 也被称之为 Strong Set。如果所存储的对象被置为 null，但是 Set 实例仍然存在的话，对象依然无法被垃圾回收器回收，从而无法释放内存：

```javascript
let set = new Set();
let key = {};
let key2 = {};
set.add(key);
set.add(key2);
console.log(set.size); //2
key = null;
console.log(set.size); //2
```

可以看出就算对象 key 置为 null，但是由于是强引用的方式，Set 实例还存在，对象`{}`依然不会被回收。如果想让对象 key 正常释放的话，可以使用 Weak Set，此时，虽然 WeakSet 引用了对象，但由于是弱引用，所以并不会阻止对象实例被回收。

**WeakSet**
对于 Weak Set 和 Set 之间的重要差异：

1. 对于 Weak Set 实例，若调用了 add()方法时传入了非对象的参数，则会抛出错误。如果在 has()或者 delete()方法中传入了非对象的参数则会返回 false；
2. Weak Set 不可迭代，因此不能用于 for-of 循环；
3. Weak Set 无法暴露出任何迭代器（例如 keys() 与 values() 方法） ，因此没有任何编程手段可用于判断 Weak Set 的内容；
4. Weak Set 没有 forEach()方法；
5. Weak Set 没有 size 属性；

**WeakMap**
在 Weak Map（或者 Weak Set）中，所有的键都必须是对象（尝试使用非对象的键会抛出错误），而且这些对象都是弱引用，不会干扰到垃圾回收。当 Weak Map 中的键在 Weak Map 之外不存在引用时，该键值对会被移除。

因为 WeakSet 的成员和 WeakMap 引用的键名可能会随时消失，所以 WeakSet 和 WeakMap 没有遍历操作，也没有 size 属性，并且两者都没有 clear 方法。

### Symbol

> - 理解和使用 ES6 中的 Symbol <https://www.jianshu.com/p/f40a77bbd74e>
> - ES6 系列之模拟实现 Symbol 类型 <https://blog.csdn.net/weixin_34004750/article/details/88811449>

#### 概念

Symbol 是由 ES6 规范引入的一项新特性，它的功能类似于一种标识唯一性的 ID。通常情况下，我们可以通过调用 Symbol()函数来创建一个 Symbol 实例：

```javascript
let s1 = Symbol();
let s2 = Symbol("another symbol"); // 也可以在调用Symbol()函数时传入一个可选的字符串参数，相当于给你创建的Symbol实例一个描述信息

// 使用ts进行描述Symbol
/**
 * @param  {any} description 描述信息。可以是任何可以被转型成字符串的值，如：字符串、数字、对象、数组等
 */
function Symbol(description?: any): symbol

typeof s1  // 'symbol'

//每个Symbol实例都是唯一的。因此，当你比较两个Symbol实例的时候，将总会返回false
let s1 = Symbol()
let s2 = Symbol('another symbol')
let s3 = Symbol('another symbol')

s1 === s2 // false
s2 === s3 // false
```

#### 使用场景

- 使用 Symbol 来作为对象属性名(key)
  Symbol 类型的 key 是不能通过 Object.keys()或者 for...in 来枚举的，它未被包含在对象自身的属性名集合(property names)之中。所以，利用该特性，我们可以把一些不需要对外操作和访问的属性使用 Symbol 来定义。

  这种情况下如果想取出 Symbol 定义的属性的话可以使用以下 API

  ```javascript
  let obj = {
    [Symbol("name")]: "一斤代码",
    age: 18,
    title: "Engineer",
  };
  Object.keys(obj); // ['age', 'title']
  for (let p in obj) {
    console.log(p); // 分别会输出：'age' 和 'title'
  }
  Object.getOwnPropertyNames(obj); // ['age', 'title']
  // 使用Object的API
  Object.getOwnPropertySymbols(obj); // [Symbol(name)]
  // 使用新增的反射API
  Reflect.ownKeys(obj); // [Symbol(name), 'age', 'title']
  ```

- 剩余使用场景参考 <https://www.jianshu.com/p/f40a77bbd74e>

### Iterator

> - 这一次，彻底理解 ES6 Iterator <https://juejin.im/post/6844904000131694605>

Iterator 是一种接口，目的是为不同的数据结构提供统一的数据访问机制。也可以理解为 Iterator 接口主要为 for of 服务的，供 for...of 进行消费。当 for of 执行的时候，循环过程中引擎就会自动调用这个对象上的迭代器方法， 依次执行迭代器对象的 next 方法,将 next 返回值赋值给 for of 内的变量，从而得到具体的值。
ES6 里规定，只要在对象的属性上部署了 Iterator 接口，具体形式为给对象添加 Symbol.iterator 属性，此属性指向一个迭代器方法，这个迭代器会返回一个特殊的对象 - 迭代器对象。
而部署这个属性并且实现了迭代器方法后的对象叫做可迭代对象。

### Reflect

### 手写 promise

> - 只会用就 out 了，手写一个符合规范的 Promise <https://juejin.im/post/6844903667737296904>
> - 史上最最最详细的手写 Promise 教程 <https://juejin.im/post/6844903625769091079#heading-6>
> - 代码参考 <https://github.com/YuetTusi/promise/blob/master/promise.js>

### 深拷贝

浅拷贝和深拷贝都是对于 JS 中的引用类型而言的，浅拷贝就只是复制对象的引用，如果拷贝后的对象发生变化，原对象也会发生变化。只有深拷贝才是真正地对对象的拷贝

### JSON.stringfy

```javascript
const originArray = [1, 2, 3, 4, 5];
const cloneArray = JSON.parse(JSON.stringify(originArray));
```

优点简单快速，缺点`undefined、function、symbol 会在转换过程中被忽略`.

```javascript
const originObj = {
  name: "axuebin",
  sayHello: function () {
    console.log("Hello World");
  },
};
console.log(originObj); // {name: "axuebin", sayHello: ƒ}
const cloneObj = JSON.parse(JSON.stringify(originObj));
console.log(cloneObj); // {name: "axuebin"}s
```

#### Object.assign()

#### 递归实现

```javascript
var deepCopy = function (obj) {
  if (typeof obj !== "object") return;
  var newObj = obj instanceof Array ? [] : {};
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      newObj[key] =
        typeof obj[key] === "object" ? deepCopy(obj[key]) : obj[key];
    }
  }
  return newObj;
};
```

### 事件

> 一个 DOM 元素绑定多个事件时，先执行冒泡还是捕获 <https://blog.csdn.net/u013217071/article/details/77613706>

![img](https://gitee.com/shuwenjun/oss/raw/master/uPic/1719d595e0ad539a.png)

DOM2 级事件模型： 在该事件模型中，一次事件共有三个过程，第一个过程是事件捕获阶段。捕获指的是事件从 document 一直向下传播到目标元素，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。后面两个阶段和 IE 事件模型的两个阶段相同。这种事件模型，事件绑定的函数是 addEventListener（`addEventListener(eventName,callback,isCapturing)`），其中第三个参数可以指定事件是否在捕获阶段执行。

#### 事件捕获阶段

它认为当某个事件发生时，父元素应该更早接收到事件，具体元素则最后接收到事件

```html
<div class="father">
  <div class="son">son盒子</div>
</div>
```

```javascript
var son = document.querySelector(".son");
son.addEventListener(
  "click",
  function () {
    console.log("son");
  },
  true
);
var father = document.querySelector(".father");
father.addEventListener(
  "click",
  function () {
    console.log("father");
  },
  true
);
document.addEventListener(
  "click",
  function () {
    console.log("document");
  },
  true
);
```

点击 son，依次输出 document father son,(它认为当某个事件发生时，父元素应该更早接收到事件，具体元素则最后接收到事件)

#### 事件冒泡阶段

```javascript
var son = document.querySelector(".son");
son.addEventListener(
  "click",
  function () {
    console.log("son");
  },
  false
);
var father = document.querySelector(".father");
father.addEventListener(
  "click",
  function () {
    console.log("father");
  },
  false
);
document.addEventListener("click", function () {
  console.log("document");
});
```

点击 son 依次输出 son father document.
**什么是阻止事件冒泡**。以上例代码来看，用户点击 son 盒子只希望 son 元素的事件执行，但是由于事件冒泡的原因，他的祖先元素的绑定事件也会执行，所以输出的应该是 son father document，当使用 stopPropagation 时就相当于阻隔了事件继续向上执行。也就是 father，document 上面的事件不会再执行。

**为啥会有事件冒泡？**假如父元素绑定了一个事件，当我们在未来某个时间点给这个父元素添加了一个子元素，子元素的大小恰好和父元素的大小一样，那么用户点击的时候目标元素其实是这个子元素，但是子元素上没有绑定事件，如果没有事件冒泡的话那么无论用户怎么点击，页面都不会做出反馈，有了事件冒泡就不一样了，子元素没有事件就去父元素上面去找，找到了就执行。这样用户的操作就不会没有响应。这么来看的话 有点像作用域查找变量的味道了。但是不同的是作用域查找变量时找到了就结束，而事件冒泡会递归到根元素

#### 总结 DOM 事件流（一共有三个阶段）

- 事件捕获阶段
- 处于目标阶段
- 事件冒泡阶段

addEventListener 的第三个参数表示该事件是在哪个阶段触发（捕获阶段或者是冒泡阶段），如果为 true 表示在事件捕获阶段触发，如果为 false 表示在事件冒泡阶段触发
事件委托 本质上是利用了浏览器事件冒泡的机制。因为事件在冒泡过程中会上传到父节点，并且父节点可以通过事件对象获取到 目标节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方式称为事件代理。

### cookie&session

#### cookie

浏览器的安装目录下会专门有一个 cookie 文件夹来存放各个域下设置的 cookie。

HTTP 是一个无状态的协议，每次 http 请求都是独立、无关的，默认不需要保留状态信息。当我们需要保存一些信息时我们就需要用 cookie。
Cookie 本质上就是浏览器里面存储的一个很小的文本文件，内部以键值对的方式来存储(在 chrome 开发者面板的 Application 这一栏可以看到)。向同一个域名下发送请求，都会携带相同的 Cookie，服务器拿到 Cookie 进行解析，便能拿到客户端的状态。而服务端可以通过响应头中的 Set-Cookie 字段来对客户端写入 Cookie。

Cookie 的**有效期**可以通过 Expires 和 Max-Age 两个属性来设置。Expires 即过期的时间点，Max-Age 用的是一段时间间隔，设置过多久后 cookie 过期。
Cookie 绑定了域名和路径，只有路径和域名匹配上，那么当发送请求是才会带上 cookie.

**安全相关**

如果带上 Secure，说明只能通过 HTTPS 传输 cookie。如果 cookie 字段带上 HttpOnly，那么说明只能通过 HTTP 协议传输，不能通过 JS 访问，这也是预防 XSS 攻击的重要手段。相应的，对于 CSRF 攻击的预防，也有 SameSite 属性。SameSite 可以设置为三个值，Strict(浏览器完全禁止第三方请求携带 Cookie。比如请求 sanyuan.com 网站只能在 sanyuan.com 域名当中请求才能携带 Cookie，在其他网站请求都不能)、Lax（只能在 get 方法提交表单况或者 a 标签发送 get 请求的情况下可以携带 Cookie）和 None（也就是默认模式，请求会自动携带上 Cookie）。

当我们的网页遭受了 XSS 攻击，有一段恶意的 script 脚本插到了网页中。这段 script 脚本做的事情是：通过 document.cookie(可以设置 http-only🚫 通过 js 获取 cookie) 读取了用户身份验证相关的 cookie，并将这些 cookie 发送到了攻击者的服务器。攻击者轻而易举就拿到了用户身份验证信息，于是就可以摇摇大摆地冒充此用户访问你的服务器了（因为攻击者有合法的用户身份验证信息，所以会通过你服务器的验证）。

#### **缺点**

1. 容量缺陷。Cookie 的体积上限只有`4KB`，只能用来存储少量的信息。
2. 性能缺陷。Cookie 紧跟域名，不管域名下面的某一个地址需不需要这个 Cookie ，请求都会携带上完整的 Cookie，这样随着请求数的增多，其实会造成巨大的性能浪费的，因为请求携带了很多不必要的内容。但可以通过`Domain`和`Path`指定**作用域**来解决。
3. 安全缺陷。由于 Cookie 以纯文本的形式在浏览器和服务器中传递，很容易被非法用户截获，然后进行一系列的篡改，在 Cookie 的有效期内重新发送给服务器，这是相当危险的。另外，在`HttpOnly`为 false 的情况下，Cookie 信息能直接通过 JS 脚本来读取。

### DOM BOM

> - JavaScript 学习总结（三）BOM 和 DOM 详解 <https://segmentfault.com/a/1190000000654274#articleHeader21>

DOM 指的是文档对象模型，它指的是把文档当做一个对象来对待，这个对象主要定义了处理网页内容的方法和接口。

BOM 指的是浏览器对象模型，它指的是把浏览器当做一个对象来对待，这个对象主要定义了与浏览器进行交互的法和接口。BOM的核心是 window，而 window 对象具有双重角色，它既是通过 js 访问浏览器窗口的一个接口，又是一个 Global（全局）对象。这意味着在网页中定义的任何对象，变量和函数，都作为全局对象的一个属性或者方法存在。window 对象含有 location 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对象的子对象。

document 对象实际上是 window 对象的属性，document == window.document 为 true，是唯一一个既属于 BOM 又属于 DOM 的对象

## css

> - css 篇--100 道近两万字帮你巩固 css 知识点 <https://juejin.im/post/6844904185847087111>
> - 50道css基础面试题 https://segmentfault.com/a/1190000013325778
> - CSS 经典面试题（史上最全，持续更新中...） <https://juejin.im/post/6844903832552472583>
> - 响应式设计——理解设备像素、设备独立像素和 css 像素 <https://www.jianshu.com/p/6b1f94bfa263>

### 动画

> - CSS 怎样写一个动画（从基础动画到 3d 动画) <https://juejin.im/post/6844903795231555591>
> - 2019 年了，你还不会 CSS 动画？ <https://juejin.im/post/6844903845470945294>

动画也被称为关键帧动画。
简单动画实例：

```css
div {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #0ff;
  animation: move 2s linear 3 alternate both; // 调用动画
}
// 声明动画
@keyframes move {
  0% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(200px, 0);
  }
}
```

动画包 8 个属性具体含义如下：

| 属性                      | 描述                                                                |
| :------------------------ | :------------------------------------------------------------------ |
| animation-duration        | 指定动画完成一个周期所需要时间，单位秒（s）或毫秒（ms），默认是 0。 |
| animation-timing-function | 指定动画计时函数，即动画的速度曲线，默认是 "ease"。                 |
| animation-delay           | 指定动画延迟时间，即动画何时开始，默认是 0。                        |
| animation-iteration-count | 指定动画播放的次数，默认是 1。                                      |
| animation-direction       | 指定动画播放的方向。默认是 normal。                                 |
| animation-fill-mode       | 指定动画填充模式。默认是 none。both 也是他的一个值                  |
| animation-play-state      | 指定动画播放状态，正在运行或暂停。默认是 running。                  |
| animation-name            | 指定 @keyframes 动画的名称。                                        |

**animation-fill-mode**

- forwards，表示，动画完成后，元素状态保持为最后一帧的状态。
- backwards，表示，有动画延迟时，动画开始前，元素状态保持为第一帧的状态。
- both，设置动画结束时的状态，以结束时动画的状态优先。

### 移动端适配

> - 关于移动端适配，你必须要知道的 <https://juejin.im/post/6844903845617729549>
> - 面试官：你了解过移动端适配吗 <https://juejin.im/post/6844903631993454600>
> - 移动端适配方案 <https://github.com/riskers/blog/issues/17>
> - viewport、布局视口、视觉视口、理想视口 深入理解 <https://www.jianshu.com/p/7c5fdf90c0ef>

以下均以 iphone7 举例

**设备像素**：设备实际拥有的物理像素，他的像素为`750*1334`，`750*1334`也可以称为设备分辨率。
**逻辑像素**：逻辑像素也被称为`设备独立像素`,设备独立像素(dips)是操作系统定义的一种像素单位，应用程序将设备独立像素告诉操作系统，操作系统再将设备独立像素转化为设备像素，从而控制屏幕上真正的物理像素点。操作系统保证：用设备独立像素定义的尺寸，不管屏幕的参数如何，都能以合适的大小显示（这也是设备独立像素名字的由来）。理解以下就是，不管你的设备物理像素多大。以 375\*667 为例，设备逻辑像素就是将你的屏幕横向分为 375 等份，如果你的设备像素为 750，750 个物理像素/375 个逻辑像素,相当于一个逻辑像素包含两个物理像素，这样来看无论你的设备独立像素为多少，所显示的内容在屏幕中所占的比例都是一样的。
**css 像素**:在缩放比例为 100%的情况下，一个 css 像素大小等于一个逻辑像素。前端所用的就为 css 像素。
**dpr**:devicePixelRatio = 设备独立像素的数量 / CSS 像素的数量

举例说明：打开 chrome 调试工具可以看到 iphone7 的逻辑像素为 375\*667 像素，理解为 iphone7 横向被分为了 375 等份，缩放比例为 1 的情况下，设置 css 像素为 375px，375px 会在 iphone7 横向刚好铺满。但是 iphone7 的横向设备物理像素 750px，所以该设备的像素比为 2，1 个 css 像素需要两个物理像素来显示。

#### rem

将 html 节点的 font-size 设置为页面 clientWidth(布局视口)的 1/10，即 1rem 就等于页面布局视口的 1/10，这就意味着我们后面使用的 rem 都是按照页面比例来计算的。
以 iPhone7 为例：布局视口为 375px，则 1rem = 37.5px，iphone7 plus，1rem=41.4px,假设设置某个元素宽度为 2rem，无论在 iphone7 上还是在 iphone7plus 都是占据横向宽度的两等分，如何转换为实际设备物理像素转换呢。
iphon7: rem37.5dpr

#### viewport、布局视口、视觉视口、理想视口 深入理解

**layout viewport(布局视口)：**在 PC 端上，布局视口等于浏览器窗口的宽度。而在移动端上，由于要使为 PC 端浏览器设计的网站能够完全显示在移动端的小屏幕里，此时的布局视口会远大于移动设备的屏幕，就会出现滚动条。js 获取布局视口：`document.documentElement.clientWidth | document.body.clientWidth`；

**visual viewport(视觉视口)：**用户正在看到的网页的区域。用户可以通过缩放来查看网站的内容。如果用户缩小网站，我们看到的网站区域将变大，此时视觉视口也变大了，同理，用户放大网站，我们能看到的网站区域将缩小，此时视觉视口也变小了。不管用户如何缩放，都不会影响到布局视口的宽度。js 获取视觉视口：`window.innerWidth`；

**ideal viewport(理想视口)：\***布局视口的一个理想尺寸，只有当布局视口的尺寸等于设备屏幕的尺寸时，才是理想视口。js 获取理想视口：`window.screen.width`

#### 1px

> 移动端 1px 解决方案 <https://juejin.im/post/6844903877947424782>

### flex

> - 48 张小图带你领略 flex 布局之美 <https://juejin.im/post/6866914148387651592>
> - css 弹性盒子-------桃园三兄弟之：flex-grow、flex-shrink、flex-basis 详解 <https://blog.csdn.net/m0_37058714/article/details/80765562>
> - flex:1 和 flex:auto 详解 <https://www.cnblogs.com/wenqiangit/p/11664524.html>

**flex 详解`flex-grow`,`flex-shrink`,`flex-basis`**

- `flex-basis`:basis 英文意思是<主要成分>，所以他和 width 放在一起时,肯定把 width 干掉，basis 遇到 width 时就会说我才是最主要的成分，你是次要成分，所以见到我的时候你要靠边站。
- `flex-grow`: (默认值为 0)grow 英文意思是<扩大，扩展，增加>,这就代表当父元素的宽度大于子元素宽度之和时，并且父元素有剩余，这时，flex-grow 就会说我要成长，我要长大，怎么样才能成长呢，当然是分享父元素的剩余空间了。
- `flex-shrink`: shrink 英文意思是<收缩，>，这就代表当父元素的宽度小于子元素宽度之和时，并且超出了父元素的宽度，这时，flex-shrink 就会说外面的世界太苦了，我还是回到父亲的怀抱中去吧！因此，flex-shrink 就会按照一定的比例进行收缩。flex-shrink 的默认值为 1，当父元素的宽度小于所有子元素的宽度的和时，子元素的宽度会减小。值越大，减小的越厉害。如果值为 0，表示不减小。

flex:flex-grow，flex-shrink, flex-basis,flex 三个值得默认顺序。
flex:none 等价于 flex:0 0 auto;
flex:auto 等价于 1 1 auto;flex:1等价于flex:1 1 0%;
当 flex 取值为一个非负数字，则该数字为 flex-grow 值，flex-shrink 取 1，flex-basis 取 0%，如下是等同的。
flex-flow 是 flex-direction 和 flex-wrap 的属性和写。flex-flow:column wrap;等价于 flex-direction:column;flex-wrap:wrap;
align-content:这个属性是定义子容器在交叉轴的排列方式，也就是对齐方式。

```css
.item {
  flex: 1;
}
.item {
  flex-grow: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}
```

**其他 flex 属性**
align-items:baseline; 参考：<https://www.softwhy.com/article-10122-1.html>,就是以文字做为基线来进行对其的。
align-items:stretch; 参考：<https://www.softwhy.com/article-10122-1.html>,设置 flex 盒子里面的元素内部子元素的尺寸等于父元素的尺寸。

### BFC

> - BFC 是什么 <https://www.cnblogs.com/mlw1814011067/p/10397999.html>

**BFC 全称 Block Formatting Context 即块级格式上下文，简单的说，BFC 是页面上的一个隔离的独立容器，不受外界干扰或干扰外界**
BFC 功能
使 BFC 内部浮动元素不会到处乱跑；
和浮动元素产生边界。

### a 标签的四种状态

css定义超链接是要有先后顺序的。否则，在某些浏览器里面有可能会出现某个样式不起作用的bug。不能正确显示想要的效果。

CSS属性的排列顺序: L-V-H-A 。 为了便于记忆我们常用love hate来记忆，但是也要记住原理，别到时候只记住love hate ，却不知道代表着什么，那就适得其反了。

**L-V-H-A是link、visited、hover、active的简写。**

它们分别表示

A:link 超链接的默认样式
A:visited 访问过的（已经看过的）链接样式
A:hover 鼠标处于鼠标悬停状态的链接样式
A:active 当鼠标左键按下时，被激活（就是鼠标按下去那一瞬间）的链接样式。

正常顺序的代码如下:

```css
a:link{color:#333 ;text-decoration:none ; } 
a:visited { color:#333 ;text-decoration:none ;} 
a:hover { color:#FF6600 ;text-decoration:underline ;} 
a:active {text-decoration:none ; color:#FF6600 ;text-decoration:none ; }
```



### 选择器

> - 前端布局必须了解的 css 选择器 <https://juejin.im/post/6844904147414712334>

## 浏览器

> - 浏览器灵魂之问，请问你能接得住几个？ <https://juejin.im/post/6844904021308735502>
> - 深入解析你不知道的 EventLoop 和浏览器渲染、帧动画、空闲回调（动图演示） <https://juejin.im/post/6844904165462769678>
> - 你真的了解回流和重绘吗 <https://juejin.im/post/6844903779700047885>
> - 从 8 道面试题看浏览器渲染过程与性能优化 <https://juejin.im/post/6844904040346681358>
> - 输入 url 后发生了什么 <https://juejin.im/post/6844903687593148429>
> - 你不知道的浏览器页面渲染机制 <https://juejin.im/post/6844903815758479374#heading-16>
> - 浏览器的渲染原理简介 <https://coolshell.cn/articles/9666.html> (好文)
> - 用 CSS 开启硬件加速来提高网站性能 <https://blog.csdn.net/qq_41805715/article/details/89357352>
> - CSS 动画之硬件加速<https://www.w3cplus.com/css3/introduction-to-hardware-acceleration-css-animations.html>
> - 送你 18 道浏览器面试题 <https://juejin.im/post/6854573215830933512#heading-40> （还没看需要看一下）

### 垃圾回收机制

### 进程线程

> - 进程与线程的一个简单解释 <http://www.ruanyifeng.com/blog/2013/04/processes_and_threads.html>
> - 从浏览器多进程到 JS 单线程，JS 运行机制最全面的一次梳理 <https://segmentfault.com/a/1190000012925872#item-6>（优质）重点 包含了 进程线程 浏览器渲染 js 运行机制等解释
> - 这一次，彻底弄懂 JavaScript 执行机制 <https://segmentfault.com/a/1190000018227028>

进程是一个工厂，工厂有它的独立资源,工厂之间相互独立,线程是工厂中的工人，多个工人协作完成任务,工厂内有一个或多个工人,工人之间共享空间。
工厂的资源 -> 系统分配的内存（独立的一块内存）
工厂之间的相互独立 -> 进程之间相互独立
多个工人协作完成任务 -> 多个线程在进程中协作完成任务
工厂内有一个或多个工人 -> 一个进程由一个或多个线程组成
工人之间共享空间 -> 同一进程下的各个线程之间共享程序的内存空间（包括代码段、数据集、堆等）

- 进程是 cpu 资源分配的最小单位（是能拥有资源和独立运行的最小单位）
- 线程是 cpu 调度的最小单位（线程是建立在进程的基础上的一次程序运行单位，一个进程中可以有多个线程）

**浏览器是多进程的**可以简单理解为每开一个标签页，浏览器就新开了一个进程。

#### 浏览器都包含哪些进程？

1. Browser（控制） 进程：浏览器的主进程（负责协调、主控），只有一个。作用有
   - 负责浏览器界面显示，与用户交互。如前进，后退等
   - 负责各个页面的管理，创建和销毁其他进程
   - 将 Renderer 进程得到的内存中的 Bitmap，绘制到用户界面上
   - 网络资源的管理，下载等
2. 第三方插件进程：每种类型的插件对应一个进程，仅当使用该插件时才创建
3. GPU 进程：最多一个，用于 3D 绘制等
4. 浏览器渲染进程（浏览器内核）（Renderer 进程，内部是多线程的）：默认每个 Tab 页面一个进程，互不影响。主要作用为
   - 页面渲染，脚本执行，事件处理等

## 最重要的进程，浏览器内核（渲染进程）

页面的渲染，JS 的执行，事件的循环，都在这个进程（渲染进程）内进行

1. GUI 渲染线程（和 js 引擎线程互斥）
   - 负责渲染浏览器界面，解析 HTML，CSS，构建 DOM 树和 RenderObject 树，布局和绘制等。
   - 当界面需要重绘（Repaint）或由于某种操作引发回流(reflow)时，该线程就会执行
   - 注意，**GUI 渲染线程与 JS 引擎线程是互斥的**，\*当 JS 引擎执行时 GUI 线程会被挂起（相当于被冻结了），GUI 更新会被保存在一个队列中**等到 JS 引擎空闲时**立即被执行。
2. JS 引擎线程
   - 也称为 JS 内核，负责处理 Javascript 脚本程序。（例如 V8 引擎）
   - JS 引擎线程负责解析 Javascript 脚本，运行代码。
   - JS 引擎一直等待着任务队列中任务的到来，然后加以处理，一个 Tab 页（renderer 进程）中无论什么时候都只有一个 JS 线程在运行 JS 程序
   - 同样注意，**GUI 渲染线程与 JS 引擎线程是互斥的**，所以如果 JS 执行的时间过长，这样就会造成页面的渲染不连贯，导致页面渲染加载阻塞。
3. 事件触发线程（跟事件循环有关系，定时器触发线程里面的回调方法和异步 http 请求线程的方法都会被放倒该线程中等待 js 引擎线程的执行。）
   - 归属于浏览器而不是 JS 引擎，_用来控制事件循环_（可以理解，JS 引擎自己都忙不过来，需要浏览器另开线程协助）
   - 当 JS 引擎执行代码块如 setTimeOut 时（也可来自浏览器内核的其他线程,如鼠标点击、AJAX 异步请求等），会将对应任务添加到事件线程中
   - 当对应的事件符合触发条件被触发时，该线程会把事件添加到待处理队列的队尾，等待 JS 引擎的处理
   - 注意，由于 JS 的单线程关系，所以这些待处理队列中的事件都得排队等待 JS 引擎处理（当 JS 引擎空闲时才会去执行）
4. 定时触发器线程
   - 传说中的`setInterval`与`setTimeout`所在线程
   - 浏览器定时计数器并不是由 JavaScript 引擎计数的,（因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确）
   - 因此通过单独线程来计时并触发定时（计时完毕后，添加到事件队列中，等待 JS 引擎空闲后执行）
   - 注意，W3C 在 HTML 标准中规定，_规定要求 setTimeout 中低于 4ms 的时间间隔算为 4ms_。
5. 异步 http 请求线程
   - 在 XMLHttpRequest 在连接后是通过浏览器新开一个线程请求
   - \*将检测到状态变更时，如果设置有回调函数，异步线程就\***\*产生状态变更事件\*\***，将这个回调再放入事件队列中。再由 JavaScript 引擎执行。

## 浏览器的 Browser 进程（控制进程）是如何和内核（渲染进程）通信的

- Browser 进程收到用户请求，首先需要获取页面内容（譬如通过网络下载资源），随后将该任务通过 RendererHost 接口传递给 Render 进程
- Renderer 进程的 Renderer 接口收到消息，简单解释后，交给渲染线程，然后开始渲染
  - 渲染线程接收请求，加载网页并渲染网页，这其中可能需要 Browser 进程获取资源和需要 GPU 进程来帮助渲染
  - 当然可能会有 JS 线程操作 DOM（这样可能会造成回流并重绘）
  - 最后 Render 进程将结果传递给 Browser 进程
- Browser 进程接收到结果并将结果绘制出来

#### 浏览器内核（渲染进程）中的内核中线程之间的关系

由于 JavaScript 是可操纵 DOM 的，如果在修改这些元素属性同时渲染界面（即 JS 线程和 UI 线程同时运行），那么渲染线程前后获得的元素数据就可能不一致了。因此为了防止渲染出现不可预期的结果，浏览器设置**GUI 渲染线程与 JS 引擎为互斥**的关系，当 Js 引擎执行时 GUI 线程会被挂起，GUI 更新则会被保存在一个队列中等到 JS 引擎线程空闲时立即被执行。从上述的互斥关系，可以推导出，JS 如果执行时间过长就会阻塞页面。

#### WebWorker，JS 的多线程

```html
Web
Worker为Web内容在后台线程中运行脚本提供了一种简单的方法。线程可以执行任务而不干扰用户界面
一个worker是使用一个构造函数创建的一个对象(e.g. Worker())
运行一个命名的JavaScript文件 这个文件包含将在工作线程中运行的代码; workers
运行在另一个全局上下文中,不同于当前的window 因此，使用
window快捷方式获取当前全局的范围 (而不是self) 在一个 Worker 内将返回错误
```

这样理解下：

- 创建 Worker 时，JS 引擎向浏览器申请开一个子线程（子线程是浏览器开的，完全受主线程控制，而且不能操作 DOM）
- JS 引擎线程与 worker 线程间通过特定的方式通信（postMessage API，需要通过序列化对象来与线程交互特定的数据）

Worker 可以理解是浏览器给 JS 引擎开的外挂，专门用来解决那些大量计算问题。

### WebWorker 与 SharedWorker

既然都到了这里，就再提一下`SharedWorker`（避免后续将这两个概念搞混）

- WebWorker 只属于某个页面，不会和其他页面的 Render 进程（浏览渲染进程）共享
  - 所以 Chrome 在 Render 进程中（每一个 Tab 页就是一个 render 进程）创建一个新的线程来运行 Worker 中的 JavaScript 程序。这个线程可以认为是当前 tab 标签页的子线程。
- _SharedWorker 是浏览器所有页面共享的_，不能采用与 Worker 同样的方式实现，因为它不隶属于某个 Render 进程，可以为多个 Render 进程共享使用
  - 所以 Chrome 浏览器为 SharedWorker 单独创建一个进程来运行 JavaScript 程序，在浏览器中每个相同的 JavaScript 只存在一个 SharedWorker 进程，不管它被创建多少次。

看到这里，应该就很容易明白了，本质上就是进程和线程的区别。**_SharedWorker 由独立的进程管理，WebWorker 只是属于 render 进程下的一个线程_**

### 浏览器渲染流程

> - 你真的了解回流和重绘吗 <https://juejin.im/post/6844903779700047885#heading-0> （简单易懂）
> - 你不知道的浏览器页面渲染机制 <https://juejin.im/post/6844903815758479374#heading-16>
> - 复合图层 <http://www.mamicode.com/info-detail-2228870.html>

浏览器渲染进程拿到 css，html 等相关资源后，渲染步骤如下：

- HTML 字符串描述了一个页面的结构，浏览器会把 HTML 结构字符串解析转换 DOM 树形结构。
- 解析 CSS 会产生 CSS 规则树，它和 DOM 结构比较像。解析完成后，浏览器引擎会通过 DOM Tree 和 CSS Rule Tree 来构造 Rendering Tree。
- 根据生成的渲染树，进行回流(Layout)，得到节点的几何信息（位置，大小）(这一步也就是回流)
- 根据渲染树以及回流得到的几何信息，得到节点的绝对像素
- 将像素发送给 GPU，展示在页面上。（这一步其实还有很多内容，比如会在 GPU 将多个合成层合并为同一个层，并展示在页面中。而 css3 硬件加速的原理则是新建合成层，这里我们不展开，之后有机会会写一篇博客）

我们前面知道了，回流这一阶段主要是计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流。\*比如以下情况：

- 添加或删除可见的 DOM 元素
- 元素的位置发生变化
- 元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
- 内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。
- 页面一开始渲染的时候（这肯定避免不了）
- 浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）

**回流一定会触发重绘，而重绘不一定会回流**

浏览器渲染的图层一般包含两大类：`普通图层`以`复合图层`
普通图层可以理解为一个默认的图层，所有的元素都按照规则在该图层根据大小位置进行排列，当其中某一个元素的位置或大小发生改变会影响到其相邻的元素的位置，所以位置大小的改变会触发重绘。如果我们让需要改变的元素脱离默认的复合图层，那么对他的修改不会影响其他元素。
然后，可以通过硬件加速的方式，声明一个新的复合图层，它会单独分配资源（当然也会脱离普通文档流，这样一来，不管这个复合图层中怎么变化，也不会影响默认复合层里的回流重绘）,GPU 中，各个复合图层是单独绘制的，所以互不影响.

**硬件加速时请使用 index**

使用硬件加速时，尽可能的使用 index，防止浏览器默认给后续的元素创建复合层渲染,如果这个元素添加了硬件加速，并且 index 层级比较低，那么在这个元素的后面其它元素（层级比这个元素高的，或者相同的，并且 releative 或 absolute 属性相同的），会默认变为复合层渲染，如果处理不当会极大的影响性能.**如果 a 是一个复合图层，而且 b 在 a 上面，那么 b 也会被隐式转为一个复合图层**

### web workers

> - 你不知道的 Web Workers （上）[7.8K 字 | 多图预警] <https://juejin.im/post/6844904198639714311>

### Event Loop

> - 一次弄懂 Event Loop（彻底解决此类面试问题） <https://juejin.im/post/6844903764202094606>
> - 从 Event Loop 谈 JS 的运行机制 <https://segmentfault.com/a/1190000012925872#item-6>

![img](https://user-gold-cdn.xitu.io/2019/9/29/16d7ace2eda820a8?imageslim)

首先在**不考虑宏任务还是微任务**的情况下，同步任务会立即执行，当遇到异步任务的时候，会将异步任务放到 event table 里面，当异步任务完成后会将相应的异步回调放到任务队列里面，当主线程的任务执行完成后，会依次执行任务队列中的所有任务。

- 主线程自上而下执行所有代码
- 同步任务直接进入到主线程被执行，而异步任务则进入到 Event Table 并注册相对应的回调函数
- 异步任务完成后，Event Table 会将这个函数移入 Event Queue
- 主线程任务执行完了以后，会从 Event Queue 中读取任务，进入到主线程去执行。
- 循环如上

那么什么是宏任务什么是微任务呢。

- 常见的 macro-task 比如：setTimeout、setInterval、 setImmediate、script（整体代码）、 I/O 操作、UI 渲染等。
- 常见的 micro-task 比如: process.nextTick、new Promise().then(回调)、MutationObserver(html5 新特性) 等。Ï

宏任务是一个一个执行的，而微任务是一队一队执行的。示例代码参考 demo
![preview](https://picb.zhimg.com/v2-8c17e2b95e0374186c672d4d84b2dab3_r.jpg)

读这部分的前提是已经知道了 JS 引擎是单线程，而且这里会用到上文中的几个概念：（如果不是很理解，可以回头温习）

- JS 引擎线程
- 事件触发线程
- 定时触发器线程

然后再理解一个概念：

- JS 分为同步任务和异步任务
- 同步任务都在主线程上执行，形成一个`执行栈`
- 主线程之外，**事件触发线程**管理着一个`任务队列`，只要异步任务有了运行结果，就在`任务队列`之中放置一个事件。
- 一旦`执行栈`中的所有同步任务执行完毕（此时 JS 引擎空闲），系统就会读取`任务队列`，将可运行的异步任务添加到可执行栈中，开始执行。

看图：

![img](https://segmentfault.com/img/remote/1460000012925883)

看到这里，应该就可以理解了：为什么有时候 setTimeout 推入的事件不能准时执行？因为可能在它推入到事件列表时，主线程还不空闲，正在执行其它代码，
所以自然有误差。

#### 事件循环机制进一步补充

这里就直接引用一张图片来协助理解：（参考自 Philip Roberts 的演讲《[Help, I'm stuck in an event-loop](http://vimeo.com/96425312)》）

![img](https://segmentfault.com/img/remote/1460000012925884)

上图大致描述就是：

- 主线程运行时会产生执行栈，栈中的代码调用某些 api 时，它们会在事件队列中添加各种事件（当满足触发条件后，如 ajax 请求完毕）
- 而栈中的代码执行完毕，就会读取事件队列中的事件，去执行那些回调
- 如此循环
- 注意，总是要等待栈中的代码执行完毕后才会去读取事件队列中的事件

#### 单独说说定时器

上述事件循环机制的核心是：JS 引擎线程和事件触发线程
但事件上，里面还有一些隐藏细节，譬如调用`setTimeout`后，是如何等待特定时间后才添加到事件队列中的？
是 JS 引擎检测的么？当然不是了。它是由**定时器线程**控制（因为 JS 引擎自己都忙不过来，根本无暇分身）
为什么要单独的定时器线程？因为 JavaScript 引擎是单线程的, 如果处于阻塞线程状态就会影响记计时的准确，因此很有必要单独开一个线程用来计时。
什么时候会用到定时器线程？**当使用`setTimeout`或`setInterval`时**，它需要定时器线程计时，计时完成后就会将特定的事件推入事件队列中。
譬如:

```javascript
setTimeout(function () {
  console.log("hello!");
}, 1000);
```

这段代码的作用是当`1000`毫秒计时完毕后（由定时器线程计时），将回调函数推入事件队列中，等待主线程执行

```javascript
setTimeout(function () {
  console.log("hello!");
}, 0);
console.log("begin");
```

这段代码的效果是最快的时间内将回调函数推入事件队列中，等待主线程执行

注意：

- 执行结果是：先`begin`后`hello!`
- 虽然代码的本意是 0 毫秒后就推入事件队列，但是 W3C 在 HTML 标准中规定，规定要求 setTimeout 中低于 4ms 的时间间隔算为 4ms。
- 就算不等待 4ms，就算假设 0 毫秒就推入事件队列，也会先执行`begin`（因为只有可执行栈内空了后才会主动读取事件队列）

#### setTimeout 而不是 setInterval

用 setTimeout 模拟定期计时和直接用 setInterval 是有区别的。

因为每次 setTimeout 计时到后就会去执行，然后执行一段时间后才会继续 setTimeout，中间就多了误差
（误差多少与代码执行时间有关）

而 setInterval 则是每次都精确的隔一段时间推入一个事件
（但是，事件的实际执行时间不一定就准确，还有可能是这个事件还没执行完毕，下一个事件就来了）

而且 setInterval 有一些比较致命的问题就是：

- 累计效应（上面提到的），如果 setInterval 代码在（setInterval）再次添加到队列之前还没有完成执行，

就会导致定时器代码连续运行好几次，而之间没有间隔。
就算正常间隔执行，多个 setInterval 的代码执行时间可能会比预期小（因为代码执行需要一定时间）

- ~~譬如像 iOS 的 webview,或者 Safari 等浏览器中都有一个特点，**在滚动的时候是不执行 JS 的**，如果使用了 setInterval，会发现在滚动结束后会执行多次由于滚动不执行 JS 积攒回调，如果回调执行时间过长,就会非常容器造成卡顿问题和一些不可知的错误~~（这一块后续有补充，setInterval 自带的优化，不会重复添加回调）
- 而且把浏览器最小化显示等操作时，setInterval 并不是不执行程序，

它会把 setInterval 的回调函数放在队列中，等浏览器窗口再次打开时，一瞬间全部执行时

所以，鉴于这么多但问题，目前一般认为的最佳方案是：**用 setTimeout 模拟 setInterval，或者特殊场合直接用 requestAnimationFrame**

**补充：JS 高程中有提到，JS 引擎会对 setInterval 进行优化，如果当前事件队列中有 setInterval 的回调，不会重复添加。不过，仍然是有很多问题。。。**

#### 事件循环进阶：macrotask 与 microtask

上文中将 JS 事件循环机制梳理了一遍，在 ES5 的情况是够用了，但是在 ES6 盛行的现在，仍然会遇到一些问题，譬如下面这题：

```javascript
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });
console.log("script end");
```

嗯哼，它的正确执行顺序是这样子的：

```javascript
script start
script end
promise1
promise2
setTimeout
```

为什么呢？_因为 Promise 里有了一个一个新的概念：_`*microtask*`

或者，进一步，JS 中分为两种任务类型：**`macrotask`和`microtask`**，_在 ECMAScript 中，microtask 称为_`*jobs*`_，macrotask 可称为_`*task*`

它们的定义？区别？简单点可以按如下理解：

- macrotask（又称之为宏任务），可以理解是每次执行栈执行的代码就是一个宏任务（包括每次从事件队列中获取一个事件回调并放到执行栈中执行）
  - 每一个 task 会从头到尾将这个任务执行完毕，不会执行其它
  - 浏览器为了能够使得 JS 内部 task 与 DOM 任务能够有序的执行，会在一个 task 执行结束后，在下一个 task 执行开始前，对页面进行重新渲染

```javascript
（`task->渲染->task->...`）
```

- microtask（又称为微任务），可以理解是在当前 task 执行结束后立即执行的任务
  - 也就是说，在当前 task 任务后，下一个 task 之前，在渲染之前
  - 所以它的响应速度相比 setTimeout（setTimeout 是 task）会更快，因为无需等渲染
  - 也就是说，在某一个 macrotask 执行完后，就会将在它执行期间产生的所有 microtask 都执行完毕（在渲染前）

分别很么样的场景会形成 macrotask 和 microtask 呢？

- macrotask：主代码块，setTimeout，setInterval 等（可以看到，事件队列中的每一个事件都是一个 macrotask）
- microtask：Promise，process.nextTick 等

再根据线程来理解下：

- \*macrotask 中的事件都是放在一个事件队列中的，而这个队列由\***\*事件触发线程\*\***维护\*
- \*microtask 中的所有微任务都是添加到微任务队列（Job Queues）中，等待当前 macrotask 执行完毕后执行，而这个队列由\***\*JS 引擎线程维护\***

所以，总结下运行机制：

- 执行一个宏任务（栈中没有就从事件队列中获取）
- 执行过程中如果遇到微任务，就将它添加到微任务的任务队列中
- 宏任务执行完毕后，立即执行当前微任务队列中的所有微任务（依次执行）
- 当前宏任务执行完毕，开始检查渲染，然后 GUI 线程接管渲染
- 渲染完毕后，JS 线程继续接管，开始下一个宏任务（从事件队列中获取）

如图：
![img](https://segmentfault.com/img/remote/1460000012925885)

### 从输入 URL 到页面加载的过程？如何由一道题完善自己的前端知识体系

> 全解析 <http://www.dailichun.com/2018/03/12/whenyouenteraurl.html>

## 网络

> - 这应该是把计算机网络五层模型讲的最好是文章了，看不懂你打我 <https://juejin.im/post/6844904029823172622> (\*)
> - 查缺补漏 巩固你的 HTTP 知识体系 <https://juejin.im/post/6857287743966281736>
> - 图解 HTTP 缓存 <https://juejin.im/post/6844904153043435533>
> - 前端需要了解的计算机网络知识， 这一篇就够了！ <https://juejin.im/post/6844904079974465544>
> - （建议精读）HTTP 灵魂之问，巩固你的 HTTP 知识体系 <https://juejin.im/post/6844904100035821575>
> - 寒冬求职之你必须要懂的 Web 安全 <https://juejin.im/post/6844903842635579405>(跨域相关)
> - 前端基础篇之 HTTP 协议 <https://juejin.im/post/6844903844216832007>
> - 关于三次握手与四次挥手面试官想考我们什么？--- 不看后悔系列 <https://juejin.im/post/6844903834708344840>
> - 互联网协议入门 <http://www.ruanyifeng.com/blog/2012/05/internet_protocol_suite_part_i.html>
> - 对称加密，非对称加密 <https://www.cnblogs.com/hai-blog/p/8311671.html>
> - 面试官，不要再问我三次握手和四次挥手 <https://zhuanlan.zhihu.com/p/86426969>
> - TCP/IP 和 HTTP 的区别和联系是什么？ <https://www.zhihu.com/question/38648948>
> - HTTP 和 TCP 之间的关系 <https://blog.csdn.net/weixin_40784198/article/details/81434530>
> - HTTP 与 TCP 的区别和联系 <https://www.cnblogs.com/baizhanshi/p/8482612.html>
> - HTTP 的前世今生 <https://coolshell.cn/articles/19840.html>
> - 各层对应的协议 <https://blog.csdn.net/yuqilin520/article/details/82915269>
> - 看完这篇 HTTP，跟面试官扯皮就没问题了 <https://juejin.im/post/6844904045572800525#heading-16> 关于 http 报文的解释

**列出来哪些是需要记忆的。复述**
TCP 出现在网络模型的那个地方
什么是 TCP 链接，它出现在 TCP 链接的哪个地方
keepAlive 是如何重用 tcp 链接的

### 网络通信五层模型

![img](https://gitee.com/shuwenjun/oss/raw/master/uPic/bg2012052902.png)
![img](https://gitee.com/shuwenjun/oss/raw/master/uPic/KKWtfH.jpg)

#### 物理层（实体层）

这就叫做"实体层"，它就是把电脑连接起来的物理手段。它主要规定了网络的一些电气特性，作用是负责传送 0 和 1 的电信号。

#### 数据链路层（在传输前约定好相应的传输规则）

单纯的 0 和 1 没有任何意义，必须规定解读方式：多少个电信号算一组？每个信号位有何意义？这就是"链接层"的功能，它在"实体层"的上方，确定了 0 和 1 的分组方式。**有了数据包的定义、网卡的 MAC 地址、广播的发送方式，"链接层"就可以在多台计算机之间传送数据了。**

1. 以太网协议（Ethernet）
   早期的时候，每家公司都有自己的电信号分组方式。逐渐地，一种叫做"以太网"（Ethernet）的协议，占据了主导地位。以太网规定，一组电信号构成一个数据包，叫做"帧"（Frame）。每一帧分成两个部分：标头（Head）和数据（Data）。
2. MAC 地址
   以太网数据包的"标头"，包含了发送者和接受者的信息。那么，发送者和接受者是如何标识呢？以太网规定，连入网络的所有设备，都必须具有"网卡"接口。数据包必须是从一块网卡，传送到另一块网卡。网卡的地址，就是数据包的发送地址和接收地址，这叫做 MAC 地址。
3. 广播
   就算有了 MAC 地址，系统怎样才能把数据包准确送到接收方？回答是以太网采用了一种很"原始"的方式，它不是把数据包准确送到接收方，而是向本网络内所有计算机发送，让每台计算机自己判断，是否为接收方。一块网卡通过 ARP 协议知道另一块网卡的 MAC 地址。（ARP 相当于一个班的班主任，管理该子网的所有主机）

#### 网络层（ip 协议）

以太网采用广播方式发送数据包，所有成员人手一"包"，不仅效率低，而且局限在发送者所在的子网络。也就是说，如果两台计算机不在同一个子网络，广播是传不过去的。互联网是无数子网络共同组成的一个巨型网络。
如果是同一个子网络，就采用广播方式发送，不处于同一个子网就采用"路由"方式发送。
于是，"网络层"出现以后，每台计算机有了两种地址，一种是 MAC 地址，另一种是网络地址。两种地址之间没有任何联系，MAC 地址是绑定在网卡上的，网络地址则是管理员分配的，它们只是随机组合在一起。
网络地址帮助我们确定计算机所在的子网络，MAC 地址则将数据包送到该子网络中的目标网卡。因此，从逻辑上可以推断，必定是先处理网络地址，然后再处理 MAC 地址。

1. IP 协议
   规定网络地址的协议，叫做 IP 协议。它所定义的地址，就被称为 IP 地址。网络地址（IP）由 32 个二进制位组成,`0000 0000 0000 0000`到`1111 1111 1111 1111`用十进制表示为，0.0.0.0 一直到 255.255.255.255。
2. 子网掩码
   子网掩码用来判断互联网的两台主机是否处于同一子网。子网掩码和 IP 地址一样也是 32 位二进制数，不过它的网络部分规定全部为 1，主机部分规定全部为 0.
   例如：
   假如两台计算机的网络部分是一模一样的，我们就说这两台计算机是处于同一个子网中。例如 192.168.43.1 和 192.168.43.2, 假如这两个 IP 地址的网络部分为 24 位，主机部分为 8 位。那么他们的网络部分都为 192.168.43，所以他们处于同一个子网中。
   可是问题来了，你怎么知道网络部分是占几位，主机部分又是占几位呢？也就是说，单单从两台计算机的 IP 地址，我们是无法判断他们的是否处于同一个子网中的。
   这就引申出了另一个关键词————子网掩码。子网掩码和 IP 地址一样也是 32 位二进制数，不过它的网络部分规定全部为 1，主机部分规定全部为 0.也就是说，假如上面那两个 IP 地址的网络部分为 24 位，主机部分为 8 位的话，那他们的子网掩码都为 11111111.11111111.11111111.00000000，即 255.255.255.0。知道了子网掩码，相当于我们知道了网络部分是几位，主机部分是几位。我们只需要把 IP 地址与它的子网掩码做与(and)运算，然后把各自的结果进行比较就行了，如果比较的结果相同，则代表是同一个子网，否则不是同一个子网。192.168.43.1 和 192.168.43.2 的子码掩码都为 255.255.255.0，把 IP 与子码掩码相与，可以得到他们都为 192.168.43.0，进而他们处于同一个子网中。
3. IP （主要解决的是通信双方寻址）
   根据 IP 协议发送的数据，就叫做 IP 数据包。不难想象，其中必定包括 IP 地址信息。我们可以把 IP 数据包直接放进以太网数据包的"数据"部分，因此完全不用修改以太网的规格。这就是互联网分层结构的好处：上层的变动完全不涉及下层的结构。"标头"部分主要包括版本、长度、IP 地址等信息，"数据"部分则是 IP 数据包的具体内容。
   IP 数据包的"标头"部分的长度为 20 到 60 字节，整个数据包的总长度最大为 65,535 字节。因此，理论上，一个 IP 数据包的"数据"部分，最长为 65,515 字节。前面说过，以太网数据包的"数据"部分，最长只有 1500 字节。因此，如果 IP 数据包超过了 1500 字节，它就需要分割成几个以太网数据包，分开发送了。
4. ARP 协议
   因为 IP 数据包是放在以太网数据包里发送的，所以我们必须同时知道两个地址，一个是对方的 MAC 地址，另一个是对方的 IP 地址。通常情况下，对方的 IP 地址是已知的（后文会解释），但是我们不知道它的 MAC 地址。
   所以，我们需要一种机制，能够从 IP 地址得到 MAC 地址。
   这里又可以分成两种情况。第一种情况，如果两台主机不在同一个子网络，那么事实上没有办法得到对方的 MAC 地址，只能把数据包传送到两个子网络连接处的"网关"（gateway），让网关去处理。
   第二种情况，如果两台主机在同一个子网络，那么我们可以用 ARP 协议，得到对方的 MAC 地址。ARP 协议也是发出一个数据包（包含在以太网数据包中），其中包含它所要查询主机的 IP 地址，在对方的 MAC 地址这一栏，填的是 FF:FF:FF:FF:FF:FF，表示这是一个"广播"地址。它所在子网络的每一台主机，都会收到这个数据包，从中取出 IP 地址，与自身的 IP 地址进行比较。如果两者相同，都做出回复，向对方报告自己的 MAC 地址，否则就丢弃这个包。（大白话解释，一个班新来了个学生叫张三，班主任不知道是谁，就在班里问张三是谁，新来的一听我就是张三，于是就做出回答，其他学生不是张三也就不回答。）
   总之，有了 ARP 协议之后，我们就可以得到同一个子网络内的主机 MAC 地址，可以把数据包发送到任意一台主机之上了。

#### 传输层（UDP 和 TCP 三次握手，四次挥手）

"传输层"的功能，就是建立"端口到端口"的通信。相比之下，"网络层"的功能是建立"主机到主机"的通信。只要确定主机和端口，我们就能实现程序之间的交流。

1. udp 协议
   现在，我们必须在数据包中加入端口信息，这就需要新的协议。最简单的实现叫做 UDP 协议，它的格式几乎就是在数据前面，加上端口号。UDP 数据包，也是由"标头"和"数据"两部分组成。"标头"部分主要定义了发出端口和接收端口，"数据"部分就是具体的内容。然后，把整个 UDP 数据包放入 IP 数据包的"数据"部分。

2. TCP 协议（传输控制协议）
   UDP 协议的优点是比较简单，容易实现，但是缺点是可靠性较差，一旦数据包发出，无法知道对方是否收到。为了解决这个问题，提高网络可靠性，TCP 协议就诞生了。这个协议非常复杂，但可以近似认为，它就是有确认机制的 UDP 协议，每发出一个数据包都要求确认。如果有一个数据包遗失，就收不到确认，发出方就知道有必要重发这个数据包了。因此，TCP 协议能够确保数据不会遗失。它的缺点是过程复杂、实现困难、消耗较多的资源。TCP 数据包和 UDP 数据包一样，都是内嵌在 IP 数据包的"数据"部分。TCP 数据包没有长度限制，理论上可以无限长，但是为了保证网络的效率，通常 TCP 数据包的长度不会超过 IP 数据包的长度，以确保单个 TCP 数据包不必再分割。

#### 应用层（http 协议，DNS 协议）

应用层的作用，就是规定应用程序的数据格式。

### DNS 查询(DNS 域名系统，是应用层协议，运行 UDP 协议之上，使用端口 43。)

> - DNS 是干什么的？修改 hosts 的原理又是什么？https://www.bilibili.com/video/BV1Yx411p7KD/?spm_id_from=333.788.videocard.12
> -

![img](https://gitee.com/shuwenjun/oss/raw/master/uPic/687474703a2f2f6170692e666c7936332e636f6d2f7675655f626c6f672f7075626c69632f55706c6f6164732f32303139303232302f356336643634653065363664362e6a7067.jpeg)

### 三次握手四次挥手

> 关于三次握手与四次挥手面试官想考我们什么？https://juejin.im/post/6844903834708344840

**为啥需要三次握手**

- 第一次握手：客户端发送网络包，服务端收到了。这样服务端就能得出结论：客户端的发送能力、服务端的接收能力是正常的。
- 第二次握手：服务端发包，客户端收到了。这样客户端就能得出结论：服务端的接收、发送能力，客户端的接收、发送能力是正常的。不过此时服务器并不能确认客户端的接收能力是否正常。
- 第三次握手：客户端发包，服务端收到了。这样服务端就能得出结论：客户端的接收、发送能力正常，服务器自己的发送、接收能力也正常。

**为什么挥手需要四次**

1. 第一次挥手

   因此当主动方发送断开连接的请求（即 FIN 报文）给被动方时，仅仅代表主动方不会再发送数据报文了，但主动方仍可以接收数据报文。

2. 第二次挥手

   被动方此时有可能还有相应的数据报文需要发送，因此需要先发送 ACK 报文，告知主动方“我知道你想断开连接的请求了”。这样主动方便不会因为没有收到应答而继续发送断开连接的请求（即 FIN 报文）。

3. 第三次挥手

   被动方在处理完数据报文后，便发送给主动方 FIN 报文；这样可以保证数据通信正常可靠地完成。发送完 FIN 报文后，被动方进入 LAST_ACK 阶段（超时等待）。

4. 第四挥手

   如果主动方及时发送 ACK 报文进行连接中断的确认，这时被动方就直接释放连接，进入可用状态

### 缓存策略

> 图解 HTTP 缓存https://juejin.im/post/6844904153043435533#heading-5

### 非对称加密

![img](https://gitee.com/shuwenjun/oss/raw/master/uPic/89356430-58e32e00-d6f0-11ea-9320-115133c36e3e.png)

### cdn

CDN 的全称是 Content Delivery Network，即内容分发网络，它应用了 HTTP 协议里的缓存和代理技术，代替源站响应客户端的请求。CDN 是构建在现有网络基础之上的网络，它依靠部署在各地的边缘服务器，通过中心平台的负载均衡、内容分发、调度等功能模块，使用户就近获取所需内容，降低网络拥塞，提高用户访问响应速度和命中率。CDN 的关键技术主要有内容存储和分发技术。

### web 安全

> 寒冬求职之你必须要懂的 Web 安全 <https://juejin.im/post/6844903842635579405#heading-7>

#### csrf(跨站点请求伪造)

获取用户的信息然后伪造成该用户进行转账等操作。主要利用了 cookie 可以跨站点访问。具体流程如下。
用户登陆了网站 A，网站 A 返回了用户身份信息，此时用户又新打开了一个 Tab 标签页,访问了钓鱼网站 B，诱导用户点击，这时钓鱼网站就可以拿到了用户在网站 A 的 身份信息，然后就可以利用 身份信息 进行非法操作。

**防御**

1. 该攻击方式主要是因为 cookie 可以在在不同站点都能访问。
   为了从源头上解决这个问题，Google 起草了一份草案来改进 HTTP 协议，为 Set-Cookie 响应头新增 Samesite 属性，Samesite 有两个属性值，分别是 Strict 和 Lax。Samesite=Strict 被称为是严格模式,表明这个 Cookie 在任何情况都不可能作为第三方的 Cookie，有能力阻止所有 CSRF 攻击。
2. 使用 Token(主流)
   - 服务端给用户生成一个 token，加密后传递给用户
   - 用户在提交请求时，需要携带这个 token
   - 服务端验证 token 是否正确

#### XSS 攻击

> 如何防止 XSS 攻击？ <https://tech.meituan.com/2018/09/27/fe-security.html>

XSS(Cross-Site Scripting，跨站脚本攻击)是一种代码注入攻击。攻击者在目标网站上注入恶意代码，当被攻击者登陆网站时就会执行这些恶意代码，这些脚本可以读取 cookie，session tokens，或者其它敏感的网站信息，对用户进行钓鱼欺诈。

1. 反射型 xss
2. Dom 型 xss
3. 存储型 xss

### JSONP

就是利用`<script>`标签没有跨域限制的“漏洞”（历史遗迹啊）来达到与第三方通讯的目的。当需要通讯时，本站脚本创建一个`<script>`元素，地址指向第三方的 API 网址，形如:`<script src="http://www.example.net/api?param1=1&param2=2&callback=cb"></script> `并提供一个回调函数来接收数据（函数名可约定，或通过地址参数传递）。第三方产生的响应为 json 数据的包装（故称之为 jsonp，即 json padding），形如： callback({"name":"hax","gender":"Male"}) 这样浏览器会调用 callback 函数，并传递解析后 json 对象作为参数。本站脚本可在 callback 函数里处理所传入的数据。

客户端代码

```html
<script type="text/javascript">
  var localHandler = function (data) {
    alert(
      "我是本地函数，可以被跨域的remote.js文件调用，远程js带来的数据是：" +
        data.result
    );
  };
</script>
<script type="text/javascript" src="跨域服务器/remote.js"></script>
```

服务端代码

```php
$data = [
    "name":"anonymous66",
    "age":"18",
    "like":"jianshu"
];
// 接收callback函数名称
$callback = $_GET['callback'];
// 输出
echo $callback . "(" . json_encode($data) . ")";
```

### CORS(跨域资源共享)

> 跨域资源共享 CORS 详解 <http://www.ruanyifeng.com/blog/2016/04/cors.html> （重要有讲解，简单请求，非简单请求）

CROS 跨域资源共享，解决了 AJAX 的同源限制，允许浏览器向跨源服务器发送请求，它需要浏览器（客户端）和服务器共同配合来实现。

对于简单请求：
大白话理解就是：用户发送了一个跨域请求，浏览器会自动在这个请求的头部加上 Origin 字段表示该请求是从哪里发出的，当请求到达服务器时，由服务器自己判断是否存在于许可范围的源中，假如不在许可范围内，服务器会返回一个正常的 HTTP 回应。浏览器发现，这个回应的头信息没有包含 Access-Control-Allow-Origin 字段（详见下文），就知道出错了，从而抛出一个错误，被 XMLHttpRequest 的 onerror 回调函数捕获。如果 Origin 指定的域名在许可范围内，服务器返回的响应，会多出几个头信息字段。

```html
Access-Control-Allow-Origin: http://api.bob.com
Access-Control-Allow-Credentials: true Access-Control-Expose-Headers: FooBar
Content-Type: text/html; charset=utf-8
```

对于非简单请求：浏览器会首先发送一个预检请求（options）请求。如果预检请求通过则剩下的步骤和简单请求一样。

#### https

> 视频讲解：https://www.bilibili.com/video/BV1j7411H7vV?from=search&seid=10124025355353102978
>
> 探探 https https://juejin.im/post/6844903504046211079

![image-20200920202236215](https://gitee.com/shuwenjun/oss/raw/master/uPic/image-20200920202236215.png)

## 算法

> - 剑指 offer <https://www.nowcoder.com/ta/coding-interviews>
> - 详解 vue 的 diff 算法 <https://juejin.im/post/6844903607913938951>
> - 写给前端的算法进阶指南，我是如何两个月零基础刷 200 题 <https://juejin.im/post/6847009772500156429>
> - 前端算法渣的救赎之路 <https://juejin.im/post/6844904175562653710>
> - 前端该如何准备数据结构和算法 <https://juejin.im/post/6844903919722692621>

### 排序算法

> - 十大经典排序算法（动图演示）<https://www.cnblogs.com/onepixel/articles/7674659.html>

### vue diff 算法

> - 解析 vue2.0 的 diff 算法 <https://github.com/aooy/blog/issues/2>
> - 大白话 diff 算法 <https://juejin.im/post/6844903938102149134>
> - 详解 vue 的 diff 算法 https://juejin.im/post/6844903607913938951#heading-4

## 设计模式

## react

> - 那些年，自己没回答上来的 react 面试题 <https://juejin.im/post/6844903816857403405>
> - 35 道咱们必须要清楚的 React 面试题 <https://juejin.im/post/6844903988073070606>
> - 从 Mixin 到 HOC 再到 Hook <https://juejin.im/post/6844903815762673671>
> - 2019 年 17 道高频 React 面试题及详解 <https://juejin.im/post/6844903922453200904#heading-0>
> - 一个合格(优秀)的前端都应该阅读这些文章<https://juejin.im/post/6844903896637259784#heading-5> (包含 react)
> - 你要的 React 面试知识点，都在这了 <https://juejin.im/post/6844903857135304718>
> - 必须要会的 50 个 React 面试题 <https://juejin.im/post/6844903806715559943#heading-13>

### 和 vue 的区别

### 为什么列表循环渲染的 key 最好不要用 index

### 在构造函数调用 `super` 并将 `props` 作为参数传入的作用是啥

### 受控组件和非受控组件

所谓受控组件，就是组件中的状态是可以根据用户的输入，实时的进行改变，并且展示在界面上，常见的受控组件：<input/>、<select/>、<radio/>这些组件要根据用户输入的改变，而改变其中的属性值。

非受控组件： 非受控也就意味着我可以不需要设置它的 state 属性，而通过 ref 来操作真实的 DOM

当用户 输入时，表单元素的值是不是通过 state 控制的如果是则为受控组件，否则不是受控组件。例如

`<input value={this.state.value} onChange={(e)=>{this.setState({value:e.target.value})}}/>`

### 在 react 中如何处理事件

> <https://segmentfault.com/a/1190000008782645>
> react的事件机制 <https://segmentfault.com/a/1190000017499189>

### super(props)是干啥的

> React 构造函数中为什么要写 super(props) <https://blog.csdn.net/huangpb123/article/details/85009024>

### HOC

```jsx
function proxyHOC(WrappedComponent) {
  return class extends Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}
```

这种方式生成的高阶组件就是原组件的父组件，上面的函数 visible 就是一个 HOC 属性代理的实现方式。

### renderProps

### hooks

#### react 是怎么保证多个 useState 的相互独立的

```jsx
//第一次渲染
useState(42); //将age初始化为42
useState("banana"); //将fruit初始化为banana
useState([{ text: "Learn Hooks" }]); //...

//第二次渲染
useState(42); //读取状态变量age的值（这时候传的参数42直接被忽略）
useState("banana"); //读取状态变量fruit的值（这时候传的参数banana直接被忽略）
useState([{ text: "Learn Hooks" }]); //...
```

#### useMemo&useCallback()

useMemo 和 useCallback 都会在组件第一次渲染的时候执行，之后会在其依赖的变量发生改变时再次执行；并且这两个 hooks 都返回缓存的值，useMemo 返回缓存的变量，useCallback 返回缓存的函数。

```jsx
export default function WithMemo() {
  const [count, setCount] = useState(1);
  const [val, setValue] = useState("");
  const expensive = useMemo(() => {
    console.log("compute");
    let sum = 0;
    for (let i = 0; i < count * 100; i++) {
      sum += i;
    }
    return sum;
  }, [count]);

  return (
    <div>
      <h4>
        {count}-{expensive}
      </h4>
      {val}
      <div>
        <button onClick={() => setCount(count + 1)}>+c1</button>
        <input value={val} onChange={(event) => setValue(event.target.value)} />
      </div>
    </div>
  );
}
```

**useCallback**
有一个父组件，其中包含子组件，子组件接收一个函数作为 props；通常而言，如果父组件更新了，子组件也会执行更新；但是大多数场景下，更新是没有必要的，我们可以借助 useCallback 来返回函数，然后把这个函数作为 props 传递给子组件；这样，子组件就能避免不必要的更新。

#### useEffect

### react-router

### react-thunk

中间件就是一个函数，对 store.dispatch 方法进行了改造，在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。dispatch 本身只能派发同步动作通过 redux-thunk 我们可以返回一个函数。在该函数内部执行 redux-thunk，执行完毕之后再派发动作。
示例代码：

```javascript
let nextTodoId = 0
export const addTodo = text => ({
     type: 'ADD_TODO',
     id: nextTodoId++,
     text
 })


 //引入thunk后
 let nextTodoId = 0
 export const addTodo = text => ({
     return async dispatch => {
     //dosomething, request
      await request()
      dispatch({
	     type: 'ADD_TODO',
	     id: nextTodoId++,
	     text
		})
     }
 })
```

### react-redux

### 代码分割

### PWA

> - useEffect 详解 <https://www.cnblogs.com/ascoders/p/10591832.html>

### 性能优化

> - React 16 加载性能优化指南 <https://juejin.im/post/6844903640902156301>
> - github https://github.com/shuwenjunn/NOTE/blob/master/react%20%E6%80%A7%E8%83%BD%E4%BC%98%E5%8C%96.md
> - 如何对 React 函数式组件进行优化 https://juejin.im/post/6844904000043614222

父组件的渲染会导致子组件重复渲染

- 使用纯组件
- 使用 React.Memo()对组件进行缓存
- 使用`shouldComponentUpdate`
- 使用 key
- 使用 useCallback
- immutable

核心点在于减少渲染次数和，减少计算次数

### mvvm

> - 50 行代码的 MVVM，感受闭包的艺术 <https://juejin.im/post/6844903619808985095>

### immutable.js

### 服务端渲染 SSR

> - 从头开始，彻底理解服务端渲染原理(8 千字汇总长文) <https://juejin.im/post/6844903881390964744>

## vue

> - 20+Vue 面试题整理 <https://juejin.im/post/6844904084374290446>

## 工程化

### webpack

> - 手写 webpack 核心原理，再也不怕面试官问我 webpack 原理 <https://juejin.im/post/6854573217336541192>
> - 由浅入深配置 webpack4 <https://juejin.im/post/6859888538004783118>
> - 带你深度解锁 Webpack 系列(基础篇) <https://segmentfault.com/a/1190000021953371>
> - webpack 打包原理 ? 看完这篇你就懂了 ! <https://juejin.im/post/6844904038543130637>
> - webpack 最佳配置指北 <https://juejin.im/post/6844904036936712200>
> - 轻松理解 webpack 热更新原理 <https://juejin.im/post/6844904008432222215>
> - webpack 中那些最易混淆的 5 个知识点 <https://juejin.im/post/6844904007362674701>
> - 手摸手，带你用合理的姿势使用 webpack4（上） <https://juejin.im/post/6844903652956569608>
> - 手摸手，带你用合理的姿势使用 webpack4（下） <https://juejin.im/post/6844903652956585992>
> - 作为一个前端工程师也要掌握的几种文件路径知识 <https://juejin.im/post/6844903878253608974>
> - 玩转 webpack，使你的打包速度提升 90% <https://juejin.im/post/6844904071736852487>
> - 一步步从零开始用 webpack 搭建一个大型项目 <https://juejin.im/post/6844904007903772679>
> - 一步一步的了解 webpack4 的 splitChunk 插件 <https://juejin.im/post/6844903614759043079>

### babel

> - 读完这篇你还不懂 Babel 我给你寄口罩 <https://juejin.im/post/6844904065223098381>
> - 不容错过的 Babel7 知识 <https://juejin.im/post/6844904008679686152>

- babel/cli 允许我们从终端运行 Babel
- envpreset 只包含我们使用的功能的转换,实现我们的目标浏览器中缺少的功能
- @babel/polyfill 实现所有新的 JS 功能, 为目标浏览器引入缺少的环境(但是 Babel7.4.0 以上不推荐使用)

## node

### koa 洋葱模型

## 其他

> - 前端工程师不可不知的 Nginx 知识 <https://juejin.im/post/6864085814571335694>

## 项目

## 简历

> - 看完跳槽少说涨 5 K，前端面试从准备到谈薪完全指南（近万字精华）<https://juejin.im/post/6844904029340827656>
> - 非科班二本前端大厂面试的心路历程和总结（腾讯、头条、阿里、京东） | 掘金技术征文 <https://juejin.im/post/6844904111150727181>
> - 面经合集 | 面试不用愁，掘友能解忧，一批大厂面试经验新鲜出炉啦~ <https://juejin.im/post/6844904097024311309>
> - 面试分享：两年工作经验成功面试阿里 P6 总结 <https://juejin.im/post/6844903928442667015>
> - 霖呆呆的近期面试 128 题汇总(含超详细答案) | 掘金技术征文 <https://juejin.im/post/6844904151369908232>
> - 霖呆呆的中大厂面试记录及 2 年前端薪资对比(附赠学习方法) <https://juejin.im/post/6844904181627781128>
