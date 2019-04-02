import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import DashboardReducer from '../reducers/dashboard';
import TabReducer from '../reducers/tab';
import BillingCycleReducer from '../reducers/billingCycle';

const rootReducer = combineReducers({
    dashboard: DashboardReducer,
    tab: TabReducer,
    billingCycle: BillingCycleReducer,
    form: formReducer
})

export default rootReducer
