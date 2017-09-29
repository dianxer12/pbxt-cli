exports = ActionType = {
    INIT: '@pbinit'
};

const createStore = (reducer, state, enhancer) => {
    if (typeof state === 'function' &&
        enhancer === undefined){
            enhancer = state;
            state = undefined;
    }
    
    if (enhancer !== undefined){
        if(typeof enhancer !== 'function'){
            throw new Error('Argument \'enhancer\' must be a function!');
        }

        return enhancer(createStore)(reducer,state);
    }

    if(typeof reducer !== 'function'){
        throw new Error('Argument \'enhancer\' must be a function!')
    }

    let currentState = state;
    let currentReducer = reducer;
    let currentListeners = [];
    let nextListeners = currentListeners;

    function ensureMu(){
        nextListeners = currentListeners.slice(0); //make a copy of current listeners list
    }

    let getState = () => {
        return currentState;
    }

    let dispatch = (action) =>{
        if(typeof action !== 'object'){
            throw new Error('Argument \'action\' must be an object!');
        }

        if(action.type === 'undefined'){
            throw new Error ('type is a mandatory value for action!');
        }

        currentState = currentReducer(currentState,action);
        
        for(let i=0;)

        return action;
    }

    return {
        dispatch : 'dispatch',
        subscribe: 'subscribe',
        replaceReducer: 'replaceReducer',
        getState: getState
    }
}


module.exports = createStore;