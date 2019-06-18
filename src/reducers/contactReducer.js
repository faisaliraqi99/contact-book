import { SELECT_CONTACT, FETCH_CONTACT } from '../actions/types';

export const initialState = {
  contacts: [],
  selectedContact: {
    name: 'Select Contact',
    lastname: 'Select Contact',
    number: 'Select Contact',
    email: 'Select Contact',
    address: 'Select Contact'
  },
  isLoading: null
};

export default function contactReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_CONTACT:
      return {
        ...state,
        contacts: action.contact,
        isLoading: true
      }
    case SELECT_CONTACT:
      return {
        ...state,
        selectedContact: action.payload,
        isLoading: true
      };
    default:
      return state;
  }
}