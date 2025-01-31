const initialState = { text: "", price: "", isEdit: false, index: 0 };

import { EDITTING_TASK_SERVICE, CANCEL_TASK_SERVICE, CHANGED_TASK_SERVICE } from '../actions/actionTypes'

export default function formReducer(state = initialState, action: FormReducerAction) {
    switch (action.type) {
        case EDITTING_TASK_SERVICE: {
            const { text, price, isEdit, index } = action.payload;

            return { ...state, text, price, isEdit, index };
        }
        case CANCEL_TASK_SERVICE:
            return initialState;

        case CHANGED_TASK_SERVICE: {
            const { name, value } = action.payload;

            return { ...state, [name]: value };
        }
        default:
            return state;
    }
}