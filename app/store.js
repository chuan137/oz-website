import { createStore, combineReducers, applyMiddleware } from 'redux';
import { modelReducer, formReducer } from 'react-redux-form';
import thunk from 'redux-thunk';

const initialUserState = {
  firstName: 'chuan',
  lastName: 'miao'
};

const store = applyMiddleware(thunk)(createStore)(combineReducers({
// const store = createStore(combineReducers({
  user: modelReducer('user', initialUserState),
  userForm: formReducer('user', initialUserState)
}));

export default store;
