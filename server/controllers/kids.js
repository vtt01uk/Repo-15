var mongoose = require('mongoose');
var kid = mongoose.model('Kid');
var organisation = mongooose.model('Organisation');

module.exports = (function(){
	return {
		add_kid: function(req, res){
			var newKid = new Kid(req.body);
			newKid.save(function(err, result){
				if(err){
					console.log('error adding');
				} else {
					console.log('successfully added a kid');
					res.redirect('');
				}
			});
		}),
		get_organisations : function(req,res){
			organisation.find({},function(err,results){
				if(err) {
					console.log('error');
				} else {
					res.json(results);
				}		
			})
		}
	}
})();


