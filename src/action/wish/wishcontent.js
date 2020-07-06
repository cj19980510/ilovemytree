// 获取朋友列表

import { WISHCONTENT } from '../actionType'
import request from '../request'
export const getwishcontent = (params) => {



    return async dispatch => {
        const result = await request({
            url: '/dream/dreamdetail',
            params: params
        })
        // console.log(result.data.data)
        const action = {
            type: WISHCONTENT,
            payload: result.data.data
        }
        dispatch(action)
    }

}


