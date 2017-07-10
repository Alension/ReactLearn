import {INCREASE,DECREASE}from './actions'
const initSate={
  num:0
}

export default function createReducer(state=initSate,action) {
    console.log(action)
    switch (action.type){
        case INCREASE:
            let s=Object.assign({},state,{num:state.num+1})
          return s
        case DECREASE:
            return Object.assign({},state,{num:state.num-1})
        default:
          return state;
    }
}

