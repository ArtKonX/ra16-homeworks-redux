import { v4 as uuidv4 } from 'uuid';

import { ADD_TASK_SERVICE, EDIT_TASK_SERVICE, REMOVE_TASK_SERVICE } from '../actions/actionTypes'

const initialState: Task[] = [{ id: uuidv4(), text: "Замена стекла", price: 21000 }, { id: uuidv4(), text: "Замена дисплея", price: 25000 }, { id: uuidv4(), text: "Замена аккумулятора", price: 4000 }, { id: uuidv4(), text: "Замена микрофона", price: 2500 }];

export default function tasksReducer(state = initialState, action: TasksReducerAction) {
    switch (action.type) {

        case ADD_TASK_SERVICE: {
            const { text, price } = action.payload;

            return [...state, { id: uuidv4, text, price }]
        };

        case EDIT_TASK_SERVICE: {
            const { text, price, index } = action.payload;

            return [
                ...state.slice(0, index),
                { id: state[index].id, text, price },
                ...state.slice(index + 1),
            ]
        }
        case REMOVE_TASK_SERVICE: {

            const { id } = action.payload;

            const filterTask = state.filter(task => task.id != id)

            return [
                ...filterTask
            ]
        }

        default:
            return state;
    }

}