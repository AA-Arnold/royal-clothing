import { userActionTypes } from './user.types'

export const setCurrentUsers = (user) => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})