import { ADD_TASK, EDIT_TASK, DELETE_TASK, CHECK_TASK } from "../Constants/action-type";

export const addTask = newTask => {
    return {
        type : ADD_TASK,
        payload : newTask
    }
}
export const editTask = (payload) => {
    return {
        type : EDIT_TASK,
        payload 
    }
}
export const deleteTask = (id, newTask) => {
    return {
        type : DELETE_TASK,
        payload : {id, newTask}
    }
}
export const completeTask = (payload) => {
    return {
        type : CHECK_TASK,
        payload 
    }
}