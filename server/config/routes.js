var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/meerkats');
var MeerkatSchema = new mongoose.Schema({
    name: {type : String, required : true},
    age : {type : Number, required : true},
    favorite_food : {type : String, required : true},
})
mongoose.model('Meerkat', MeerkatSchema); 
var Meerkat = mongoose.model('Meerkat') 
mongoose.Promise = global.Promise;

module.exports = function(app){
    
    // GET Routes
    // Root Request
    app.get('/', function(req, res) {
        var all;
        Meerkat.find({}, function(err, meerkats){
            if (err){
                console.log('Something went wrong' + err)
                res.redirect('/')
            } else {
                all = meerkats
                // console.log(meerkats)
                res.render('index', {meerkats : all});
            }
        })
    })
    
    //form to create new meerkat
    app.get('/new', function(req, res){
        res.render('new')
    })
    
    //page to view details
    app.get('/meerkats/:id', function(req, res){
        var myMeerkat;
        Meerkat.find({_id : Object(req.params.id)}, function(err, meerkat){
            if (err){
                console.log('Something went wrong: ' + err)
                res.redirect('/')
            } else {
                myMeerkat = meerkat[0]
                res.render('meerkat', {meerkat : myMeerkat})
            }
        })
    })
    
    //form to update a profile
    app.get('/meerkats/edit/:id', function(req, res){
        var myMeerkat;
        Meerkat.find({_id : Object(req.params.id)}, function(err, meerkat){
            if (err){
                console.log('Something went wrong: ' + err)
                res.redirect('/')
            } else {
                myMeerkat = meerkat[0]
                res.render('editMeerkat', {meerkat : myMeerkat})
            }
        })
    })
    
    //POST routes
    
    //route to create a new meerkat
    app.post('/meerkats', function(req, res){
        var newMeerkat = new Meerkat({name : req.body.name, age : req.body.age, favorite_food : req.body.favorite_food})
        newMeerkat.save(function(err){
            if (err){
                console.log('Something went wrong' + err)
                res.redirect('/')
            } else {
                console.log("Created a new meerkat")
                res.redirect('/')
            }
        })
    })
    
    //route to edit an existing meerkat
    app.post('/meerkats/:id', function(req, res){
        Meerkat.update({_id : Object(req.params.id)}, {$set : {name : req.body.name, age : req.body.age, favorite_food : req.body.favorite_food}}, function(err){
            if (err){
                console.log("Something went wrong: " + err)
                res.redirect('/')
            }
            else {
                res.redirect('/')
            }
        })
    })
    
    //route to delete a meerkat from the db
    app.post('/meerkats/destroy/:id', function(req, res){
        Meerkat.remove({_id : Object(req.params.id)}, function(err){
            if (err){
                console.log("Something went wrong: " + err)
                res.redirect('/')
            }
            else {
                res.redirect('/')
            }
        })
    })
}