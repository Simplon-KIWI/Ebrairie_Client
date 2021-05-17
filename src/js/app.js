import React, {useEffect} from 'react'

import {useDispatch, useSelector} from 'react-redux'

const App= () => {
const dispatch = useDispatch();
const appState = useSelector(state => state.app)

useEffect(() => {
    dispatch({ type: "APP_INIT"})

    setTimeout(() => {
        dispatch({type: "APP_READY"})
    }, 2000)
}, [])

console.log('APP global state:', appState)


if (appState.loading) 
return  <p>loading, attendez patiemment, merci</p>

return <h1>Yo les kiwiiiiiiis</h1>



}
export default App