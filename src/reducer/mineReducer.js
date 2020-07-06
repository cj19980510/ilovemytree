import {
    GET_MINE_LOGIN, GET_MINE_MSG, GET_USER_MSG, GET_MY_ZOO, GET_USER_IMG
} from '../action/mine/actionType'

const initState = {
    data: null,
    user: null,
    tree: null,
    userImg: null
}

const mineReducer = ((state = initState, action) => {
    const newState = {
        ...state
    }
    switch (action.type) {
        case GET_MINE_MSG:
            return newState
            break;
        case GET_MINE_LOGIN:
            return newState.data == action.payload
            break;
        case GET_USER_MSG:
            return newState.user == action.payload
            break;
        case GET_MY_ZOO:
            return newState.tree == action.payload
            break;
        case GET_USER_IMG:
            return newState.userImg == action.payload
            break;
        default:
            return newState
            break;
    }
})

export default mineReducer
