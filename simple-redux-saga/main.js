import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'

import Counter from './Counter'
import createReducer from './reducers'

const store = createStore(createReducer)

const action = type => {
  store.dispatch({type})}

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState().num}
      onIncrease={() => {action('INCREASE')}}
      onDecrease={() => action('DECREASE')} />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
