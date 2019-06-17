import { api } from '../../services';
import { USER_LOAD_DATA } from './types';

export const userLoadData = () => {
    return dispatch => {
        return api.get('/user')
        .then(({ data }) => {
            dispatch({ type: USER_LOAD_DATA, payload: data });
        });
    }
}