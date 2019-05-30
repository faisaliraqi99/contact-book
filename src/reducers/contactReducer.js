import { ADD_CONTACT, SELECT_CONTACT, DELETE_CONTACT, FETCH_CONTACT } from '../actions/types';

const initialState = {
    contacts: [],
    selectedContact: {
        name: 'Jack',
        lastname: 'London'
    },
    isEditingContact: false
};

export default function contactReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CONTACT:
            return [...state, action.payload];
        case DELETE_CONTACT:
            return state.filter(contact => contact.id !== action.payload.id);
        case FETCH_CONTACT:
            return {...state, contacts: action.contact};
        case SELECT_CONTACT:
            return { ...state, selectedContact: action.payload};
        default:
            return state;
    }
}