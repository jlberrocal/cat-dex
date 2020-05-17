import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {catsReducer} from './reducers';

export const CatsStore = createStore(catsReducer, composeWithDevTools(
    // applyMiddleware(...middleware),
    // other store enhancers if any
));
