# qiankun 分享

## 集成展示

### 乾坤是什么，集成之后的业务形态

> qiankun 官网 https://qiankun.umijs.org/zh/guide

#### 基于 single-spa?

1. 对微应用的侵入性太强
2. 无样式隔离
3. 无 js 隔离
4. 资源预加载
5. 应用通信问题

## 集成 API

### 主应用

```js
import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react app", // app name registered
    entry: "//localhost:7100",
    container: "#yourContainer",
    activeRule: "/yourActiveRule",
  },
  {
    name: "vue app",
    entry: { scripts: ["//localhost:7100/main.js"] },
    container: "#yourContainer2",
    activeRule: "/yourActiveRule2",
  },
]);

start();
```

### 子应用

#### 主应用怎么捕获这些方法？

```js
/**
 * bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
 * 通常我们可以在这里做一些全局变量的初始化，比如不会在 unmount 阶段被销毁的应用级别的缓存等。
 */
export async function bootstrap() {
  console.log("react app bootstraped");
}

/**
 * 应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
 */
export async function mount(props) {
  ReactDOM.render(
    <App />,
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  );
}

/**
 * 应用每次 切出/卸载 会调用的方法，通常在这里我们会卸载微应用的应用实例
 */
export async function unmount(props) {
  ReactDOM.unmountComponentAtNode(
    props.container
      ? props.container.querySelector("#root")
      : document.getElementById("root")
  );
}

/**
 * 可选生命周期钩子，仅使用 loadMicroApp 方式加载微应用时生效
 */
export async function update(props) {
  console.log("update props", props);
}
```

### webpack 配置？

```js
const packageName = require("./package.json").name;

module.exports = {
  output: {
    library: `${packageName}-[name]`,
    libraryTarget: "umd",
    jsonpFunction: `webpackJsonp_${packageName}`,
  },
};
```

## 微前端需要解决的问题

### 注册挂载

### 隔离

### 通信

### 路由

## vue hash history 实现

### 数据通信

## 遇到问题&分析

## chime 集成之路

### 方案选型

## 参考文章

1. 手把手带你手写一个 qiankun 微前端核心原理 https://juejin.cn/post/7163602601748594724
2. 微前端乾坤框架 CSS JS 沙箱隔离环境原理 https://juejin.cn/post/7167309418093084703#heading-5
3. https://blog.csdn.net/weixin_45389051/article/details/123403887
4. 源码分析：https://juejin.cn/post/6885211340999229454#heading-40
5. Qiankun 原理——JS 沙箱是怎么做隔离的 https://juejin.cn/post/7148075486403362846#heading-4
6. 解密微前端：从qiankun看子应用加载 https://juejin.cn/post/6891888458919641096
7. single-spa https://juejin.cn/post/7152386393312854029
8. fakeWindow产生 https://juejin.cn/post/6896643767353212935#heading-1
