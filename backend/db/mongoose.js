const mongoose = require("mongoose");
//const dotenv = require("dotenv");
const db = 'mongodb://localhost:27017/LibraryApp2';

//const DB = process.env.DATABASE;

const InitiateMongoServer = async() => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log("Connected to DB!");
    } catch (e) {
        console.log(e);
        throw e;
    }
};

module.exports = InitiateMongoServer;