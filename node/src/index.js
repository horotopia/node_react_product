const express = require("express");
const dotenv = require("dotenv");
const productRoutes = require("./routes/productRoutes");
const connectionDB = require("./services/mongooseService");

const app = express();
dotenv.config();

app.use(express.json());

app.use("/product", productRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);

  connectionDB();
});
