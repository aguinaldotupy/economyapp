import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import store from './store/index'
import Routes from './routes';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }
    render() {
        return (
            <Provider store={store}>
                <Routes />
            </Provider>
        );
    }
}

ReactDOM.render(<App />, document.querySelector("#app"));
