# Redux 原理及实现

> redux 源码：https://github.com/reduxjs/redux/tree/55e77e88c98723f1883929458bb0144430108143/src

## 前置知识点 函数柯里化

```js
function compose(...fns) {
  return fns.reduce(
    (pre, cur) =>
      (...args) =>
        pre(cur(...args))
  );
}
function a(params) {
  return params + "a";
}

function b(params) {
  return params + "b";
}

function c(params) {
  return params + "c";
}

function d(params) {
  return params + "d";
}

compose(d, c, b, a)("run:"); ////>> run:abcd

// compose 分解
run1 = (...args) => d(c(...args));
run2 = (...args) => run1(b(...args));
run3 = (...args) => run2(a(...args));
// 执行顺序
run3("run:"); //>> run:abcd
```

`compose(d, d, b,a) (...args) === d(c(b(a(...args))))`

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
