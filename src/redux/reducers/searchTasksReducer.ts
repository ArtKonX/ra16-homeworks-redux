import { SEARCH_CHANGE_FIELD_SERVICE } from "../actions/actionTypes";

const initialState = { name: "" };

export default function searchTasksReducer(state = initialState, action: SearchTasksAction) {
    switch (action.type) {
        case SEARCH_CHANGE_FIELD_SERVICE: {
            const { name, value } = action.payload;

            return { ...state, [name]: value };
        }

        default:
            return state;
    }
}