const BASE_URL = "http://localhost:5000/product";

const getProductById = async (id) => {
  let data = await fetch(`${BASE_URL}/${id}`)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => {
      console.log(error);
    });
  return data;
};

export default getProductById;
