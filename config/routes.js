var Controller = require('./../server/controllers/controller.js');

module.exports = function(app){
    app.post('/add_kid',function(req,res){
    	kids.add_kid(req,res)
    });
}
