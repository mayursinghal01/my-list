import AddTask from "./AddTask"
import TaskList from "./TaskList"

const TaskManger = () => {
    return (
        <div className="taskMa">
            <AddTask/>
            <hr />
            <TaskList/>
        </div>
    )
}

export default TaskManger
