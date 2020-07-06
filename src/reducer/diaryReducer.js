import { POSTDIARY } from '../action/actionType'
const initState = {
    data: null
}
const diaryReducer = (state = initState, action) => {
    // console.log(action.type)
    const newState = {
        ...state
    }
    if (action.type == POSTDIARY)
        newState.data = action.payload
    // console.log(newState)
    return newState
}
export default diaryReducer