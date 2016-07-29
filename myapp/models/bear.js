var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BearSchema = new Schema({
    name: String,
    age: Number,
    endereco: String,
    bairro: String,
    cidade: String
});

module.exports = mongoose.model('Bear', BearSchema);