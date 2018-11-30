var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meerkats');
var MeerkatSchema = new mongoose.Schema({
    name: {type : String, required : true},
    age : {type : Number, required : true},
    favorite_food : {type : String, required : true},
})
mongoose.model('Meerkat', MeerkatSchema); 
mongoose.Promise = global.Promise;


module.exports = {
    meerkat : mongoose.model('Meerkat') 
}