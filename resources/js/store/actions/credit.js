import { CREDIT_FETCHED } from './types'
import { api } from '../../services'
import initialState from '../initialState';

export const getListCredit = () => {
    return dispatch => {
        api.get('/credit')
            .then(({ request, data }) => {
                dispatch({ type: CREDIT_FETCHED, payload: { providers: request, data } });
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
        api[method](`/credit/${id}`, values)
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

export function showUpdate(creditReduc) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('creditForm', creditReduc)
    ]
}

export function showDelete(creditReduc) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('creditForm', creditReduc)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getListBC(),
        initialize('creditForm', initialState.initValues)
    ]
}
