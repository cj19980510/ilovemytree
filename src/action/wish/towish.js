import request from '../request'
import { POSTTOWISH } from '../actionType'
export const toWish = (userId) => {
    return async dispatch => {
        const result = await request({
            url: '/dream/gowish',
            params: {
                userId: userId
            }
        })
        const action = {
            type: POSTTOWISH,
            payload: result
        }
        console.log(action)
        dispatch(action)
    }
}

