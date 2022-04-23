import { AddInformationAPI, LogInAPI, SignUpAPI } from '../../util/API';

const LOGIN = 'LOGIN';
const LOGIN_FAIL = 'LOGIN_FAIL';
const REGISTER = 'REGISTER';
const REGISTER_FAIL = 'REGISTER_FAIL';
const LOGOUT = 'LOGOUT';
const UPDATE_USER_PROFILE = 'UPDATE_USER_PROFILE';

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
      user.token = data.accesstoken;
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
      user.token = data.accesstoken;
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

const updateUserInfo = (values) => async (dispatch, getState) => {
  try {
    const { token } = getState().user.userInfo;
    const data = await AddInformationAPI(values, token);
    if (data.status === true) {
      alert(data.message);
      dispatch({
        type: UPDATE_USER_PROFILE,
        updatedValues: values,
      });
    }
    if (data.status === false) throw new Error(data.message);
  } catch (err) {
    alert(err.message);
  }
};

export {
  loginUser,
  LOGIN,
  LOGIN_FAIL,
  REGISTER,
  REGISTER_FAIL,
  UPDATE_USER_PROFILE,
  LOGOUT,
  logoutUser,
  registerUser,
  updateUserInfo,
};
