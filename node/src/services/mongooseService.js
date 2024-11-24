const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

const mongo_uri = process.env.MONGODB_URI;


const connectDB = async () => {

    await mongoose.connect(mongo_uri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = connectDB;