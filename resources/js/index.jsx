import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Welcome from '../views/Welcome';
import Dashboard from '../views/Dashboard/component';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

class App extends Component {

    render() {
        return (
            <Router>
                <div>
                    <Route exact path={'/'} component={Welcome} />
                    <Route exact path={'/dashboard'} component={Dashboard} />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
