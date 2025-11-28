import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { reducer } from './reducer'

rootReducer = combineReducers({app: reducer})

export const store = createStore(rootReducer, applyMiddleware(thunk))