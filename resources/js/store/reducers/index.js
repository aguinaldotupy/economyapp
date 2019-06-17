import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import DashboardReducer from './dashboard'
import TabReducer from './tab'
import BillingCycleReducer from './billingCycle'
import CreditReducer from './credit'
import DebitReducer from './debit'
import UserReducer from './user'

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycleReduc: BillingCycleReducer,
    form: formReducer,
    toastr: toastrReducer,
    creditReduc: CreditReducer,
    debitReduc: DebitReducer,
    userReduc: UserReducer
})

export default rootReducer
