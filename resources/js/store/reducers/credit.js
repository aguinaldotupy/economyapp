import initialState from '../initialState';
import { CREDIT_FETCHED } from '../actions';

export default (state = initialState.creditState, action ) => {
    switch (action.type) {
        case CREDIT_FETCHED:
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}
