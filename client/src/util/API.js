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


    export const GetAllOrdersAPI = (token)  =>
    fetch('https://e-commerce-fwd.herokuapp.com/order', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': token,
      },
    })


export const DeleteAPI = (id, kind, token) =>
  fetch(`https://e-commerce-fwd.herokuapp.com/${kind}/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,
    },
    body: null,
  }).then((res) => res.json());




//user
  export const AddInformationAPI = (values, token) =>

  fetch("https://e-commerce-fwd.herokuapp.com/userprofile/edit", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-access-token': token,

    },
    body: JSON.stringify(values)
  }).then(res => res.json())
    .then(data => data
    )

export const ChangePassAPI = (values, token) =>

fetch("https://e-commerce-fwd.herokuapp.com/users/changePass", {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'x-access-token': token,

  },

  body: JSON.stringify(values)
}).then(res => res.json())
  .then(data => data
  )
export const GetOrdersAPI = (token) =>

fetch("https://e-commerce-fwd.herokuapp.com/order/userorder", {
  method: 'GET',
  headers: {
    'x-access-token': token,


  },
}).then(res => res.json())
  .then(data => data
  )


