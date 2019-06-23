import React from 'react'
import { mount } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import { mapStateToProps, mapDispatchToProps } from '../container/edit-contact-container'
import EditContactContainer, { EditContactContainer as OriginalEditContactContainer } from '../container/edit-contact-container'
import { original } from 'immer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const state = {
  selectedContact: {
    id: 1,
    name: 'Select Contact',
    lastname: 'Select Contact',
    number: 'Select Contact',
    email: 'Select Contact',
    address: 'Select Contact'
  }
}

describe('EditContactContainer test group', () => {
  const props = {
    state,
    store,
    history: [],
    editContacts: jest.fn(() => Promise.resolve())
  }

  const originalWrapper = mount(<OriginalEditContactContainer {...props} />)

  it('EditContact render everythink correct', () => {
    expect(originalWrapper.find('.data-list')).toHaveLength(1);
  });

  it('Edit-contact-container mapStateToProps work correct', () => {
    expect(mapStateToProps(state).selectedContact.id).toEqual(1);
  });

  it('Edit-contact-container mapDispatchToProps work correct', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).editContacts();
    expect(dispatch.mock.calls.length).toEqual(1);
  });

  it('Edit-contact-container saveContact catch work correct', () => {
    const errorProps = {
      state,
      store,
      history: [],
      editContacts: jest.fn(() => Promise.reject())
    }
    console.log = () => { };
    const errorWrapper = mount(<OriginalEditContactContainer {...errorProps} />)
    errorWrapper.find('.contact-btn').simulate('click');
  });

  it('EditContact save-btn is call function dispatch', () => {
    originalWrapper.find('.contact-btn').simulate('click');
    expect(props.editContacts.mock.calls[0][0]).toEqual("1");
  });

  it('Input and editState(handler) for name work correct', () => {
    const inputDataType = originalWrapper.find('#name');
    const inputDataTypeConfig = { target: { value: 'NameCorrect', id: 'name' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').name).toEqual(inputDataTypeConfig.target.value);
  });

  it('Input and editState(handler) for lastname work correct', () => {
    const inputDataType = originalWrapper.find('#lastname');
    const inputDataTypeConfig = { target: { value: 'LastnameCorrect', id: 'lastname' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').lastname).toEqual(inputDataTypeConfig.target.value);
  });

  it('Input and editState(handler) for number work correct', () => {
    const inputDataType = originalWrapper.find('#number');
    const inputDataTypeConfig = { target: { value: 'NumberCorrect', id: 'number' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').number).toEqual(inputDataTypeConfig.target.value);
  });

  it('Input and editState(handler) for address work correct', () => {
    const inputDataType = originalWrapper.find('#address');
    const inputDataTypeConfig = { target: { value: 'AddressCorrect', id: 'address' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').address).toEqual(inputDataTypeConfig.target.value);
  });

});