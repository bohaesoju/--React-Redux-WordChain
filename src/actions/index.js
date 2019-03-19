import * as types from './ActionTypes';

export const setResult = (result) => ({
    type: types.SET_RESULT,
    result
})

export const checkResult = () => ({
    type: types.CHECK_RESULT
})
