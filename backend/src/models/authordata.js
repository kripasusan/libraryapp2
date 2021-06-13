const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://userone:userone@fsdfiles.gewcx.mongodb.net/LibraryApp?sretryWrites=true&w=majority');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
   
    nationality: String,
    aname: String,
    image: String,
    born: String,
    description: String

})

const authorData = mongoose.model('authorData', authorSchema);
module.exports = authorData;