const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log('DB Connected!');
    } catch (error) {
        console.error('DB connection Error:', error);
    }
};

module.exports = connectDB;
