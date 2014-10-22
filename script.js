var myApp= angular.module("myApp", []);

myApp.controller("MyController", function($scope, $http){

	// $scope.errorMessage= false;
	$scope.submit=function(keyword){
		var url="https://api.instagram.com/v1/tags/"+keyword+"/media/recent";
		var request={
			client_id: "0c7279e3eddd47959eea95d6a3a3c83f",
			outputMode: "json",
			showSourceText: "1",
			jsonp: "JSON_CALLBACK"
		};

	$http({
		method: "JSONP",
		url: url,
		params: request
	}).
	success(function(results){
		$scope.results= results;

	}).
	error(function(){
		alert("error");
	})


	};


});