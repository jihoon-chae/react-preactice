// Redux

import { createWrapper } from "next-redux-wrapper";
import { createStore } from "redux";
import reducer from "../reducers";

const configureStore = () => {
  const store = createStore(reducer);
  store.dispatch({ // dispatch하게 되면 type과 data가 reducer로 전달됨
    type: "CHANGE_NICKNAME",
    data: "boogicho",
  });
  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
