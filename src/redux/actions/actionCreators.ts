import {
    EDITTING_TASK_SERVICE,
    CHANGED_TASK_SERVICE,
    CANCEL_TASK_SERVICE,
    EDIT_TASK_SERVICE,
    ADD_TASK_SERVICE,
    REMOVE_TASK_SERVICE,
    SEARCH_CHANGE_FIELD_SERVICE
} from './actionTypes';

export const edittingTaskService = (text: string, price: number | string, isEdit: boolean, index: number): { type: string, payload: { text: string, price: number | string, isEdit: boolean, index: number } } => ({ type: EDITTING_TASK_SERVICE, payload: { text, price, isEdit, index } });
export const changedTaskService = (name: string, value: string): { type: string, payload: { name: string, value: string } } => ({ type: CHANGED_TASK_SERVICE, payload: { name, value } });
export const cancelTaskService = (): { type: string } => ({ type: CANCEL_TASK_SERVICE });

export const editTaskService = (text: string, price: number, index: number): { type: string, payload: { text: string, price: number, index: number } } => ({ type: EDIT_TASK_SERVICE, payload: { text, price, index } });
export const addTaskService = (text: string, price: number): { type: string, payload: { text: string, price: number } } => ({ type: ADD_TASK_SERVICE, payload: { text, price } });
export const removeTaskService = (id: string): { type: string, payload: { id: string } } => ({ type: REMOVE_TASK_SERVICE, payload: { id } });

export const searchChangeService = (name: string, value: string): { type: string, payload: { name: string, value: string } } => ({ type: SEARCH_CHANGE_FIELD_SERVICE, payload: { name, value } });