import React from 'react'
import ContactsContainer from '../container/contacts-container'
import { mount } from 'enzyme'
import { createStore } from 'redux'
import rootReducer from '../reducers'

const store = createStore(rootReducer);

describe('Contacts-container is render',() => {
  it('Mount contact-list', () => {
    const wrapped = mount(<ContactsContainer store={store} />);
    console.log(wrapped.debug());
    expect(wrapped.find('.contact-list').length).toEqual(1);
  });
})