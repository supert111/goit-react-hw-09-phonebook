// import axios from 'axios';
// import {
//     fetchContactRequest,
//     fetchContactSuccess,
//     fetchContactError,
//     addContactSuccess,
//     addContactRequest,
//     addContactError,
//     deleteContactRequest,
//     deleteContactSuccess,
//     deleteContactError,
// } from './contacts-actions';

// axios.defaults.baseURL = 'http://localhost:4040';

// export const fetchContacts = () => async dispatch => {
//     dispatch(fetchContactRequest());

//     try {
//         const { data } = await axios.get('/contacts');
//         console.log('fetchContacts', data)
//         dispatch(fetchContactSuccess(data));
//     } catch (error) {
//         dispatch(fetchContactError(error));
//     }
// };

// export const addContact = ({name, number}) => async dispatch => {
//     const contact = {name, number};
    
//     dispatch(addContactRequest());
//     try {
//         const { data } = await axios.post('/contacts', contact);
//         console.log('add', data)
//         dispatch(addContactSuccess(data));
//     } catch (error) {
//         dispatch(addContactError(error));
//     }
// };

// export const deleteContact = contactId => async dispatch => {
//     dispatch(deleteContactRequest());

//     try {
//         const { data } = await axios.delete(`/contacts/${contactId}`);
//         console.log('delete', data)
//         dispatch(deleteContactSuccess(data))
//     } catch (error) {
//         dispatch(deleteContactError(error))
//     }
// };



/////////////////////////////////////////////////////////////////////////
import axios from 'axios';
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
} from './contacts-actions';

//axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContacts = () => dispatch => {
    dispatch(fetchContactRequest());

    axios
        .get('/contacts')
        .then(({data}) => dispatch(fetchContactSuccess(data)))
        .catch(error => dispatch(fetchContactError(error.message)));
};

export const addContact = ({name, number}) => dispatch => {
    const contact = {name, number};

    dispatch(addContactRequest());

    axios
        .post('/contacts', contact)
        .then(({data}) => dispatch(addContactSuccess(data)))
        .catch(error => dispatch(addContactError(error.message)));
}

export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequest());

    axios
        .delete(`/contacts/${contactId}`)
        .then(() => dispatch(deleteContactSuccess(contactId)))
        .catch(error => dispatch(deleteContactError(error.message)));
};