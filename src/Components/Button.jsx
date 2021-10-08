import { useSelector,useDispatch } from "react-redux"
import { setFilter } from "../actions/taskActions"




const Button = ({value}) => {

    const taskType = useSelector(state => state.taskType)
    const dispatch = useDispatch()
    const handleFilter = (type) => {
        dispatch(setFilter(type))
    }

    const activeButton = {
       border : "2px solid black",
       borderRadius : "5px"
    };
    const deactiveButton = {};


    return (
        <button 
            style ={taskType=== value ? activeButton : deactiveButton} 
            onClick={() => handleFilter(value)}> 
            {value}
        </button>
    )
}

export default Button
