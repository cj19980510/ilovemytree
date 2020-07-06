import {
    GETOLDTREE,
    GETMORE_OLDTREE,
    GETOLD_DETAIL,
    OLDSUREFOSTER,
    GETUSER_BLANCEINFO,
    GETUSER_BLANCE,
    GETRECHARGE,
    GETUSER_EnergyINFO,
    GETUSER_Energy,
    GETMY_OLDTREE
} from '../action/actionType'

const { Map } = require('immutable')

const initState = {
    oldtree: [],
    oldtreeIds: [],
    oldDetail: [
        {
            "treeId": 0,
            "treePrice": '',
            "treeAge": '',
            "treePublisher": ''
        },
        {
            "treeDetailImg": '',
            "treeDetailDesc": ''
        }
    ],
    treeSureOrderData: '',
    userBlanceInfo: [],
    userBlance: {
        myMoney: 0
    },
    userRecharge: {},
    userEnergyInfo: [],
    userEnergy: 0,
    myTreeList: [],
    userInfo: {
        userImage: '',
        userName: ''
    }
}

const oldtreeReducer = (state = initState, action) => {
    const newState = { ...state }
    switch (action.type) {
        case GETOLDTREE://古树名木首页数据
            // console.log(action.payload.data.data.ancientList)
            newState.oldtree = action.payload.data.data.ancientList
            // newState.oldtreeIds = action.payload.data.moretreelistid
            break;
        case GETMORE_OLDTREE://没有
            // newState.oldtree.push(...action.payload.data)
            break;
        case GETOLD_DETAIL://详情
            // console.log(action.payload.data.data)
            newState.oldDetail = action.payload.data.data
            break;
        case OLDSUREFOSTER://确认订单，下订单
            // console.log(action.payload)
            newState.treeSureOrderData = action.payload.data.message
            break;
        case GETUSER_BLANCEINFO://用户余额详情
            newState.userBlanceInfo = action.payload.data.data
            break;
        case GETUSER_BLANCE://用户余额
            newState.userBlance = action.payload.data.data
            break;
        case GETRECHARGE://用户充值
            newState.userRecharge = action.payload.data.data
            break;
        case GETUSER_EnergyINFO://能量明细
            newState.userEnergyInfo = action.payload.data.data
            break;
        case GETUSER_Energy://能量总额
            newState.userEnergy = action.payload.data.data.userEnergy
            newState.userInfo = action.payload.data.data//用户信息
            break;
        case GETMY_OLDTREE://我的古树名木
            // console.log(action.payload.data.data.myTreeList)
            newState.myTreeList = action.payload.data.data.myTreeList
            break;
        default:
            break;
    }
    return newState
}
export default oldtreeReducer