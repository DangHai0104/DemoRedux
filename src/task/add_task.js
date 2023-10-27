import { useDispatch } from "react-redux";
import { add } from '../task/task_slice';
import { useRef } from "react";

function AddTask() {
    const taskName = useRef();
    const dispatch = useDispatch();
    const addTask = () => {
        dispatch(add(taskName.current.value));
    }

    return (
        <div class="wrapper">
            <h1 class="text-center">TODO LIST APP</h1>
            <div class="add-task">
                <label>Task name:</label>
                <input type="text" placeholder="Input name of task" ref={taskName} />
                <button onClick={addTask}>Add</button>
            </div>
        </div>
    );
}

export default AddTask;