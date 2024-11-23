const mongoose = require('mongoose');

const connectDB = async () => {
    const mongo_uri = process.env.MONGO_URI;

    if (!mongo_uri) {
        console.error('MONGO_URI is not defined');
    }

    mongoose.connect(mongo_uri)
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error(error);
        });
};

module.exports = connectDB;