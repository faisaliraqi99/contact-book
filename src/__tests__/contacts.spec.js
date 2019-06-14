import React from 'react'
import Contacts from '../component/Contacts'
import { shallow } from 'enzyme'

const initialData = [
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

describe('Contacts test', () => {

  const ContactsShallow = shallow(<Contacts contacts={initialData} />);

  it('Contacts is render from state snapshot', () => {
    expect(ContactsShallow).toMatchSnapshot();
  });

  it('Contacts correct render sum of contacts', () => {
    expect(ContactsShallow.find('li')).toHaveLength(initialData.length);
  });

  it('Contacts correct render data of props', () => {
    expect(ContactsShallow
      .find('li').first().find('h3').text())
      .toEqual(`${initialData[0].name} ${initialData[0].lastname}`);
  });

});