import React from 'react'
import { mount, shallow } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'

import { mapDispatchToProps } from '../container/add-contact-container'
import AddContactContainer, { AddContactContainer as OriginalAddContactContainer } from '../container/add-contact-container'

const store = createStore(rootReducer, applyMiddleware(thunk));

const initialData = {
  contacts: [
    {
      id: 1,
      name: 'Somename',
      lastname: 'Lastname',
      number: '550121212',
      countrycode: '+996',
      email: 'undefined@mail.ru',
      address: 'Someaddr'
    },
    {
      id: 2,
      name: 'Somename',
      lastname: 'Lastname',
      number: '550121212',
      countrycode: '+996',
      email: 'undefined@mail.ru',
      address: 'Someaddr'
    }
  ]
}

describe('AddContactContainer test group', () => {
  const props = {
    store,
    createContacts: jest.fn(() => Promise.resolve())
  }

  const originalWrapper = mount(<OriginalAddContactContainer {...props} state={initialData} />)

  it('AddContact render everythink correct', () => {
    expect(originalWrapper.exists('.add-contact')).toEqual(true);
  });

  it('AddContactContainer snapshot test', () => {
    const ContactsContainerShallow = mount(<AddContactContainer store={store} />);
    expect(ContactsContainerShallow).toMatchSnapshot();
  });

  it('AddContact dispatch is called', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).createContacts();
    expect(dispatch.mock.calls.length).toEqual(1);
  });

  it('AddContact btn is call function dispatch', () => {
    window.alert = () => {};
    originalWrapper.find('button').simulate('click');
    expect(props.createContacts.mock.calls[0][0].name).toEqual('Default');
  });

  it('Add-contact-container catch placeholder', () => {
    const errProps = {
      store,
      createContacts: jest.fn(() => Promise.reject())
    }
    console.log = () => {};
    const errorWrapper = mount(<OriginalAddContactContainer {...errProps} state={initialData} />);
    errorWrapper.find('button').simulate('click');
    expect(props.createContacts.mock.calls.length).toEqual(1);
  });

  it('Add-contact-container componentDidUpdate past a right id', () => {
    const initialContacts = {
      contacts: {}
    }
    const propsWrapper = mount(<OriginalAddContactContainer {...props} state={initialContacts} />);
    propsWrapper.setProps({state: initialData})
    const index = initialData.contacts.length -1;
    expect(propsWrapper.state().data.id).toEqual(initialData.contacts[index].id + 1)
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