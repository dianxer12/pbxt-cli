import {ActionTypes} from './actiontype.js'

export const VISIBILITY_FILTERS = {
    SHOW_ALL: 'show_all',
    SHOW_COMPLETE: 'show_complete',
    SHOW_ACTIVE: 'show_active'
}

/**
 * ActionCreators
 */

 export function addTodo(text){
     return {
        Type: ActionTypes.addTodo,
        Text: text
     }
 }

 export function toggleTodo(index){
     return {
         Type: ActionTypes.toggleTodo,
         Index: index
     }
 }

 export function setVisibilityFilter(filter){
     return {
         Type: ActionTypes.setVisibilityFilter,
         Filter: filter
     }
 }