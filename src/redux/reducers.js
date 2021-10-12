import { combineReducers } from "redux";

import post from "./slices/post";

const rootReducer = combineReducers({ post });

export default rootReducer;
