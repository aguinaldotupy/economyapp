import { api } from '../../services';
import { userLoadData } from './user';
import { USER_AUTH, USER_UNAUTH, AUTH_ERROR } from './types';

export const loginUser = (email, password) => {
    return dispatch => {
        api.post('user/authenticate', {email, password})
        .then(({ data }) => {
            dispatch({ type: USER_AUTH });
            localStorage.setItem('jwt', data.token);
            dispatch(userLoadData());
        }).catch(() => {
            dispatch(authError("Informações de login estão inválidas!"));
        });
    }
}

export const logoutUser = () => {
    return dispatch => {
        api.post('/user/logout', { token: localStorage.jwt })
        .then(() => {
            localStorage.removeItem('jwt');
            dispatch({ type: USER_UNAUTH });
        });
    }
}

export const authError = error => ({
    type: AUTH_ERROR,
    payload: error
});