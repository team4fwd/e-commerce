import {
  ADD_ORDER,
  ADD_ORDER_FAILED,
  RESET_ORDER,
} from '../actions/orderActions';

const orderReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_ORDER:
      return { success: true, order: action.order };
    case ADD_ORDER_FAILED:
      return { error: action.msg };
    case RESET_ORDER:
      return {};
    default:
      return state;
  }
};

export default orderReducer;
