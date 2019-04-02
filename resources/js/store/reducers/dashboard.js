import initialState from '../initialState';
import { BILLING_SUMMARY_FETCHED } from '../actions'

export default function(state = initialState.dashboard, action) {
    switch (action.type) {
        case BILLING_SUMMARY_FETCHED:
            return { ...state, summary: action.payload.data }
        default:
            return state
    }
}
