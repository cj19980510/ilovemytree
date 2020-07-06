import { WISHINDEX } from '../action/actionType'
const initState = {
    data: null
}
const wishindexReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == WISHINDEX)
        newState.data = action.payload

    return newState
}
export default wishindexReducer