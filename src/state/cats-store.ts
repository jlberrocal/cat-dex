import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {catsReducer} from './reducers';
import Persistence from './storage-middleware';

export const CatsStore = createStore(catsReducer, composeWithDevTools(
    applyMiddleware(Persistence),
    // other store enhancers if any
));
