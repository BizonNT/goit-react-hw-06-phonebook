import { ADD_NAME, DELETE_NAME, SET_FILTER } from './constants';

export const addName = payload => {
  return {
    type: ADD_NAME,
    payload: {
      ...payload
    }
  };
};

export const deleteName = payload => {
  return {
    type: DELETE_NAME,
    payload,
  };
};

export const setFilter = payload => {
  return {
    type: SET_FILTER,
    payload,
  };
};

