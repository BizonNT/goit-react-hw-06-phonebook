import { createAction } from '@reduxjs/toolkit';

export const addName = createAction('contacts/addContact', data => {
  return {
    payload: {
      ...data,
    },
  };
});

export const deleteName = createAction('contacts/deleteContact');
