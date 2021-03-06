import {RECEIVE_ERRORS, RECEIVE_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge';

const _nullUser = {currentUser: null, errors: []};


const SessionReducer = (oldState = _nullUser, action) => {

  switch(action.type){
    case RECEIVE_CURRENT_USER:
    const currentUser = action.currentUser;
      return merge({}, _nullUser, {currentUser});
    case RECEIVE_ERRORS:
    const errors = action.errors;
      return merge({}, _nullUser, {errors});
    default:
      return oldState;
  }
};

export default SessionReducer;
