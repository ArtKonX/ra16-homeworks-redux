import { useDispatch } from "react-redux"
import { edittingTaskService, removeTaskService } from "../redux/actions/actionCreators";

const Task = ({ task, tasks }: { task: Task, tasks: Task[] }) => {

    const dispatch = useDispatch();

    const onEdit = () => {
        const index = tasks.findIndex(taskEl => taskEl.id == task.id);
        dispatch(edittingTaskService(task.text, Number(task.price), true, index));
    }

    const onRemove = () => {
        dispatch(removeTaskService(task.id));
    }

    return (
        <div className="task">
            <p className="task-text">{task.text}</p>
            <span className="task-price">{task.price}</span>
            <button type='button' className="edit" onClick={onEdit}>✎</button>
            <button type='button' className="delete-task" onClick={onRemove}>x</button>
        </div>
    )
}

export default Task