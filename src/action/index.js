import { ESPTREE } from "./actionType";
import { TREEDETAIL } from "./actionType";
import { DIARYLIST } from "./actionType";
import { DIARYDETAIL } from "./actionType";
import request from "./request";


import {HOME_TREES,HOME_TREES_DETAIL,HOME_TREES_PAY,HOME_TREES_ORDER_FORM} from './actionType'

//lt
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
} from './actionType'

// 查询特色认养树木
export const espTree = () => {
  return async dispatch => {
    const result = await request({
      // url: "http://10.31.162.50:5000/espadopt"
      url: "/homepage/treetype?treeType=1"
      // url: "/ajax/homepage/queryData"
    });
    dispatch({
      type: ESPTREE,
      payload: result
    });
  };
};

// 查询树木详情
export const treeDetail = id => {
  return async dispatch => {
    const result1 = await request({
      url: "/homepage/treedetail",
      params: {
        treeId: id
      }
    });
    dispatch({
      type: TREEDETAIL,
      payload: result1
    });
  };
};

// 查询日记列表
export const diaryList = userId => {
  return async dispatch => {
    const res = await request({
      url: "/dream/querydiarylist",
      params: {
        userId: userId
      }
    });
    dispatch({
      type: DIARYLIST,
      payload: res.data.data
    });
    console.log("action", res.data.data);
  };
};

// 查询日记详情
export const diarydetail = (userId, diaryId) => {
  return async dispatch => {
    const res1 = await request({
      url: "/dream/queryDiarydetail",
      params: {
        userId: userId,
        diaryId: diaryId
      }
    });
    dispatch({
      type: DIARYDETAIL,
      payload: res1.data.data
    });
    console.log("action", res1.data.data);
  };
};

export const getOldTree = () => {
    return async dispatch => {
        const result = await request({
            url: '/homepage/queryData',
        })
        // console.log(result)
        dispatch({
            type: GETOLDTREE,
            payload: result
        })
    }
}
// export const getMoreOldTree = (oldtreeIds) => {
//     return async dispatch => {
//         console.log('action')
//         const result = await request({
//             url: 'http://10.31.162.50:5000/moreOldtreeList',
//             params: {
//                 oldtreeIds
//             }
//         })
//         console.log('more_result', result)
//         dispatch({
//             type: GETMORE_OLDTREE,
//             payload: result
//         })
//     }
// }

export const getOldDetail = (treeId) => {
    return async dispatch => {
        const result = await request({
            url: '/homepage/treedetail',
            params: {
                treeId
            }
        })
        // console.log(result)
        dispatch({
            type: GETOLD_DETAIL,
            payload: result
        })
    }
}
export const oldSureFoster = (treeId, userId, treeName, treeTypeId, orderAccount, orderTreenum) => {//下订单
    return async dispatch => {
        const result = await request({
            method: 'POST',
            url: '/order/treeOrder',
            params: {
                treeId,
                userId,
                treeName,
                treeTypeId,
                orderAccount,
                orderTreenum
            }
        })
        // console.log(result)
        dispatch({
            type: OLDSUREFOSTER,
            payload: result
        })
    }
}


export const getUserBlanceInfo = (userId) => {//用户余额详情
    return async dispatch => {
        const result = await request({
            url: '/user/balance',
            params: {
                userId
            }
        })
        // console.log(result)
        dispatch({
            type: GETUSER_BLANCEINFO,
            payload: result
        })
    }
}
export const getUserBlance = (userId) => { //用户余额
    return async dispatch => {
        const result = await request({
            url: '/user/mymoney',
            params: {
                userId
            }
        })
        // console.log(result)
        dispatch({
            type: GETUSER_BLANCE,
            payload: result
        })
    }
}
export const getRecharge = (userId, money) => { //用户余额
    return async dispatch => {
        const result = await request({
            method: 'POST',
            url: '/user/recharge',
            params: {
                userId,
                money
            }
        })
        // console.log(result)
        dispatch({
            type: GETRECHARGE,
            payload: result
        })
    }
}
export const getUserEnergyInfo = (userId) => {//用户能量详情
    return async dispatch => {
        const result = await request({
            url: '/dream/energy/list',
            params: {
                userId
            }
        })
        // console.log(result)
        dispatch({
            type: GETUSER_EnergyINFO,
            payload: result
        })
    }
}

export const getUserEnergy = (userId) => {//用户能量
    return async dispatch => {
        const result = await request({
            url: '/user/information',
            params: {
                userId
            }
        })
        // console.log(result)
        dispatch({
            type: GETUSER_Energy,
            payload: result
        })
    }
}

export const getMyOldtree = (userId, treeTypeId) => {
    return async dispatch => {
        const result = await request({
            method: 'POST',
            url: '/order/queryOrder',
            params: {
                userId,
                treeTypeId
            }
        })
        // console.log(result)
        dispatch({
            type: GETMY_OLDTREE,
            payload: result
        })
    }
}


// 首页树木
export const getHomeTrees=()=>{
    return async dispatch=>{
        
        const result =await request({
            url:'/homepage/queryData'
        })
        dispatch({
            type:HOME_TREES,
            payload:result.data.data.ecologyList
        })
    }
}
// 树木详情
export const getHomeTreesDetail=(id)=>{
    return async dispatch=>{
        const result =await request({
            url:'/homepage/treedetail',
            params:{
                treeId:id
            }
        })
        dispatch({
            type:HOME_TREES_DETAIL,
            payload:result.data.data
        })
    }
}
// 树木订单
export const payTrees=(
                treeId,
                userId,
                treeName,
                treeTypeId,
                orderAccount,
                orderTreenum
)=>{
    return async dispatch=>{
        
        const result =await request({
            url:'/order/treeOrder',
            params:{
                treeId,
                userId,
                treeName,
                treeTypeId,
                orderAccount,
                orderTreenum
            }
        })
        dispatch({
            type:HOME_TREES_PAY,
            payload:result.data
        })
    }
}
// 用户订单列表
        export const userTreesForm=(
            userId,
            treeTypeId,   
        )=>{
        return async dispatch=>{

        const result =await request({
        url:'/order/queryOrder',
        params:{      
            userId,    
            treeTypeId,}
        })
        dispatch({
        type:HOME_TREES_ORDER_FORM,
        payload:result.data
        })
        }
        }
