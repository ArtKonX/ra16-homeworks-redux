import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux"
import { searchChangeService } from "../redux/actions/actionCreators";

const SearchForm = () => {

    const dispatch = useDispatch();

    const form = useSelector((state: SearchTasksReducer) => state.searchTasksReducer);

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {

        const { name, value } = event.target;

        dispatch(searchChangeService(name, value));
    };

    return (

        <form className="form-search">
            <input
                className="search-input"
                name="name"
                onChange={onChange}
                required
                placeholder="Найти..."
                type="text"
                value={form.name}
            />
        </form>
    )
}

export default SearchForm