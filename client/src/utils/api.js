const URL = "http://localhost:8080";

export async function addItemToCart(product) {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // Essential for sending JSON data
    },
    body: JSON.stringify(product),
  };
  fetch(`${URL}/cart`, options).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response;
  });
}

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
