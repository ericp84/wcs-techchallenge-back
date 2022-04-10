const mongoose = require ('mongoose');

let argonautSchema = mongoose.Schema({
    name: String,
})

const argonautModel = mongoose.model('argonauts', argonautSchema);

module.exports = argonautModel;