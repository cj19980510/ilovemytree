// 上传心愿
import request from '../request'
import { POSTWISH } from '../actionType'
export const detailWish = (details) => {
    console.log(details)
    return async dispatch => {
        const result = await request({
            url: '/dream/wishing',
            params: details
        })
        console.log(result)
        const action = {
            type: POSTWISH,
            payload: result
        }
        dispatch(action)
    }
}

