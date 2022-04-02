const api = "https://e-commerce-fwd.herokuapp.com/users/add"


export const signUp = (userData) =>
  fetch(`${api}/signUp`, {
    method: 'POST',
    headers: {
      ...headers,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ userData })
  }).then(res => res.json())
    .then(Response => Response.message)
