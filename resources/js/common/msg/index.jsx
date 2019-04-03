import React, { Component } from 'react'
import { Provider } from 'react-redux'
import ReduxToastr from 'react-redux-toastr'
import store from '../../store'

export default class Messages extends Component {
    render() {
        return (
            <Provider store={store}>
                <div>
                    <ReduxToastr
                        timeOut={5000}
                        newestOnTop={false}
                        preventDuplicates={true}
                        position="top-right"
                        transitionIn="fadeIn"
                        transitionOut="fadeOut"
                        progressBar
                        closeOnToastrClick />
                </div>
            </Provider>
        );
    }
}


