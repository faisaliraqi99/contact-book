import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/contacts';

export const createContact = ({ name, lastname, number, countrycode, email }) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, { name, lastname, number, countrycode, email })
            .then(response => {
                dispatch(createContactSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const createContactSuccess = (data) => {
    return {
        type: ADD_CONTACT,
        payload: {
            id: data.id,
            name: data.name,
            lastname: data.lastname,
            number: data.number,
            countrycode: data.countrycode,
            email: data.email
        }
    }
};

export const deleteContactSuccess = id => {
    return {
        type: DELETE_CONTACT,
        payload: {
            id
        }
    }
}

export const deleteContact = () => {
    return (dispatch) => {
        return axios.get(`${apiUrl}`)
            .then(response => {
                dispatch(deleteContactSuccess(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};

export const fetchContact = (contact) => {
    return {
        type: FETCH_CONTACT,
        contact
    }
};

export const fetchAllContacts = () => {
    return (dispatch) => {
        return axios.get(apiUrl)
            .then(response => {
                dispatch(fetchContact(response.data))
            })
            .catch(error => {
                throw (error);
            });
    };
};