import {Add, SendRounded} from "@material-ui/icons"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask } from "../actions/taskActions";

const AddTask = () => {

    const [title,setTitle] = useState('');
    const [error,setError] = useState('Title cannot be blank');
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setTitle(e.target.value)
        if(title !== ''){
            setAdd(true)
        }
        
    }
    
    const handleSubmit = (e) => {

        e.preventDefault();
        
        let valid = true;
        if(title === ''){
            setError('Title cannot be blank')
            alert(error)
            valid = false;
        }
        
        if(valid){
            const data = title
            dispatch(addTask(data))
            setTitle('')
            setAdd(false)
        }
    }
    const[add,setAdd] = useState(false)
    const handleIcon = () => {
        setAdd(true)
    }
    return (
        <form onSubmit={handleSubmit}> 
            {add ? <SendRounded className="icon"/> : <Add className="icon"/>}
            
            
            <input 
                type="text" 
                placeholder="What need to be done"
                value = {title}
                onChange={handleChange} 
                onClick ={handleIcon}
                
                />
        </form>
    )
}

export default AddTask
