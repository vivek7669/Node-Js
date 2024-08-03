const mongoose = require('mongoose');
require('dotenv').config();
const connectDb = () => {
    let dbconec = mongoose.connect(`${process.env.DB_URL}`);
    console.log(`connect the database.`);
}

module.exports = connectDb;