import { combineReducers } from "redux";
import { userReducer } from "./userReducer";


const reducers = combineReducers({
    usersData: userReducer,
});


export default reducers;