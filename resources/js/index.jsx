import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from '../views/Welcome';
import Dashboard from '../views/Dashboard/component';
import billingCycle from '../views/billingCycle/component';

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path={'/'} component={Welcome} />
                    <Route exact path={'/dashboard'} component={Dashboard} />
                    <Route exact path={'/billingCycle'} component={billingCycle} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
