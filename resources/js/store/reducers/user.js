import initialState from '../initialState';
import { USER_LOAD_DATA, USER_AUTH, USER_UNAUTH, AUTH_ERROR } from '../actions';

export default (state = initialState.user, action) => {
    switch(action.type) {
        case USER_LOAD_DATA:
            return { ...state, ...action.payload.user, authenticate: true };
        case USER_AUTH:
            return { ...state, error: '', authenticate: true };
        case USER_UNAUTH:
            return initialState.user;
        case AUTH_ERROR:
            return { ...state, error: action.payload };
        default:
            return state;
    }
}