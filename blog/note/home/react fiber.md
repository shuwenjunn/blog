# 理解 Redux Fiber

## 问题

1. react 的父子组件更新流程？
2. react hook 的内部实现？
3. 什么是 react element?
4. react 中断后发生新的状态改变怎么办？
5. effect list 怎么进行收集？

## requestIdleCallback

```js
let taskQueue = [
  () => {
    console.log("task1 start");
    console.log("task1 end");
  },
  () => {
    console.log("task2 start");
    console.log("task2 end");
  },
  () => {
    console.log("task3 start");
    console.log("task3 end");
  },
];

const performUnitWork = () => {
  // 取出第一个队列中的第一个任务并执行
  taskQueue.shift()();
};

const workloop = (deadline) => {
  console.log(`此帧的剩余时间为: ${deadline.timeRemaining()}`);
  // 如果此帧剩余时间大于0或者已经到了定义的超时时间（上文定义了timeout时间为1000，到达时间时必须强制执行），且当时存在任务，则直接执行这个任务
  // 如果没有剩余时间，则应该放弃执行任务控制权，把执行权交还给浏览器
  while (
    (deadline.timeRemaining() > 0 || deadline.didTimeout) &&
    taskQueue.length > 0
  ) {
    performUnitWork();
  }

  // 如果还有未完成的任务，继续调用requestIdleCallback申请下一个时间片
  if (taskQueue.length > 0) {
    window.requestIdleCallback(workloop, { timeout: 1000 });
  }
};

requestIdleCallback(workloop, { timeout: 1000 });
```

## 总结

## 参考

- [https://juejin.cn/post/6943896410987659277](https://juejin.cn/post/6943896410987659277)
