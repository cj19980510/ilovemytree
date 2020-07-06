import { POSTWISH } from '../action/actionType'
const initState = {
    data: null
}
const detailwishReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == POSTWISH)
        newState.data = action.payload

    return newState
}
export default detailwishReducer