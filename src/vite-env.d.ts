/// <reference types="vite/client" />

interface Task {
    id: string,
    text: string,
    price: number
}

interface SearchTasksReducer {
    searchTasksReducer: {
        name: string
    }
}

interface FormReducer {
    formReducer: {
        text: string,
        price: number,
        isEdit: boolean,
        index: number
    }
}

interface TasksReducer {
    tasksReducer: Task[]
}

interface FormReducerAction {
    type: string,
    payload: {
        text: string,
        price: number,
        isEdit: boolean,
        index: number,
        name: string,
        value: string
    }
}

interface SearchTasksAction {
    type: string,
    payload: {
        name: string,
        value: string
    }
}

interface TasksReducerAction {
    type: string,
    payload: {
        text: string,
        price: number,
        index: number,
        id: string
    }
}