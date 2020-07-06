// 上传日记
import request from '../request'
import { POSTDIARY } from '../actionType'
export const postDiary = (details) => {
    console.log(details)

    return async dispatch => {
        const result = await request({
            url: '/dream/writediary',
            method: 'POST',
            params: details
        })
        // console.log('result', result)
        const action = {
            type: POSTDIARY,
            payload: result
        }
        dispatch(action)
    }
}

