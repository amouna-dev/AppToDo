import { ADD_TASK, EDIT_TASK, DELETE_TASK, CHECK_TASK } from "../Constants/action-type";

const initialState = {
    listTasks : [
        {
            id: 1, 
            text: "go to school",
            isDone:false
        }
    ]
}

const TaskReducer = (state= initialState, {type, payload}) => {
    switch (type) {
        case ADD_TASK:
          return  {...state, listTasks: [...state.listTasks, payload]} 
         
        case EDIT_TASK:
            return  {...state, listTasks: state.listTasks.map(el =>
                el.id === payload.id ? { ...el, text: payload.text}: {...el, payload})}
        
        case DELETE_TASK:
            return  {...state, listTasks: state.listTasks.filter(el => el.id !== payload.id)}
        
        case CHECK_TASK:
            return  {...state, listTasks: state.listTasks.map(el => 
                el.id === payload.id ? { ...el, isDone : !el.isDone} :  {...el, payload})}
        
        
        default:
            return state
    }
}

export default TaskReducer;