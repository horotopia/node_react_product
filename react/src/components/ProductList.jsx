import { Button } from "@mui/material";
import Grid from "@mui/material/Grid2";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import createProduct from "../api/createProduct";
import ProductCard from "./ProductCard";

const ProductList = ({ products }) => {
  const [values, setValues] = useState({
    name: "",
    type: "",
    price: "",
    rating: "",
    warranty_years: "",
    available: false,
  });

  const handleCreateClick = () => {
    if (
      !values.name ||
      !values.type ||
      !values.price ||
      !values.rating ||
      !values.warranty_years ||
      !typeof values.available === "boolean"
    ) {
      return;
    }
    console.log("values", values);
    createProduct(values).then((data) => {
      console.log("dataCreate", data);
    });
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      setValues({
        ...values,
        [name]: checked,
      });
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  return (
    <Grid
      container
      rowSpacing={2}
      columnSpacing={{ xs: 12, sm: 6, md: 4 }}
      style={{ padding: "20px" }}
    >
      {products.map((product, index) => (
        <Grid key={index} size={6}>
          <ProductCard product={product} />
        </Grid>
      ))}
      <Grid>
        <TextField
          required
          name="name"
          id="outlined-required"
          label="name"
          placeholder="iPhone, MacBook, ..."
          onChange={handleChange}
        />
        <TextField
          required
          name="type"
          id="outlined-required"
          label="type"
          placeholder="smartphone, laptop, ..."
          onChange={handleChange}
        />
        <TextField
          required
          name="price"
          id="outlined-required"
          label="price"
          type="number"
          placeholder="100, 200, 300, ..."
          onChange={handleChange}
        />
        <TextField
          required
          name="rating"
          id="outlined-required"
          label="rating"
          type="number"
          placeholder="1, 2, 3, ..."
          onChange={handleChange}
        />
        <TextField
          required
          name="warranty_years"
          id="outlined-required"
          label="warranty_years"
          type="number"
          placeholder="1 an, 2 ans, 3ans, ..."
          onChange={handleChange}
        />
        <TextField
          required
          name="available"
          id="outlined-required"
          label="available"
          placeholder="true or false"
          type="checkbox"
          onChange={handleChange}
        />
        <br />
        <Button size="small" variant="contained" onClick={handleCreateClick}>
          Nouveau Produit
        </Button>
      </Grid>
    </Grid>
  );
};

export default ProductList;
