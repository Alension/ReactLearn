/**
 * Created by Alen on 2017/7/4.
 */
import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from './actions'
import { combineReducers } from 'redux';


const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [
                ...state,
                {
                    text: action.type,
                    completed: false
                }
            ]
        case TOGGLE_TODO:
            return state.map((todo, index) => {
                if (index == action.index) {
                    return Object.assign({}, todo, {
                        completed: !todo.completed
                    })
                }
                return todo;
            })
        default:
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action){
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
}

/*
export default function todoApp(state = {}, action) {
    return {
        visibilityFilter: visibilityFilter(state.visibilityFilter, action),
        todos: todos(state.todos, action)
    }
}*/

var todoApp=combineReducers({
    visibilityFilter,
    todos
})

export default todoApp;
