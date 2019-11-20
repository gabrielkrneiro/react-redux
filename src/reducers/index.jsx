import { combineReducers } from 'redux'

import { clickReducer } from './clickReducer'
// import { otherReducer } from './otherReducer'

export const Reducers = combineReducers({
    clickState: clickReducer,
    // otherState: otherReducer
})
