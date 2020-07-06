import request from '../request'
import { POSTSINGIN } from '../actionType'
export const signIn = (userId) => {
    console.log(userId)
    return async dispatch => {
        const result = await request({
            url: '/dream/signin',
            params: {
                userId: userId
            }
        })
        const action = {
            type: 'POSTSINGIN',
            payload: result
        }
        console.log(action)
        dispatch(action)
    }
}

