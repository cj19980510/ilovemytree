// 许愿首页
import request from '../request'
import { WISHINDEX } from '../actionType'
export const wishIndex = (userId) => {
    console.log(userId)
    return async dispatch => {
        const result = await request({
            url: '/dream/homepage',
            params: { userId: userId }
        })
        console.log(result.data.data)
        const action = {
            type: WISHINDEX,
            payload: result.data.data
        }
        dispatch(action)
    }
}

