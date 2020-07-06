// 获取愿望详情
import request from '../request'
import { GETMYWISH } from '../actionType'
export const wishList = (userId) => {
    // console.log(userId)
    return async dispatch => {
        const result = await request({
            url: '/dream/dreamlist',
            params: { userId: userId }
        })
        // console.log(result.data.data)
        const action = {
            type: GETMYWISH,
            payload: result.data.data
        }
        dispatch(action)
    }
}

