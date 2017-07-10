/**
 * Created by Alen on 2017/7/4.
 */
import {VisibilityFilters, SET_VISIBILITY_FILTER, ADD_TODO, TOGGLE_TODO} from './actions'

const initialState={
    visibilityFilter:VisibilityFilters.SHOW_ALL,
    todos:[]
}

function todoApp(state=initialState,action) {
    switch (action.type){
        case SET_VISIBILITY_FILTER:
            return Object.assign({},state,{visibilityFilter:action.filter});
        case ADD_TODO:
            return Object.assign({},state,{
                todos:[
                    ...state.todos,
                    {
                        text:action.text,
                        completed:false
                    }
                ]
            });
        case TOGGLE_TODO:
            return Object.assign({},state,{
                /*todos:[
                    ...state.todos,
                    {
                        text:state.todos[action.index].text,                      /!*不知道这样写有没有问题*!/
                        completed:!state.todos[action.index].completed
                    }
                ]*/
                todos:state.todos.map((todo,index)=>{
                    if (index==action.index){
                        return Object.assign({},todo,{
                            completed:!todo.completed
                        })
                    }
                    return todo;
                })
            })
        default:
            return state;
    }

}