import { useDispatch } from "react-redux"
import { edittingTaskService, removeTaskService } from "../redux/actions/actionCreators";

const Task = ({ task, tasks }: { task: Task, tasks: Task[] }) => {

    const dispatch = useDispatch();

    const index = tasks.findIndex(taskEl => taskEl.id == task.id);

    const onEdit = () => {
        dispatch(edittingTaskService(task.text, Number(task.price), true, index));
    }

    const onRemove = () => {
        dispatch(removeTaskService(task.id));
        dispatch(edittingTaskService('', '', false, 0));
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