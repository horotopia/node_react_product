import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import getAllProducts from "./api/getAllProducts";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch all products
    getAllProducts().then((data) => {
      console.log("data2", data);
      setProducts(data);
    });
  }, []);

  return (
    <Box sx={{ width: "100%" }}>
      <Typography variant="h3" align="center" gutterBottom>
        Liste de Produits
      </Typography>
      <ProductList products={products} />
    </Box>
  );
}

export default App;
