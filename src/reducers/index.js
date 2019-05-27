import { combineReducers } from 'redux';
import contact from './contactReducer';

export default combineReducers({
    contacts: contact
});