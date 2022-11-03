# Redux 原理及实现

> redux 源码：https://github.com/reduxjs/redux/tree/55e77e88c98723f1883929458bb0144430108143/src

## 前置知识点 函数柯里化

::: demo

```vue
<template>
  <button @click="run1">clicke me(不使用compose)</button>
  <button @click="run2">clicke me(compose 调用)</button>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    a(param) {
      return param + "a";
    },
    b(param) {
      return param + "b";
    },
    c(param) {
      return param + "c";
    },
    compose(...fns) {
      return fns.reduce(
        (pre, cur) =>
          (...args) =>
            a(b(...args))
      );
    },
    run1() {
      const res = this.c(this.b(this.a("执行")));
      alert(res);
    },
    run2() {
      const res = this.compose(this.c, this.b, this.a)("执行");
      alert(res);
    },
  },
};
</script>
```

:::

## redux-thunk 支持 dispatch function

先看一个使用案例以便理解

```js {80-84}
const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

// state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
// action
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

// action creator
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

// reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
      };
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

const fetchUsersAsync = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        // response.data is the list of users
        const users = response.data.map((user) => user.id);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const message = error.message;
        dispatch(fetchUsersFailure(message));
      });
  };
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => console.log(store.getState()));

// dispatch 了异步action
store.dispatch(fetchUsersAsync());
```

## applyMiddleware

## 洋葱模型

## 巧妙的设计
