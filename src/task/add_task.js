import { useDispatch } from "react-redux";
import { add } from '../task/task_slice';
import { useRef, useState } from "react";

function AddTask() {
    const taskName = useRef();
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState("");

    const addTask = () => {
        const newTaskName = taskName.current.value;
        if (newTaskName) {
            dispatch(add(newTaskName));
            setInputValue("");
        }
    }

    return (
        <div class="wrapper">
            <h1 class="text-center">TODO LIST APP</h1>
            <div class="add-task">
                <label>Task name:</label>
                <input
                    type="text"
                    placeholder="Input name of task"
                    ref={taskName}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={addTask}>Add</button>
            </div>
        </div>
    );
}

export default AddTask;
