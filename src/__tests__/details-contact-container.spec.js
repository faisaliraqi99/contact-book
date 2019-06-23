import React from 'react'
import { mount } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import { mapStateToProps, mapDispatchToProps } from '../container/details-contact-container'
import DetailsContactContainer, { DetailsContactContainer as OriginalDetailsContactContainer } from '../container/Details-contact-container'

const store = createStore(rootReducer, applyMiddleware(thunk));

const state = {
  selectedContact: {
    id: 1,
    name: 'DetailsName',
    lastname: 'DetailsLastName',
    number: 'DetailsNumber',
    email: 'DetailsEmail',
    address: 'DetailsAddress'
  }
}

describe('DetailsContactContainer test group', () => {
  const props = {
    state,
    store,
    history: [],
    deleteContacts: jest.fn(() => Promise.resolve())
  }

  const originalWrapper = mount(<OriginalDetailsContactContainer {...props} />);

  it('Details-contact-container mapStateToProps work is correct', () => {
      expect(mapStateToProps(state).selectedContact.id).toEqual(1);
  });

  it('Details-contact-container mapDispatchToProps is call dispatch', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).deleteContacts();
    expect(dispatch.mock.calls.length).toEqual(1);
  });

  it('editContact() make a redirect', () => {
    expect(originalWrapper.prop('history')).toEqual([]);
    originalWrapper.find('.edit').simulate('click');
    expect(originalWrapper.prop('history')).toEqual(['/edit']);
  });

  
  it('deleteContact() make a delete', () => {
    window.confirm = jest.fn(() => true);
    expect(originalWrapper.prop('history')).toEqual(['/edit'])
    originalWrapper.find('.delete').simulate('click')
    expect(originalWrapper.prop('history')).toEqual(['/edit', '/'])
  });

  it('deleteContact() error catch placeholder', () => {
    const errorProps = {
      state,
      store,
      history: [],
      deleteContacts: jest.fn(() => Promise.reject('Somerr'))
    }
    window.confirm = jest.fn(() => true);
    window.alert = () => {};
    const errorWrapper = mount(<OriginalDetailsContactContainer {...errorProps} />);
    errorWrapper.find('.delete').simulate('click');
  });

  it('Name in DetailsContact render right',() => {
    expect(originalWrapper.find('#name').text())
      .toEqual(originalWrapper.prop('state').selectedContact.name);
  });

  it('Lastname in DetailsContact render right', () => {
    expect(originalWrapper.find('#lastname').text())
      .toEqual(originalWrapper.prop('state').selectedContact.lastname);
  });

  it('Number in DetailsContact render right', () => {
    expect(originalWrapper.find('#number').text())
      .toEqual(originalWrapper.prop('state').selectedContact.number);
  });

  it('Address in DetailsContact render right', () => {
    expect(originalWrapper.find('#address').text())
      .toEqual(originalWrapper.prop('state').selectedContact.address);
  })

});