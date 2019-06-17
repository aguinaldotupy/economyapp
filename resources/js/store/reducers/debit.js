import initialState from '../initialState';
import { DEBIT_FETCHED } from '../actions';

export default (state = initialState.debitState, action ) => {
    switch (action.type) {
        case DEBIT_FETCHED:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}
