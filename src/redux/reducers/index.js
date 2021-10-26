import { combineReducers } from "redux";
import { useReducer, userReducer } from "./userReducer";


const reducers = combineReducers({
    usersData: userReducer,
});


export default reducers;