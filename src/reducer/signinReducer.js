import { POSTSINGIN } from '../action/actionType'
const initState = {
    data: null
}
const signinReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == POSTSINGIN)
        newState.data = action.payload

    return newState
}
export default signinReducer