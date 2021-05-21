import { combineReducers } from "redux"
import api from '../../utils/api';
const initialState = {
    resources : []
}

const initialStateReducer = async (state = initialState, action) => {
switch (action.type) {
    // case 'SET_RESOURCES': {
        
    //     console.log("ALL RESOURCE STORE", allResources.data)
    //     return { ...state, resources : allResources.data }
    // }

    // case 'SET_'
    default: 
    return state
}
}

const rootReducer = combineReducers({app: initialStateReducer})

export default rootReducer