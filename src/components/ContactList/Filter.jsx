import { useSelector, useDispatch } from 'react-redux';

import { getFilter } from '../../redux/selectors';
import { setFilter } from '../../redux/actions';

import css from './contactlist.module.css';

const Filter = () => {
  const value = useSelector(getFilter);

  const dispatch = useDispatch();
  const onChange = event => {
    const action = setFilter(event.currentTarget.value);
    return dispatch(action);
  };
  return (
    <label className={css.filter}>
      Find contacts by name
      <input
        className={css.field}
        type="text"
        name="filter"
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

export default Filter;