import { combineReducers } from "redux"

const initialState = {
name: "E-brairie",
init: false,
loading: false,
fruity: false,
counter: 0,
}

const initialStateReducer = (state = initialState, action) => {
switch (action.type) {
case 'APP_READY':
    return { ...state, loading: false, init: true, fruity: false }
    case 'APP_INIT': 
    return { ...state, loading: true, fruity: false}
    case 'APP_FRUITY':
        return { ...state, loading: false, init: true, fruity: true}
    // case 'ADD_FRUIT': return {...state, counter: counter + 1 }
    case 'APP_RESET': 
    return state
    default: 
    return state

}
}

// export reducer
const rootReducer = combineReducers({app: initialStateReducer})

export default rootReducer