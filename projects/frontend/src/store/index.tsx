import { applyMiddleware, createStore } from "redux";
import reducers from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

const enhancer = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(reducers,enhancer);

export default store;