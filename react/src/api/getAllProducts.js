const BASE_URL = "http://localhost:5000/product";

const getAllProducts = async () => {
  console.log("getAllProducts");
  let data = await fetch(`${BASE_URL}/`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
      return [];
    });
  return data;
};

export default getAllProducts;
