import { ActionTypes } from "../constants/action-types";
import data from "./users.json"

const initialState = {
    users: data
};

export const userReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ActionTypes.EDIT_USER:
            return {...state, users: payload};
        default:
            return state;
    }
}