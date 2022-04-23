import {
  LOGIN,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER,
  REGISTER_FAIL,
  UPDATE_USER_PROFILE,
} from '../actions/userActions';

const userReducer = (state = {}, action) => {
  switch (action.type) {
    case LOGIN:
      return { userInfo: action.user };
    case LOGIN_FAIL:
      return { error: action.errMsg };
    case REGISTER:
      return { userInfo: action.user };
    case REGISTER_FAIL:
      return { error: action.errMsg };
    case LOGOUT:
      return {};
    case UPDATE_USER_PROFILE:
      return {
        userInfo: {
          ...state.userInfo,
          userProfile: [
            {
              ...action.updatedValues,
            },
          ],
        },
      };
    default:
      return state;
  }
};

export default userReducer;
