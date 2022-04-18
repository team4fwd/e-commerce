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


export const AddCategoryAPI = (values) =>

  fetch("https://e-commerce-fwd.herokuapp.com/cateogry/add", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  }).then(res => res.json())
    .then(data => data
    )


export const AddProductAPI = (values) =>

  fetch("https://e-commerce-fwd.herokuapp.com/products/create", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(values)
  }).then(res => res.json())
    .then(data => data
    )




export const GetCategoryAPI = () =>

  fetch("https://e-commerce-fwd.herokuapp.com/cateogry", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

    },
  }).then(res => res.json())
    .then(data => data
    )

export const GetProductAPI = () =>

  fetch("https://e-commerce-fwd.herokuapp.com/products", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',

    },
  }).then(res => res.json())
    .then(data => data
    )


export const updateCategory = () =>
  fetch(`https://e-commerce-fwd.herokuapp.com/cateogry/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify()
  }).then(res => res.json())


export const updateProductAPI = (values) =>
  fetch("https://e-commerce-fwd.herokuapp.com/products/" + id, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(values)
  }).then(res => res.json()).then((data) => data
  );