const combineReducers = (reducers) => {
    let reducerKeys = Object.keys(reducers)
    reducerKeys.filter(key => {
        (typeof reducers[key] ) === "function"
    })
    
    return (state={},action) => {
        let updatedState = {}
        let isUpdated = false
        reducerKeys.forEach(key => {
           updatedState[key] = reducers[key](state[key],action)
           isUpdated = isUpdated || updatedState[key] !== state[key]
        })
        return isUpdated ? updatedState : state
    }
}

export default combineReducers