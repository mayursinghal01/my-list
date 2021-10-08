import { useState,useEffect } from "react"
import { useDispatch,useSelector } from "react-redux"
import { clearCompleted} from "../actions/taskActions"
import Button from "./Button"

const Filters = () => {

    const tasks = useSelector(state => state.tasks)

    const dispatch = useDispatch()
    
    const handleClear = () => {
        dispatch(clearCompleted())
    }

    const [length,setLength] = useState(0);
    useEffect(() => {
        setLength(tasks.filter(task => !task.completed).length)
    }, [tasks])

    return (
        <div className="filter">
            <h3>{length} items remaining</h3>
            <Button value={'ALL'} />
            <Button value={'ACTIVE'} />
            <Button value={'COMPLETED'} />
            <h4 onClick={handleClear} >CLEAR COMPLETED</h4>
        </div>
    )
}

export default Filters
