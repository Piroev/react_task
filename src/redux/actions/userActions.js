import { ActionTypes } from "../constants/action-types";

export const editUser = (users) => {
    return {
        type: ActionTypes.EDIT_USER,
        payload: users
    };
};