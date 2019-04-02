import initialState from '../initialState';
import { BILLING_CYCLE_FETCHED } from '../actions';

export default (state = initialState.billingCycle, action ) => {
    switch (action.type) {
        case BILLING_CYCLE_FETCHED:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}
