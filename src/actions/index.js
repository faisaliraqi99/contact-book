import { SELECT_CONTACT, FETCH_CONTACT } from './types';
import axios from 'axios';

const apiUrl = 'http://localhost:3000/contacts';

export const addSelectedContact = (data) => {
  return {
    type: SELECT_CONTACT,
    payload: data
  }
}


export const fetchContact = (contact) => {
  return {
    type: FETCH_CONTACT,
    contact
  }
};

export const createContact = (jsonData) => {
  return (dispatch) => {
    return axios.post(`${apiUrl}`, jsonData)
      .then(() => dispatch(fetchAllContacts()))
      .catch(error => {
        throw (error);
      });
  };
};

export const actionEditContact = (id, jsonData) => {
  return (dispatch) => {
    return axios.put(`${apiUrl}/${id}`, jsonData)
      .then(() => dispatch(fetchAllContacts()))
      .catch(error => {
        throw (error);
      });
  }
}

export const deleteContact = (id) => {
  return (dispatch) => {
    return axios.delete(`${apiUrl}/${id}`)
      .then(() => dispatch(fetchAllContacts()))
      .catch(error => {
        throw (error);
      });
  };
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