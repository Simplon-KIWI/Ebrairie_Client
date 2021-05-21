import {combineReducers} from 'redux';
import mainReducer from './main'
import authReducer from './auth'
import resourceReducer from './resources';
const rootReducer = combineReducers({
    app : mainReducer,
    auth : authReducer,
    resource : resourceReducer
})

export default rootReducer;