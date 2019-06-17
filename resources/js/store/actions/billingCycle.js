import { BILLING_CYCLE_FETCHED } from './types'
import { api } from '../../services'
import { toastr } from 'react-redux-toastr'
import { initialize } from 'redux-form'
import { selectTab, showTabs } from './tab'
import initialState from '../initialState';

export const getListBC = () => {
    return dispatch => {
        api.get('/billingCycles')
            .then(({ request, data }) => {
                dispatch({ type: BILLING_CYCLE_FETCHED, payload: { providers: request, data } });
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
        const id = values.id ? values.id : ''
        api[method](`/billingCycles/${id}`, values)
            .then(resp => {
                toastr.success('Sucesso', 'Operação realizada com sucesso.')
                dispatch(init())
            })
            .catch(errors => {
                toastr.error('Deu erro =(', errors)
            })
        return {
            type: 'TEMP'
        }
    }

}

export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getListBC(),
        initialize('billingCycleForm', initialState.initValues)
    ]
}
