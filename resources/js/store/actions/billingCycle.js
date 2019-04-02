import { BILLING_CYCLE_FETCHED } from './types'
import { api } from '../../services'
import { axios } from 'axios';

export const getList = () => {
    return dispatch => {
        api.get('billingCycles')
        .then(({ request, data }) => {
            dispatch({ type: BILLING_CYCLE_FETCHED, payload: { providers: request, data }});
        });
    }
}

export const create = (values) => {
    return dispatch => {
        api.post('billingCycles')
        .then(({ request, data, values}) => {
            dispatch({ type: 'TEMP', payload: {providers: request, data, values }});
        });
    }
}
