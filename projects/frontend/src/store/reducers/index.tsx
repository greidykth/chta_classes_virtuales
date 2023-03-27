import { combineReducers } from "redux";
import reducerChat from "./chat.reducer";

const reducers = combineReducers({ chat: reducerChat });

export default reducers;