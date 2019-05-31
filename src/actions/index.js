import { ADD_CONTACT, SELECT_CONTACT, FETCH_CONTACT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/contacts';

export const createContact = (jsonData) => {
    return (dispatch) => {
        return axios.post(`${apiUrl}`, jsonData)
            .then(response => {
                dispatch(fetchAllContacts(),createContactSuccess(response.data));
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
            email: data.email,
            address: data.address
        }
    }
};

export const addSelectedContact = (data) => {
    return {
        type: SELECT_CONTACT,
        payload: data
    }
}

export const deleteContact = (id) => {
    return (dispatch) => {
        return axios.delete(`${apiUrl}/${id}`)
            .then(response => {
                dispatch(fetchAllContacts());
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
                dispatch(fetchContact(response.data));
            })
            .catch(error => {
                throw (error);
            });
    };
};