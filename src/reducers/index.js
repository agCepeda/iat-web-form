import { combineReducers } from "redux";
import userState from './user';
import adminState from './admin';

export default combineReducers({
    userState, adminState
})
