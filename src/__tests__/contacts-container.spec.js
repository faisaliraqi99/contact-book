import React from 'react'
import ContactsContainer from '../container/contacts-container'
import { shallow } from 'enzyme'

describe('Index.js test mounted',() => {
  it('Mount Contacts', () => {
    const wrapped = shallow(<ContactsContainer />);

    expect(wrapped.find('.contact-list').length).toEqual(1);
  });
})