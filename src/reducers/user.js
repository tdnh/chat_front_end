import * as types from '../constants/ActionTypes';



export default function user(state = {}, action) {
  switch(action.type) {
    case types.RECEIVE_LOGIN:
      return {
        ...state,
        _id: action.userInfo.resp._id,
        name: action.userInfo.resp.name,
        email: action.userInfo.resp.email,
        token: action.userInfo.resp.token
      }
    case types.RECEIVE_REGISTER:
      return {
        ...state,
        _id: action.userInfo.resp._id,
        name: action.userInfo.resp.name,
        email: action.userInfo.resp.email
      }
    default:
      return state;
  }
};