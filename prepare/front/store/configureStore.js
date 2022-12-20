// Redux

import { createWrapper } from "next-redux-wrapper";
import { createStore, compose, applyMiddleware } from "redux";
import reducer from "../reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const configureStore = () => {
  // 히스토리 추적 가능
  const middlewares = [];
  const enhancer =
    process.env.NODE_ENV === "production"
      ? compose(applyMiddleware(...middlewares)) // 배포용일때는 데브툴 연결 X
      : composeWithDevTools(applyMiddleware(...middlewares)); // 배포용 아닐때는 데브툴연결
  const store = createStore(reducer, enhancer);
  store.dispatch({
    // dispatch하게 되면 type과 data가 reducer로 전달됨
    type: "CHANGE_NICKNAME",
    data: "boogicho",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
