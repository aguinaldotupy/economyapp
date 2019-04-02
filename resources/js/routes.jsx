import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { connect } from 'react-redux';

import Welcome from './components/Welcome';
import Dashboard from './components/Dashboard';
import billingCycle from './components/billingCycle';

const Routes = () => (
    <Router>
        <div>
            <Route exact path={'/'} component={Welcome} />
            <Route exact path={'/dashboard'} component={Dashboard} />
            <Route exact path={'/billingCycle'} component={billingCycle} />
        </div>
    </Router>
)

export default connect(
    state => ({

    })
)(Routes);
