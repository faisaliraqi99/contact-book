// TODO
import contactReducer, { initialState } from '../reducers/contactReducer'
import { FETCH_CONTACT, SELECT_CONTACT } from '../actions/types'

describe('Contact reducer', () => {
  it('FETCH_CONTACT', () => {

    const action = {
      type: FETCH_CONTACT
    }

    expect(contactReducer(initialState, action)).toEqual({
      ...initialState,
      contacts: undefined,
      selectedContact: {
        name: 'Select Contact',
        lastname: 'Select Contact',
        number: 'Select Contact',
        email: 'Select Contact',
        address: 'Select Contact'
      },
      isLoading: true
    });
  });
  it('SELECT_CONTACT', () => {

    const action = {
      type: SELECT_CONTACT,
      payload: { check: 123 },
    }

    expect(contactReducer(initialState, action)).toEqual({
      ...initialState,
      contacts: [],
      selectedContact: action.payload,
      isLoading: true
    });
  });
});