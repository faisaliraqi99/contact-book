import React from 'react'
import { mount, shallow } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import AddContactContainer, { AddContactContainer as OriginalAddContactContainer } from '../container/add-contact-container'

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('AddContactContainer test group', () => {

  const originalWrapper = mount(<OriginalAddContactContainer store={store} />)

  it('AddContact render everythink correct', () => {
    expect(originalWrapper.find('.add-contact')).toHaveLength(1);
  });

  it('AddContactContainer snapshot test', () => {
    const ContactsContainerShallow = mount(<AddContactContainer store={store} />);
    expect(ContactsContainerShallow).toMatchSnapshot();
  });

  it('AddContact btn is call function dispatch', () => {
    expect(originalWrapper.state('_isCalled')).toEqual(false);
    originalWrapper.find('button').simulate('click');
    expect(originalWrapper.state('_isCalled')).toEqual(true);
    originalWrapper.setState({ _isCalled: false});
  });

  it('Input and editContact(handler) for name work correct', () => {
    const inputDataType = originalWrapper.find('#name');
    const inputDataTypeConfig = { target: { value: 'NameCorrect', id: 'name' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').name).toEqual(inputDataTypeConfig.target.value);
  });

  it('Input and editContact(handler) for lastname work correct', () => {
    const inputDataType = originalWrapper.find('#lastname');
    const inputDataTypeConfig = { target: { value: 'LastnameCorrect', id: 'lastname' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').lastname).toEqual(inputDataTypeConfig.target.value);
  });

  it('Input and editContact(handler) for number work correct', () => {
    const inputDataType = originalWrapper.find('#number');
    const inputDataTypeConfig = { target: { value: 'NumberCorrect', id: 'number' } };
    inputDataType.simulate('input', inputDataTypeConfig);
    expect(originalWrapper.state('data').number).toEqual(inputDataTypeConfig.target.value);
  });

  it('Input and editContact(handler) for email work correct', () => {
    const inputDataType = originalWrapper.find('#email');
    const inputDataTypeConfig = { target: { value: 'EmailCorrect', id: 'email' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').email).toEqual(inputDataTypeConfig.target.value);
  });

  it('Input and editContact(handler) for address work correct', () => {
    const inputDataType = originalWrapper.find('#address');
    const inputDataTypeConfig = { target: { value: 'AddressCorrect', id: 'address' } };

    inputDataType.simulate('input', inputDataTypeConfig);

    expect(originalWrapper.state('data').address).toEqual(inputDataTypeConfig.target.value);
  });

});