import { createStore, combineReducers } from "redux";

import formReducer from "../reducers/formReducer";
import tasksReducer from "../reducers/tasksReducer";
import searchTasksReducer from "../reducers/searchTasksReducer";

const reducer = combineReducers({
    formReducer, tasksReducer, searchTasksReducer
});

const ReactReduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(
    reducer,
    ReactReduxDevTools,
);

export default store;