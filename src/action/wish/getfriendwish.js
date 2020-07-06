// 获取朋友列表

import { GETFRIENDWISH } from '../actionType'
import request from '../request'
export const getfriendwish = (friendId) => {



    return async dispatch => {
        const result = await request({
            url: '/dream/homepage',
            params: { userId: friendId }
        })

        const action = {
            type: GETFRIENDWISH,
            payload: result.data.data
        }
        dispatch(action)
    }

}


