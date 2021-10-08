import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import TaskDone from "./TaskDone"
import TaskItem from "./TaskItem"

const TaskList = () => {

    const tasks = useSelector(state => state.tasks)
    const taskType = useSelector(state => state.taskType)

    const [list,setList] = useState([])

    useEffect(() => {
       switch(taskType) {
            case 'ACTIVE' :
               setList(tasks.filter(task => !task.completed))
               break;
            
            case 'COMPLETED' :
                setList(tasks.filter(task => task.completed))
                break;

            default:
                // tasks.forEach((task, index) => {
                //     if(!task.completed){
                //         tasks.splice(index, 1);
                //         tasks.unshift(task)
                //     }
                // })
                setList(tasks)
       }
    }, [taskType,tasks])
    
    return (
        <div>
            { list.length !== 0 ?  
                list.map(task => <TaskItem key={task.id} task={task}/> ) : 
                <TaskDone/> }
        </div>
    )
}

export default TaskList
