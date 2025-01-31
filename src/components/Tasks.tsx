import { useSelector } from "react-redux";
import Task from "./Task"

const Tasks = () => {

    const tasks = useSelector((state: TasksReducer) => state.tasksReducer);
    const search = useSelector((state: SearchTasksReducer) => state.searchTasksReducer);

    const filterItems = (taskEl: Task) => {
        let check = true;

        if (search.name) {
            check = check && taskEl.text.includes(search.name);
        }

        return check;
    };

    return (
        <ul className="tasks-list">
            {tasks.filter(filterItems).map(task => (<li className="task-elem" key={task.id}>
                <Task tasks={tasks} task={task} />
            </li>))}
        </ul>
    )
}

export default Tasks