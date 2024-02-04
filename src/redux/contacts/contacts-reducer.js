import { ADD_NAME, DELETE_NAME } from './contacts-constants';

const initialState = [];

const contactsReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_NAME:
      return [...state, payload];
    case DELETE_NAME:
      return state.filter(contact => contact.id !== payload);
    default:
      return state;
  }
};

export default contactsReducer;
