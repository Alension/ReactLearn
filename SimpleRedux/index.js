/**
 * Created by Alen on 2017/7/4.
 */
import {createStore} from 'redux'
import todoApp from './reducers'

let store=createStore(todoApp)