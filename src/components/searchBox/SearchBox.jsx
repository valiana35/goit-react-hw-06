import { useId } from "react";
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from "react-redux";
import { searchFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
    const dispatch = useDispatch();
    const filter = useSelector((state) => state.filters.name);

    const handleFilterSearch = (evt) => dispatch(searchFilter(evt.target.value))

    const searchId = useId();
    return (
        <div className={css.searchBox}>
            <label className={css.labelSearch} htmlFor={searchId}>Find contacts by name</label>
            <input className={css.input} type="text" value={filter} id={searchId} onClick={handleFilterSearch}  />
        </div>
    );
}

export default SearchBox;