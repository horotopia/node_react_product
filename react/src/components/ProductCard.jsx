import {
  Button,
  Card,
  CardActions,
  CardContent,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import deleteProduct from "../api/deleteProduct";
import updateProduct from "../api/updateProduct";

const ProductCard = ({ product }) => {
  const [isUpdateMode, setIsUpdateMode] = useState(false);
  const [values, setValues] = useState({
    name: product.name,
    type: product.type,
    price: product.price,
    rating: product.rating,
    warranty_years: product.warranty_years,
    available: product.available,
  });

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

  const handleValidateUpdateClick = () => {
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
    updateProduct(product.id, values).then((data) => {
      // TODO: Voir pourquoi updateProduct ne fonctionne pas
      console.log("dataUpdate", data);
    });
  };

  const handleUpdateClick = () => {
    setIsUpdateMode(!isUpdateMode);
  };

  const handleDeleteClick = () => {
    deleteProduct(product._id).then((data) => {
      console.log("dataSuppr", data);
    });
  };

  return (
    <Card style={{ margin: "10px", maxWidth: "300px" }}>
      <CardContent>
        <TextField
          style={{ display: isUpdateMode ? "block" : "none" }}
          disabled={!isUpdateMode}
          required
          name="name"
          id="outlined-required"
          label="name"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">{product.name}</InputAdornment>
              ),
            },
          }}
          onChange={handleChange}
        />
        <TextField
          style={{ display: isUpdateMode ? "block" : "none" }}
          required
          name="type"
          id="outlined-required"
          label="type"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">{product.type}</InputAdornment>
              ),
            },
          }}
          onChange={handleChange}
        />
        <TextField
          style={{ display: isUpdateMode ? "block" : "none" }}
          required
          name="price"
          id="outlined-required"
          label="price"
          type="number"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {product.price}
                </InputAdornment>
              ),
            },
          }}
          onChange={handleChange}
        />
        <TextField
          style={{ display: isUpdateMode ? "block" : "none" }}
          required
          name="rating"
          id="outlined-required"
          label="rating"
          type="number"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {product.rating}
                </InputAdornment>
              ),
            },
          }}
          onChange={handleChange}
        />
        <TextField
          style={{ display: isUpdateMode ? "block" : "none" }}
          required
          name="warranty_years"
          id="outlined-required"
          label="warranty_years"
          type="number"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {product.warranty_years}
                </InputAdornment>
              ),
            },
          }}
          onChange={handleChange}
        />
        <TextField
          style={{ display: isUpdateMode ? "block" : "none" }}
          required
          name="available"
          id="outlined-required"
          label="available"
          fullWidth
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  {product.available}
                </InputAdornment>
              ),
            },
          }}
          type="checkbox"
          onChange={handleChange}
        />
        <Typography
          variant="h5"
          component="div"
          style={{ display: isUpdateMode ? "none" : "block" }}
        >
          {product.name}
        </Typography>
        <Typography
          color="text.secondary"
          style={{ display: isUpdateMode ? "none" : "block" }}
        >
          {product.description}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          style={{ display: isUpdateMode ? "none" : "block" }}
        >
          Catégorie: {product.type}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          style={{ display: isUpdateMode ? "none" : "block" }}
        >
          {product.price} €
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          style={{ display: isUpdateMode ? "none" : "block" }}
        >
          {product.rating} ★
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          style={{ display: isUpdateMode ? "none" : "block" }}
        >
          {product.warranty_years > 1
            ? `Garantie de ${product.warranty_years} ans`
            : product.warranty_years > 0
            ? "Garantie de 1 an"
            : "Pas de garantie"}
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          style={{ display: isUpdateMode ? "none" : "block" }}
        >
          {product.available ? "Disponible" : "Indisponible"}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" variant="contained" onClick={handleUpdateClick}>
          Update
        </Button>
        <Button size="small" variant="contained" onClick={handleDeleteClick}>
          Delete
        </Button>
        <Button
          style={{ display: isUpdateMode ? "block" : "none" }}
          size="small"
          variant="contained"
          onClick={handleValidateUpdateClick}
        >
          Validate
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
