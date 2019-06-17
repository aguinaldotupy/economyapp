import React, { Component } from 'react'
import ReduxToastr from 'react-redux-toastr'
import { Provider } from 'react-redux'
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
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


