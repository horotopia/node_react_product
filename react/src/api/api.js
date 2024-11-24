const BASE_URL = "http://localhost:5000/product";

const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/`);
  return handleResponse(response);
};

const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  return handleResponse(response);
};

const createProduct = async (newProduct) => {
  const response = await fetch(`${BASE_URL}/create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newProduct),
  });
  return handleResponse(response);
};

const updateProduct = async (id, updatedProduct) => {
  const response = await fetch(`${BASE_URL}/update/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updatedProduct),
  });
  return handleResponse(response);
};

const deleteProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/delete/${id}`, {
    method: "DELETE",
  });
  return handleResponse(response);
};

const handleResponse = async (response) => {
  if (response.ok) {
    return response.status === 204 ? null : response.json();
  }
  const error = await response.json();
  console.error(`Error status(${error.status}): ${error.message}`);
};

module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
