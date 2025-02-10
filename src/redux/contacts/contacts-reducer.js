import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactSuccess,
  addContactRequest,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  searchByFilter,
} from './contacts-actions';

const contacts = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => {
    const duplicateName = state.find(contact => contact.name === payload.name);

    if (duplicateName) {
      alert(`${payload.name} is already in contacts.`);
      return state;
    }

    if (payload.name === '') {
      alert(`Please fill out the form it is empty.`);
      return state;
    }

    if (payload.number === '') {
      alert(`Please fill out the form with your phone number, it is empty.`);
      return state;
    }

    return [payload, ...state];
  },
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => contact._id !== payload),
});

const loading = createReducer(false, {
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
});

const filter = createReducer('', {
  [searchByFilter]: (_, { payload }) => payload,
});

const error = createReducer(null, {
  [fetchContactError]: (_, { payload }) => payload,
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts,
  filter,
  loading,
  error,
});
