import { GETMYWISH } from '../action/actionType'
const initState = {
    data: null
}
const wishlistReducer = (state = initState, action) => {
    const newState = {
        ...state
    }
    if (action.type == GETMYWISH)
        newState.data = action.payload
    // console.log(action.payload)
    return newState
}
export default wishlistReducer