const BASE_URL = "http://localhost:5000/product";

const updateProduct = async (id, updatedProduct) => {
  let data = await fetch(`${BASE_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export default updateProduct;
