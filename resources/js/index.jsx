import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';

import './common/template/dependecies/dependencies'

import store from './store';
import Routes from './routes';
import Messages from '../js/common/msg'


class App extends Component {
    // constructor(props) {
    //     super(props);

    //     this.state = {}
    // }
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Routes />
                    <Messages />
                </Provider>
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
