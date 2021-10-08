
import { Close } from "@material-ui/icons"
import { useDispatch } from "react-redux"
import { checkTask, deleteTask } from "../actions/taskActions"



const TaskItem = ({task}) => {
 

    const dispatch = useDispatch()
   
    const handledeleteTask = () => {
        dispatch(deleteTask(task.id))
    } 
    const handleCheck = () => {
        dispatch(checkTask(task.id))
    }
    const check = task.completed
    return (
        <div className="taskItem">
            <input 
                type="checkbox" 
                defaultChecked = {check}
                onClick = {handleCheck}
                 />
            
            <p style= {check ? {
                textDecoration:"line-through",color:'rgb(128, 125, 125)'} : 
                {textDecoration:"none"} }
                > {task.title}</p>
            
            <button onClick={handledeleteTask} >
              
                <Close/>
             
            </button>
            
        </div>
    )
}

export default TaskItem
