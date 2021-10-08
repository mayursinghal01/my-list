import { ADD_TASK, CHECK_TASK, DELETE_TASK,CLEAR_COMPLETED, SET_FILTER } from "./actionTypes"

export const addTask = (data) => {
    
    return {
        type: ADD_TASK,
        data
    }
}
export const deleteTask = (id) => {
    return {
        type: DELETE_TASK,
        id
    }
}

export const checkTask = (id) => {
    return{
        type: CHECK_TASK,
        id
    }
}
export const clearCompleted = () => {
    return{
        type: CLEAR_COMPLETED
    }
}

export const setFilter = (type) => {
    return {
        type: SET_FILTER,
        taskType : type
    }
}
