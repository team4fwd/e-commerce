// API for sign up
export const SignUpAPI = (values) =>
  fetch('https://e-commerce-fwd.herokuapp.com/users/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((data) => data.message);

// API for login
export const LogInAPI = (values) =>
  fetch('https://e-commerce-fwd.herokuapp.com/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((data) => data);

export const AddOrderAPI = (userId, order) => {
  fetch('https://e-commerce-fwd.herokuapp.com/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      ...order,
    }),
  })
    .then((res) => res.json())
    .then((data) => data.order);
};
