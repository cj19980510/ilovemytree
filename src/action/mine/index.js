import {
    GET_MINE_LOGIN, GET_MINE_MSG, GET_USER_MSG, GET_MY_ZOO, GET_USER_IMG
} from './actionType'
import request from './request'
// const querystring = require("querystring");

//获取验证码
export const getMineMsg = mobile => {
    return async dispatch => {
        const result = await request({
            url: '/user/sendmsm',
            params: {
                mobile
            }
        })
        // console.log(result.data);
        dispatch({
            type: GET_MINE_MSG,
            payload: result.data
        })
    }
}

// 验证登录
export const getMineLogin = (mobile, phoneCode) => {
    return async dispatch => {
        const result = await request({
            url: '/user/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            // data: querystring.stringify({
            //     mobile: mobile,
            //     phoneCode: phoneCode
            // }),
            params: {
                mobile,
                phoneCode
            }
        })
        if (result.data.success) {
            localStorage.setItem('userId', result.data.data.userId)
            localStorage.setItem('token', true);
            localStorage.setItem('user', JSON.stringify(result.data.data))
        } else {
            localStorage.setItem('token', false);
        }
        console.log(result.data)
        dispatch({
            type: GET_MINE_LOGIN,
            payload: result.data
        })
    }
}

//获取用户信息
export const getUserMsg = userId => {
    return async dispatch => {
        const result = await request({
            url: '/user/information',
            params: {
                userId
            }
        })
        // console.log(result.data.data);
        dispatch({
            type: GET_USER_MSG,
            payload: result.data.data
        })
    }
}

//查询生态公益林myZoo
export const getMyZoo = (userId, treeTypeId) => {
    return async dispatch => {
        const result = await request({
            url: '/order/queryOrder',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            params: {
                userId: userId,
                treeTypeId: treeTypeId
            }
        })
        // console.log(result.data.data);
        dispatch({
            type: GET_MY_ZOO,
            payload: result.data.data
        })
    }
}
//更改用户头像
export const getUserImg = imageFile => {
    return async dispatch => {
        const result = await request({
            url: '/user/portrait',
            params: {
                imageFile
            },
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        })
        console.log(result.data);
        dispatch({
            type: GET_USER_IMG,
            payload: result.data
        })
    }
}

