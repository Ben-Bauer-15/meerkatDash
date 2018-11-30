var meerkats = require('../controllers/meerkats')

module.exports = function(app){
    
    // GET Routes
    // Root Request
    app.get('/', function(req, res) {
        meerkats.index(req, res)
    })
    
    //form to create new meerkat
    app.get('/new', function(req, res){
        meerkats.new(req, res)
    })
    
    //page to view details
    app.get('/meerkats/:id', function(req, res){
        meerkats.viewDetails(req, res)
    })
    
    //form to update a profile
    app.get('/meerkats/edit/:id', function(req, res){
        meerkats.update(req, res)
    })

    
    //POST routes
    //route to create a new meerkat
    app.post('/meerkats', function(req, res){
        meerkats.create(req, res)
    })
    
    //route to edit an existing meerkat
    app.post('/meerkats/:id', function(req, res){
        meerkats.edit(req, res)
    })
    
    //route to delete a meerkat from the db
    app.post('/meerkats/destroy/:id', function(req, res){
        meerkats.delete(req, res)
    })
}