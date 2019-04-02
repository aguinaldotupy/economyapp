import initialState from '../initialState';
import { TAB_SELECTED, TAB_SHOWED } from '../actions'

export default (state = initialState.tab, action) => {
    switch (action.type) {
        case TAB_SELECTED:
            return { ...state, selected: action.payload }

        case TAB_SHOWED:
            return { ...state, visible: action.payload }

        default:
            return state
    }
}
