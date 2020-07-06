import { POSTTOWISH } from '../action/actionType'
const initState = {
    data: null
}
const towishReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == POSTTOWISH)
        newState.data = action.payload

    return newState
}
export default towishReducer