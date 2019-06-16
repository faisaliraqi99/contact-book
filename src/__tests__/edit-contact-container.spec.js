import React from 'react'
import { mount } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import EditContactContainer, { EditContactContainer as OriginalEditContactContainer } from '../container/edit-contact-container'

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

  const originalWrapper = mount(<OriginalEditContactContainer state={state} store={store} />)

  it('EditContact render everythink correct', () => {
    expect(originalWrapper.find('.data-list')).toHaveLength(1);
  });

  it('EditContact save-btn is call function dispatch', () => {
    expect(originalWrapper.state('_isCalled')).toEqual(false);
    originalWrapper.find('button').simulate('click');
    expect(originalWrapper.state('_isCalled')).toEqual(true);
    originalWrapper.setState({ _isCalled: false });
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