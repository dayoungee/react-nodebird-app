import { createStore } from "redux";
import { createWrapper } from "next-redux-wrapper";
//import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from "../reducers";

const configureStore = () => {
  //   console.log(context);
  //   const middlewares = [];
  //   const enhancer = process.env.NODE_ENV === 'production'
  //     ? compose(applyMiddleware(...middlewares))
  //     : composeWithDevTools(
  //       applyMiddleware(...middlewares),
  //     );
  const store = createStore(reducer); //, enhancer);
  store.dispatch({
    type: "CHANGE_NICKNAME",
    data: "dsds",
  });

  return store;
};

const wrapper = createWrapper(configureStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
