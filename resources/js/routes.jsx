import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Welcome from './components/welcome';
import Dashboard from './components/dashboard';
import billingCycle from './components/billingCycle';
import Credit from './components/credit/credit';
import Debit from './components/debit/debit';

const Routes = () => (
    <Router>
        <div>
            <Route exact path={'/'} component={Welcome} />
            <Route exact path={'/dashboard'} component={Dashboard} />
            <Route exact path={'/billingCycle'} component={billingCycle} />
            <Route exact path={'/credit'} component={Credit} />
            <Route exact path={'/debit'} component={Debit} />
        </div>
    </Router>
)

export default connect(
    state => ({

    })
)(Routes);
