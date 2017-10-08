import api from '../api';
import * as types from '../constants/ActionTypes';


function requestLogin(userInput) {
  return {
    type: types.REQUEST_LOGIN,
    userInput
  }
};


function receiveLogin(userInfo) {
  return {
    type: types.RECEIVE_LOGIN,
    userInfo
  }
};

export const userLogin = (user) => dispatch => {
  
  // console.log('action userLogin');
  // console.log('user',user);
  // console.log('dispatch',dispatch);
  api.login(user, (err, userInfo) => {
    if (err) return console.log(err);
    dispatch(receiveLogin(userInfo));
  });
}


// export function userLogin(userInput) {
//   return function (dispatch) {

//     // dispatch an action
//     dispatch(requestLogin(userInput));

//     return fetch('').then(
//       resps => resps.json(),
//       err => console.log('errrrr', err)
//     ).then(json => dispatch(receiveLogin(json)));

//   }
// };