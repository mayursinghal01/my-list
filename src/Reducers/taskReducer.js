import { ADD_TASK, CHECK_TASK, CLEAR_COMPLETED,  DELETE_TASK, SET_FILTER } from "../actions/actionTypes";
import Task from "../model/Task";


const intitalState = {
    taskType : 'ALL',
    tasks : [
        new Task(1,"Task number 1 which has to be done by this date",false),
        new Task(2,"Task number 2 clouser",false),
        new Task(3,"Detail-out task 3",false),
        new Task(4,"Pick someone at the airport at that day",true),
        new Task(5,"Pick someone at the airport at that day",true)
    ]
}

export const taskReducer = (state= intitalState,action) => {
    switch(action.type){

        case ADD_TASK :
            const task = new Task(
                state.tasks.length+1,
                action.data
            )
            
            return {
                ...state,
               tasks: [...state.tasks,task]
            }

        case DELETE_TASK :
            
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.id)
            }

        case CHECK_TASK:
            const tasks = state.tasks.map(obj =>{
                if(obj.id === action.id){
                    obj.completed = !obj.completed
                }
                return obj
            })
            
            return {
                ...state,
                tasks
            }


        case CLEAR_COMPLETED :
            return {
                ...state,
                tasks: state.tasks.filter(task => task.completed === false)
            }

        case SET_FILTER :
            return {
                ...state,
                taskType : action.taskType
            }

        default :
            return state;
    }
}
