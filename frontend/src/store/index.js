import {createStore,applyMiddleware} from 'redux';
import reducers from '../reducers/reducers'
import logger from 'redux-logger'
import thunk from 'redux-thunk'


const middlewares = applyMiddleware(logger,thunk);
const store = createStore(reducers,middlewares);


export default store