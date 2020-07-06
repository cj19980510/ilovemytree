import { GETFRIEND } from '../action/actionType'
const initState = {
    data: null
}
const findfriendReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == GETFRIEND)
        newState.data = action.payload

    return newState
}
export default findfriendReducer