var Meerkat = require('../models/meerkat').meerkat
console.log('controllers file')

module.exports = {
    index : function(req, res){
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
    },

    new : function(req, res){
        res.render('new')
    },

    viewDetails : function(req, res){
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
    },

    update : function(req, res){
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
    },

    create : function(req, res){
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
    },

    edit : function(req, res){
        Meerkat.update({_id : Object(req.params.id)}, {$set : {name : req.body.name, age : req.body.age, favorite_food : req.body.favorite_food}}, function(err){
            if (err){
                console.log("Something went wrong: " + err)
                res.redirect('/')
            }
            else {
                res.redirect('/')
            }
        })
    },

    delete : function(req, res){
        Meerkat.remove({_id : Object(req.params.id)}, function(err){
            if (err){
                console.log("Something went wrong: " + err)
                res.redirect('/')
            }
            else {
                res.redirect('/')
            }
        })
    }
}