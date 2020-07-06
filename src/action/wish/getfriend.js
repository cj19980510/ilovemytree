// 获取朋友列表

import { GETFRIEND } from '../actionType'
import request from '../request'
export const getfriend = (friendinfo) => {



    return async dispatch => {
        const result = await request({
            url: '/dream/friends',
            params: { queryUser: friendinfo }
        })
        // console.log(result.data.data)
        const action = {
            type: GETFRIEND,
            payload: result.data.data
        }
        dispatch(action)
    }

}


