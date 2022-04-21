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
    .then((data) => data);

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

export const AddOrderAPI = (userId, order, token) =>
  fetch('https://e-commerce-fwd.herokuapp.com/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify({
      user_id: userId,
      ...order,
    }),
  })
    .then((res) => res.json())
    .then((data) => data.order);

export const AddCategoryAPI = (values, token) =>
  fetch('https://e-commerce-fwd.herokuapp.com/cateogry/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((data) => data);

export const AddProductAPI = (values, token) =>
  fetch('https://e-commerce-fwd.herokuapp.com/products/create', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: JSON.stringify(values),
  })
    .then((res) => res.json())
    .then((data) => data);

export const GetCategoryAPI = (token) =>
  fetch('https://e-commerce-fwd.herokuapp.com/cateogry', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
  })
    .then((res) => res.json())
    .then((data) => data);

export const GetAllProductsAPI = () =>
  fetch('https://e-commerce-fwd.herokuapp.com/products')
    .then((res) => res.json())
    .then((data) => data);

export const DeleteAPI = (id, kind, token) =>
  fetch(`https://e-commerce-fwd.herokuapp.com/${kind}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: null,
  }).then((res) => res.json());

// export const updateCategory = () =>
//   fetch(`https://e-commerce-fwd.herokuapp.com/cateogry/${id}`, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify()
//   }).then(res => res.json())

// export const updateProductAPI = (values) =>
//   fetch("https://e-commerce-fwd.herokuapp.com/products/" + id, {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json'
//     },

//     body: JSON.stringify(values)
//   }).then(res => res.json()).then((data) => data
//   );
