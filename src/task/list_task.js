import { useDispatch, useSelector } from 'react-redux'
import { del } from '../task/task_slice';

function ListTasks() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.list);

    const delTask = (name) => {
        dispatch(del(name));
    }
    return (
        <>
            <div class="wrapper">
                <div class="list-tasks">
                    <h3 class="mb-5">List of tasks:</h3>
                    {
                        tasks.map(function (task, idx) {
                            return (
                                <div class="task" key={idx}>
                                    <p>{task}</p>
                                    <button onClick={() => delTask(task)}>X</button>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>

    )

}

export default ListTasks;