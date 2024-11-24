const dotenv = require("dotenv");
dotenv.config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGODB_URI, {
      auth: {
        username: process.env.MONGODB_USERNAME,
        password: process.env.MONGODB_PASSWORD,
      },
      authSource: "admin",
      dbName: process.env.DATABASE_NAME,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = connectDB;
