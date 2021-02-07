import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

let initialState = {
  isAuthUser: false,
  isAuthAdmin: false
}

function reducer ( state = initialState, action: any ) {
  switch (action.type) {
    case 'SET_AUTH_USER':
      return {...state, isAuthUser: action.isAuthUser}
    case 'SET_AUTH_ADMIN' :
      return {...state, isAuthAdmin: action.isAuthAdmin}
    default:
      return initialState
  }
}

const store = createStore(reducer, applyMiddleware(thunk))

export default store