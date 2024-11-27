const BASE_URL = "http://localhost:5000/product";

const createProduct = async (newProduct) => {
  let data = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export default createProduct;
