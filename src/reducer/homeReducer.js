import { HOME_TREES, HOME_TREES_DETAIL, HOME_TREES_PAY, HOME_TREES_ORDER_FORM } from '../action/actionType'

const initState = {
    trees: [],
    treesDetail: [{}, {}],
    payTree: '',
    userTreesOrder: []
}
const homeReducer = (state = initState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case HOME_TREES:
            newState.trees = action.payload
            break;
        case HOME_TREES_DETAIL:
            newState.treesDetail = action.payload
            break;
        case HOME_TREES_PAY:
            newState.payTree = action.payload.message
            break;
        case HOME_TREES_ORDER_FORM:
            newState.userTreesOrder = action.payload.data.myTreeList
            break;
        default:
            break;
    }
    return newState
}
export default homeReducer  