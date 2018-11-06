import {combineReducers} from 'redux'
import signin from './signin';
import signup from './signup';
import home from './home';
import search from './search';
import profile from './profile';
import myProperties from './myProperties'
import listProperty from './listProperty'

export default combineReducers({
   search,
    signup,
    signin,
    home,
    profile,
    listProperty ,
    myProperties   

});