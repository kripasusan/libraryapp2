const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/LibraryApp2');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    fname: {
        type: String,
        required: true,
        trim: true
    },
    lname: {
        type: String,
        required: true,
        trim: true

    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate(value) {
            if (!validator.isEmail(value)) throw new Error("Invalid Email Provided")
        }
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    }
})

const userData = mongoose.model('userData', userSchema);

module.exports = userData;