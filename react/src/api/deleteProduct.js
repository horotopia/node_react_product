const BASE_URL = "http://localhost:5000/product";

const deleteProduct = async (id) => {
  let data = await fetch(`${BASE_URL}/delete/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export default deleteProduct;
