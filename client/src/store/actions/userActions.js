import { LogInAPI, SignUpAPI } from '../../API';

const LOGIN = 'LOGIN';
const LOGIN_FAIL = 'LOGIN_FAIL';
const REGISTER = 'REGISTER';
const REGISTER_FAIL = 'REGISTER_FAIL';
const LOGOUT = 'LOGOUT';

const logUserIn = (user) => ({
  type: LOGIN,
  user,
});

const loginFailed = (errMsg) => ({
  type: LOGIN_FAIL,
  errMsg,
});

const register = (user) => ({
  type: REGISTER,
  user,
});

const registerFailed = (errMsg) => ({
  type: REGISTER_FAIL,
  errMsg,
});

const logUserOut = () => ({
  type: LOGOUT,
});

const loginUser = (userInfo) => async (dispatch) => {
  try {
    const data = await LogInAPI(userInfo);

    if (data.status === true) {
      const { user } = data;
      dispatch(logUserIn(user));
      localStorage.setItem('userInfo', JSON.stringify(user));
    }

    if (data.status === false) {
      throw new Error(data.message);
    }
  } catch (err) {
    dispatch(loginFailed(err.message));
  }
};

const registerUser = (userInfo) => async (dispatch) => {
  try {
    const data = await SignUpAPI(userInfo);

    if (data.status === true) {
      const { user } = data;
      dispatch(register(user));
      localStorage.setItem('userInfo', JSON.stringify(user));
    }

    if (data.status === false) {
      throw new Error(data.message);
    }
  } catch (err) {
    dispatch(registerFailed(err.message));
  }
};

const logoutUser = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch(logUserOut());
};

export {
  loginUser,
  LOGIN,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  LOGOUT,
  logoutUser,
  registerUser,
};
