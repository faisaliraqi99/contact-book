import React from 'react'
import { shallow, mount } from 'enzyme'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../reducers'
import { BrowserRouter as Router } from 'react-router-dom'

import AddContactContainer, { AddContactContainer as OriginalAddContactContainer } from '../container/add-contact-container'

const store = createStore(rootReducer, applyMiddleware(thunk));

describe('AddContactContainer test group', () => {

  const originalWrapper = mount(<OriginalAddContactContainer store={store} />)

  it('AddContact render everythink correct', () => {
    expect(originalWrapper.find('.add-contact')).toHaveLength(1);
  });

  it('AddContact btn is call function dispatch', () => {
    expect(originalWrapper.state('_isCalled')).toEqual(false);
    originalWrapper.find('button').simulate('click');
    expect(originalWrapper.state('_isCalled')).toEqual(true);
    originalWrapper.setState({ _isCalled: false});
  });

  it('Sometest', () => {
    console.log(originalWrapper.state());
  })

});