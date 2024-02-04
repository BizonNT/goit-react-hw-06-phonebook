import { ADD_NAME, DELETE_NAME, SET_FILTER } from './constants';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, { type, payload }) => {
  const { contacts } = state;
  switch (type) {
    case ADD_NAME:
      return {
        ...state,
        contacts: [...contacts, payload],
      };
    case DELETE_NAME:
      return {
        ...state,
        contacts: contacts.filter(contact => contact.id !== payload),
      };
    case SET_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};

export default reducer;
