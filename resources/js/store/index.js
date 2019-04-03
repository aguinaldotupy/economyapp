import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';

import promise from 'redux-promise';
import multi from 'redux-multi';
import thunk from 'redux-thunk';


const createStoreWithMiddleware = applyMiddleware(multi, thunk, promise)(createStore);

export default createStoreWithMiddleware(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export * from './actions';
