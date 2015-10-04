// var Controller = require('./../server/controllers/controller.js');
var kids = require('./../server/controllers/kids.js')

module.exports = function(app){
    app.post('/add_kid',function(req,res){
    	kids.add_kid(req,res)
    });

    app.get('/get_organisations',function(req,res){
    	res.json({name: 'Meera'});
    	// kids.get_organisations(req,res)
    });
}
