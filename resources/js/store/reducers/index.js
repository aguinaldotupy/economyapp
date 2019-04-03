import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from '../reducers/dashboard';
import TabReducer from '../reducers/tab';
import BillingCycleReducer from '../reducers/billingCycle';
import CreditReducer from '../reducers/credit'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    creditReduc: CreditReducer
})

export default rootReducer
