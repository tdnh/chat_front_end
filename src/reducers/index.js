
// import { combineReducers } from 'redux';
// import { connect } from 'react-redux';
// import {login, RECEIVE_LOGIN} from '../actions';
// import * as types from '../constants/ActionTypes';
import user from './user';



//  const userInfo = (state = {userInfo: {}}, action) => {
//   console.log('reducer userInfo action', action);
//   console.log('reducer userInfo state', state);
//   switch(action.type) {
//     case types.RECEIVE_LOGIN:
//       console.log('action', action);
//       console.log('state', state);
//       return {
//         userInfo: action.userInfo
//       }
//     default:
//       return state;
//   }
// };

// function mapStatetoProps(state) {
//   return {
//     state
//   }
// };

// function mapDispatchToProps(dispatch) {
//   return {
//     dispatch
//   }
// };

// const reducer = connect(mapStatetoProps, mapDispatchToProps)(reducers);


// const reducer = combineReducers({
//   user
// });


export default {
  user
};