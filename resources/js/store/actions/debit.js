import { DEBIT_FETCHED } from './types'
import { api } from '../../services'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { selectTab, showTabs } from './tab'
import initialState from '../initialState';

export const getListDebit = () => {
    return dispatch => {
        api.get('/debit')
            .then(({ request, data }) => {
                dispatch({ type: DEBIT_FETCHED, payload: { providers: request, data } });
            });
    }
}

export function create(values) {
    return submit(values, 'post')
}

export function update(values) {
    return submit(values, 'put')
}

export function remove(values) {
    return submit(values, 'delete')
}

function submit(values, method) {
    return dispatch => {
        const id = values._id ? values._id : ''
        api[method](`/debit/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(initDebit())
            })
            .catch(errors => {
                toastr.error('Deu erro =(', errors)
            })
        return {
            type: 'TEMP'
        }
    }

}

export function showUpdate(debitReduc) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('FormDebit', debitReduc)
    ]
}

export function showDelete(debitReduc) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('FormDebit', debitReduc)
    ]
}

export function initDebit() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getListDebit(),
        initialize('FormDebit', initialState.initValures2)
    ]
}
