import { GETFRIENDWISH } from '../action/actionType'
const initState = {
    data: null
}
const friendwishReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == GETFRIENDWISH)
        newState.data = action.payload

    return newState
}
export default friendwishReducer