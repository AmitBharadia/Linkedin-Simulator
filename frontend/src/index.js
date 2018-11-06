
//import App from './App';

import React from 'react';
import ReactDOM from 'react-dom';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Index from './components/Index';

import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import createBrowserHistory from 'history/createBrowserHistory' 
import store from './store/index';

//var history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router>
         <div>
         <Route path="/signin" component={Index} />
         <Route path="/signup" component={Signup} />     
         </div>
        
     </Router>
     </Provider>,
     document.getElementById('root'));