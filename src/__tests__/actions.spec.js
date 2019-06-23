import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'

import { fetchAllContacts, createContactSuccess, createContact, addSelectedContact, fetchContact } from '../actions/index'
import { ADD_CONTACT, FETCH_CONTACT, SELECT_CONTACT } from '../actions/types'

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)

describe('ASYNC ACTIONS', () => {

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall()
  });

  const mockData = [{ name: 'Name1' }, { name: 'Name2' }];

  it('fetchAllContact SUCCESS', () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: mockData
      });
    });

    const expectedActons = [{ type: FETCH_CONTACT, contact: mockData}];
    const store = mockStore({ contact: mockData});

    return store.dispatch(fetchAllContacts()).then(() => {
      expect(store.getActions()).toEqual(expectedActons);
    });
  });

});

describe('SYNC ACTIONS', () => {

  const data = {
    "id": 0,
    "name": "Default",
    "lastname": "Default",
    "number": "0550112233",
    "countrycode": "+996",
    "email": "undefined@gmail.com",
    "address": "Undefined"
  }

  it('addSelectedContact', () => {
    expect(addSelectedContact(data)).toEqual({
      type: SELECT_CONTACT,
      payload: data
    });
  });

  it('fetchContact', () => {
    expect(fetchContact(data)).toEqual({
      type: FETCH_CONTACT,
      contact: data
    });
  });

});