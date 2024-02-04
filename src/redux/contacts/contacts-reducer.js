import { createReducer } from '@reduxjs/toolkit';

import { addName, deleteName } from './contacts-actions';

const initialState = [];

const contactsReducer = createReducer(initialState, builder => {
  builder
    .addCase(addName, (state, { payload }) => [...state, payload])
    .addCase(deleteName, (state, { payload }) =>
      state.filter(contact => contact.id !== payload)
    );
});

export default contactsReducer;
