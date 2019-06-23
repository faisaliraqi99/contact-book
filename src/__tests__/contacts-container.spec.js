import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { BrowserRouter as Router } from 'react-router-dom'

import { mapStateToProps, mapDispatchToProps } from '../container/contacts-container'
import { addSelectedContact } from '../actions/index';
import ContactsContainer, { ContactsContainer as OriginalContactsContainer } from '../container/contacts-container'
import { initialState } from '../reducers/contactReducer';

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

const store = createStore(rootReducer);

describe('Contacts-container render',() => {
  
  it('ContactsContainer render .contact-list', () => {
    const ContactsContainerMount = mount(<ContactsContainer store={store} />);
    expect(ContactsContainerMount.find('.contact-list')).toHaveLength(1);
  });
  
  it('ContactsContainer snapshot test', () => {
    const ContactsContainerShallow = shallow(<ContactsContainer store={store} /> );
    expect(ContactsContainerShallow).toMatchSnapshot();
  });

});


describe('Contacts-container selectItem test', () => {
  const props = {
    store,
    addSelectedContacts: jest.fn()
  }

  const wrapper = mount(
    <Router>
      <OriginalContactsContainer {...props} state={initialData} />
    </Router>);

  it('Contacts-container selectItem work correct', () => {
    wrapper.find('li').first().simulate('click');
    expect(props.addSelectedContacts.mock.calls[0][0]).toEqual(initialData.contacts[0])
  });

  it('Contacts-container mapStateToProps work correct', () => {
    expect(mapStateToProps(initialData).contacts).toHaveLength(2);
  });
  
  it('Contacts-container mapDispatchToProps work correct', () => {
    const dispatch = jest.fn();

    mapDispatchToProps(dispatch).addSelectedContacts();
    expect(dispatch.mock.calls[0][0]).toEqual({type: 'SELECT_CONTACT'});
  });

});