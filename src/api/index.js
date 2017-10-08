import config from '../config';




function login(user, cb) {
  // return fetch('').then(
  //   resps => resps.json(),
  //   err => console.log('errrrr', err)
  // ).then(json => dispatch(receiveLogin(json)));
  let body = {
    email: user.email,
    password: user.password
  };

  fetch(
    `${config.url}/users/login`,
    { 
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    }
  ).then(resp => {
    return resp.json();
  }).then(data => {
    console.log('api login response', data);
    return cb(null, data);
  }).catch(err => {
    console.log(err);
    return cb(err);
  });
};






export default {
  login
}