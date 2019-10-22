import counterReducer from './counter.js';
import loginReducer from './login.js';
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    counter: counterReducer,
    isLogin: loginReducer
})

export default rootReducer;