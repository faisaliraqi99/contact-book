import { ADD_CONTACT, DELETE_CONTACT, FETCH_CONTACT } from '../actions/types';

export default function contactReducer(state = [], action) {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload];
        case DELETE_CONTACT:
            return state.filter(contact => contact.id !== action.payload.id);
        case FETCH_CONTACT:
            return action.contact;
        default:
            return state;
    }
}