import { CREDIT_FETCHED } from './types'
import { api } from '../../services'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { selectTab, showTabs } from './tab'
import initialState from '../initialState';

export const getListCredit = () => {
    return dispatch => {
        api.get('/credit')
            .then(({ request, data }) => {
                dispatch({ type: CREDIT_FETCHED, payload: { providers: request, data } });
            });
    }
}

export function createc(values) {
    return submit(values, 'post')
}

export function updatec(values) {
    return submit(values, 'put')
}

export function removec(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        api[method](`/credit/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(initCredit())
            })
            .catch(errors => {
                toastr.error('Deu erro =(', errors)
            })
        return {
            type: 'TEMP'
        }
    }

}

export function showUpdatec(creditReduc) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('FormCredit', creditReduc)
    ]
}

export function showDeletec(creditReduc) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('FormCredit', creditReduc)
    ]
}

export function initCredit() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getListCredit(),
        initialize('FormCredit', initialState.initValures2)
    ]
}
