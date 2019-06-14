import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore } from 'redux'
import rootReducer from '../reducers'
import { BrowserRouter as Router } from 'react-router-dom'

import ContactsContainer, { ContactsContainer as OriginalContactsContainer } from '../container/contacts-container'

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

  const wrapper = mount(
    <Router>
      <OriginalContactsContainer store={store} state={initialData} />
    </Router>);

  beforeEach(() => {
    wrapper.find('li').first().simulate('click');
  });

  it('Contacts-container selectItem work correct', () => {
    const ReduxState = wrapper.find('ContactsContainer').props().store.getState();
    expect(ReduxState.state.selectedContact).toEqual(initialData.contacts[0]);
  });

});