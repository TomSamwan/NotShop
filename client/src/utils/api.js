const URL = "http://localhost:8080/api";

export async function saveCart(cart) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cart),
  };
  fetch(`${URL}/cart`, options).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  });
}

//handle login
export async function handleLogin(e, data) {
  e.preventDefault()
  console.dir(JSON.stringify(data));
  fetch(`${URL}/login`).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return console.log("HELLO");
  });
}