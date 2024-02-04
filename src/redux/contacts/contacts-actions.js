import { ADD_NAME, DELETE_NAME } from './contacts-constants';

export const addName = payload => {
  return {
    type: ADD_NAME,
    payload: {
      ...payload,
    },
  };
};

export const deleteName = payload => {
  return {
    type: DELETE_NAME,
    payload,
  };
};
