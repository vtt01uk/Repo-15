   var kids = angular.module('kids', ['ngRoute']);
   
   kids.factory('NewKidFactory',function($http){
    var factory = {};
    factory.addKids = function(info,callback){
        $http.post('/add_kid', info).success(function(output){
            callback(output);
        });        
    };

    kids.controller('NewKidsController', function($scope,$location,$routeParams, NewKidFactory){

    	$scope.addKid = function()
    	{
    		NewKidFactory.addKid($scope.newkid);
    	};
	});

