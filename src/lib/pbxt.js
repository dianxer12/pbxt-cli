import combineReducers from './combineReducers.js'

const increment = (state,action) => {
    if(typeof action['value'] === 'number' && typeof action['distance'] === 'number'){
        return action.value + action.distance*3
    }
    return 0;
}

const decrement = (state,action) => {
    if(typeof action['value'] === 'number' && typeof action['distance'] === 'number'){
        return action.value - action.distance
    }
    return 0;
}

console.log(combineReducers({increment,decrement})({},{distance:4}))
console.log(combineReducers()({},{distance:4}))