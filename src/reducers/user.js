import * as types from '../constants/ActionTypes';



export default function user(state = {}, action) {
  switch(action.type) {
    case types.RECEIVE_LOGIN:
      let userInfo = {
        _id: action.userInfo.resp._id,
        name: action.userInfo.resp.name,
        email: action.userInfo.resp.email,
        token: action.userInfo.resp.token
      }
      return {
        ...state,
        ...userInfo
      }
    default:
      return state;
  }
};