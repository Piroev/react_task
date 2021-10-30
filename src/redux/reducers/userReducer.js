import * as actionTypes  from "../constants/action-types";
import usersDataFromJSON from "./users.json"

const initialState = {
    users: usersDataFromJSON

};

export const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.ON_CHANGE:
            return {
                state,
            };
        default:
            return state;
        }
}
