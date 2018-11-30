var mongoose = require('../config/mongoose').mongo
var MeerkatSchema = new mongoose.Schema({
    name: {type : String, required : true},
    age : {type : Number, required : true},
    favorite_food : {type : String, required : true},
})
mongoose.model('Meerkat', MeerkatSchema); 
console.log('models file')

module.exports = {
    meerkat : mongoose.model('Meerkat') 
}