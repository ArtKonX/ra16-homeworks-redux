import { useDispatch, useSelector } from "react-redux"

import { changedTaskService, addTaskService, cancelTaskService, editTaskService, edittingTaskService } from '../redux/actions/actionCreators'
import { ChangeEvent, FormEvent } from "react";

const FormEditing = () => {

    const dispatch = useDispatch();

    const form = useSelector((state: FormReducer) => state.formReducer);

    const tasks = useSelector((state: TasksReducer) => state.tasksReducer);

    const handleChange = ((e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;

        dispatch(changedTaskService(name, value));
    });

    const handleSubmit = ((e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        if (form.text && form.price) {
            if (!isNaN(form.price)) {

                let check = false;

                tasks.forEach(task => {
                    if (task.text == form.text) {
                        check = true
                    }
                })

                if (check == false) {
                    if (form.isEdit == false) {
                        dispatch(addTaskService(form.text, Number(form.price)));

                    } else {
                        dispatch(editTaskService(form.text, Number(form.price), form.index));
                    }

                    dispatch(cancelTaskService());
                } else {
                    console.error("Такая задача уже сущетсвует!")
                }
            } else {
                console.error("Значение цены не является числом!")
            }
        } else {
            console.error('Не введены здачаи и цена(')
        }
    })

    const oncancel = () => {
        dispatch(edittingTaskService('', '', false, 0));
    }

    return (
        <form className="form-editing" onSubmit={handleSubmit}>
            <input name='text' type="text" className="task-input" onChange={handleChange} value={form.text} />
            <input name='price' type="text" className="tast-price-input" onChange={handleChange} value={form.price} />
            <button type='submit' className="save-task">Save</button>
            {form.isEdit && <button type='button' onClick={oncancel} className="task-edit-cancel">Cancel</button>}
        </form>
    )
}

export default FormEditing