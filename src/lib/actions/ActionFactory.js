import {ActionType} from '../reducers/constants.js'

class ActionFactory{    
    
    static getActionFactory(){
        if(!this[factory])
        return new ActionFactory();
    }
    
    TodoAction(text){
        return{
            type:ActionType.TODO,
            description: text
        }
    }
    
    ToggleAction(index,status){
        return {
            type: ActionType.TOGGLE,
            index: index,
            status: status
        }
    }
    
    SetVisibility(filter){
        return {
            type: ActionType.TOGGLE,
            filter: filter
        }
    }
}
