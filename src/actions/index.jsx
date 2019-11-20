import { CLICK_UPDATE_VALUE } from './actionTypes'

// Action Creator

// Action
export const clickButton = value => ({
    type: CLICK_UPDATE_VALUE,
    newValue: value
})