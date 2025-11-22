const URL = "http://localhost:8080";

export async function saveCart(cart) {
  console.dir(cart)
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Essential for sending JSON data
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

// export async function updateCartItem(data) {
//   let options = {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   };
//   fetch(`${URL}/cart/updateCart`, options).then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
//   });
// }


// seeding product data to DB
export async function addProductSeedData(data) {
  console.dir(JSON.stringify(data));
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(`${URL}/Products/seedData`, options).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  });
}